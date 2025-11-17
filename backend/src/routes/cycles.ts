import Elysia, { t } from 'elysia';
import { cycles } from '../database/schemas';
import { db } from '../database';
import { eq, desc } from 'drizzle-orm';

export const cycleRoutes = new Elysia({ name: 'cycles' })

  .get('/api/cycles', async ({ query }) => {
    const deviceId = query.deviceId as string
    
    if (!deviceId) {
      throw new Error('deviceId é obrigatório')
    }
    
    const userCycles = await db
      .select()
      .from(cycles)
      .where(eq(cycles.deviceId, deviceId))
      .orderBy(desc(cycles.startDate))
    
    return userCycles;
  })

  .post('/api/cycles', async ({ body }) => {
    if (!body.deviceId) {
      throw new Error('deviceId é obrigatório')
    }

    const newCycle = await db
      .insert(cycles)
      .values({
        id: crypto.randomUUID(),
        deviceId: body.deviceId,
        task: body.task,
        minutesAmount: body.minutesAmount,
        startDate: new Date(body.startDate),
      })
      .returning();

    return newCycle[0]
  }, {
    body: t.Object({
      deviceId: t.String(),
      task: t.String(),
      minutesAmount: t.Number(),
      startDate: t.String(),
    })
  })

  .patch('/api/cycles/:id', async ({ params, body, query }) => {
    const deviceId = query.deviceId as string
    
    if (!deviceId) {
      throw new Error('deviceId é obrigatório')
    }
    
    // Verificar se o ciclo pertence ao deviceId
    const existingCycle = await db
      .select()
      .from(cycles)
      .where(eq(cycles.id, params.id))
      .limit(1)
    
    if (existingCycle.length === 0 || !existingCycle[0] || existingCycle[0].deviceId !== deviceId) {
      throw new Error('Ciclo não encontrado ou não autorizado')
    }
    
    const updatedCycle = await db
      .update(cycles)
      .set({
        interruptedDate: body.interruptedDate ? new Date(body.interruptedDate) : undefined,
        finishedDate: body.finishedDate ? new Date(body.finishedDate) : undefined,
        updatedAt: new Date(),
      })
      .where(eq(cycles.id, params.id))
      .returning()
    
    return updatedCycle[0]
  }, {
    body: t.Object({
      interruptedDate: t.Optional(t.String()),
      finishedDate: t.Optional(t.String()),
    }),
    params: t.Object({
      id: t.String(),
    }),
  })

  .delete('/api/cycles/:id', async ({ params, query }) => {
    const deviceId = query.deviceId as string
    
    if (!deviceId) {
      throw new Error('deviceId é obrigatório')
    }
    
    // Verificar se o ciclo pertence ao deviceId
    const existingCycle = await db
      .select()
      .from(cycles)
      .where(eq(cycles.id, params.id))
      .limit(1)
    
    if (existingCycle.length === 0 || !existingCycle[0] || existingCycle[0].deviceId !== deviceId) {
      throw new Error('Ciclo não encontrado ou não autorizado')
    }
    
    await db.delete(cycles).where(eq(cycles.id, params.id))
    
    return { success: true }
  }, {
    params: t.Object({
      id: t.String(),
    }),
  })
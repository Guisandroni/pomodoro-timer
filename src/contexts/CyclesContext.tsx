import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../lib/api'
import { getDeviceId } from '../lib/deviceId'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: { task: string; minutesAmount: number }) => void
  interruptCurrentCycle: () => void
  syncCycles: () => Promise<void>
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const syncCycles = async () => {
    try {
      const response = await api.get('/api/cycles')
      const cyclesData = response.data.map((cycle: any) => ({
        ...cycle,
        startDate: new Date(cycle.startDate),
        interruptedDate: cycle.interruptedDate ? new Date(cycle.interruptedDate) : undefined,
        finishedDate: cycle.finishedDate ? new Date(cycle.finishedDate) : undefined,
      }))
      setCycles(cyclesData)
    } catch (error) {
      console.error('Error syncing cycles:', error)
    }
  }

  useEffect(() => {
    syncCycles()
  }, [])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  async function markCurrentCycleAsFinished() {
    if (!activeCycleId) return

    try {
      await api.patch(`/api/cycles/${activeCycleId}`, {
        finishedDate: new Date().toISOString(),
      })
      
      setCycles((state) =>
        state.map((cycle) => {
          if (cycle.id === activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
      )

      setActiveCycleId(null)
      await syncCycles() 
    } catch (error) {
      console.error('Error finishing cycle:', error)
    }
  }

  async function createNewCycle(data: { task: string; minutesAmount: number }) {
    try {
      const deviceId = getDeviceId()
      const response = await api.post('/api/cycles', {
        deviceId,
        task: data.task,
        minutesAmount: data.minutesAmount,
        startDate: new Date().toISOString(),
      })

      const newCycle: Cycle = {
        id: response.data.id,
        task: response.data.task,
        minutesAmount: response.data.minutesAmount,
        startDate: new Date(response.data.startDate),
      }

      setCycles((state) => [...state, newCycle])
      setActiveCycleId(newCycle.id)
      setAmountSecondsPassed(0)
    } catch (error) {
      console.error('Error creating cycle:', error)
    }
  }

  async function interruptCurrentCycle() {
    if (!activeCycleId) return

    try {
      await api.patch(`/api/cycles/${activeCycleId}`, {
        interruptedDate: new Date().toISOString(),
      })

      setCycles((state) =>
        state.map((cycle) => {
          if (cycle.id === activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
      )

      setActiveCycleId(null)
      await syncCycles() 
    } catch (error) {
      console.error('Error interrupting cycle:', error)
    }
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        syncCycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}


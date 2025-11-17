import * as schema from './schemas/index'
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL

const sql = neon(connectionString as string)

export const db = drizzle({client: sql, schema})

export type Database = typeof db
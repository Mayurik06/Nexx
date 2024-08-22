import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString ="postgresql://postgres.usobehpshdaahhocelyc:f4MV*5ZSnu7!ktT@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"


const client=postgres(connectionString);
export const db = drizzle(client,{schema});



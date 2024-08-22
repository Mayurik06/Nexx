import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config({path:".env.local"})
export default defineConfig({
  schema: "./db/schema.ts",
  dialect: 'postgresql',
  migrations: {
    prefix: 'supabase',
  },
  dbCredentials:{
    url:"postgresql://postgres.usobehpshdaahhocelyc:f4MV*5ZSnu7!ktT@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
  }
})
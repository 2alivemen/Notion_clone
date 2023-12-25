import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config( { path: '.env'});

if(!process.env.DATABASE_URL){

    console.log(' Cannot Find Database URL')
}

export default {

    schema: './src/lib/supabase/schema.ts',
    out:'./migrations',
    driver: 'pg',
    dbCredentials:{
        //connectionString:'postgresql://postgres:Ss$08389260320@db.mjxtkbkcddywfqymduoa.supabase.co:5432/postgres'
         connectionString: process.env.DATABASE_URL || '',
    }
} satisfies Config;
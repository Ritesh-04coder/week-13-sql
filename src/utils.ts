import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_oDW5EUzm9Xur@ep-holy-bird-abjb1k1n-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}
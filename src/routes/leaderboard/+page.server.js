import { redirect } from '@sveltejs/kit';
import { verifyToken } from '$lib/auth';


export async function load({ params, cookies, platform }) {
    if (!platform) { throw new Error('No platform'); }
    const top10 = await platform.env.database.prepare('SELECT * FROM users ORDER BY rating DESC LIMIT 10').all();
    let results = top10?.results;
    console.log(results);
    results = results.map(u => {
        u.passwordhash = undefined;
        return u;
    })
    return { results: results };
} 
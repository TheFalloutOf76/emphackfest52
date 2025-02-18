import { redirect } from '@sveltejs/kit';
import { verifyToken } from '$lib/auth';


export async function load({ params, cookies, platform }) {
    if (!platform) { throw new Error('No platform'); }
    const top5 = await platform.env.database.prepare('SELECT * FROM users ORDER BY rating DESC LIMIT 5').all();
    let results = top5?.results;
    console.log(results);
    results = results.map(u => {
        u.passwordhash = undefined;
        return u;
    })
    return { results: results };
} 
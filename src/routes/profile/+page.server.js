import { redirect } from '@sveltejs/kit';
import { verifyToken } from '$lib/auth';


export async function load({ params, cookies, platform }) {
    if (!platform) { throw new Error('No platform'); }
    const session = cookies.get('token');

    if (session) {
        try {
            const payload = await verifyToken(session);
            const users = await platform.env.database.prepare('SELECT * FROM users WHERE username = ?').bind(payload.username).all({ limit: 1 });
            const user = users?.results?.[0];
            if (user) { 
                console.log(user);
                user.passwordhash = undefined;
                return { user: user };
            }
            else {
                throw new Error('User not found');
            }
        }
        catch (e) {
            return redirect('/login', 302);
        }
    }
    return redirect(302, '/login');
} 
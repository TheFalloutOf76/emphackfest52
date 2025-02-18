import { signToken } from '$lib/auth';

export async function POST({ request, platform, cookies }) {
    if (!platform) { throw new Error('No platform'); }

    const { username, name, hashedPassword } = await request.json();
    if (!username || !name || !hashedPassword) {
        return new Response('missing fields', { status: 400 });
    }
    const users = await platform.env.database.prepare('SELECT * FROM users WHERE username = ?').bind(username).all({ limit: 1 });
    const user = users?.results?.[0];
    if (user) {
        if (user.passwordhash == hashedPassword) {
            const token = await signToken({ username });
            cookies.set('token', token, { path: '/', httpOnly: true });
            return new Response('logged in', { status: 200 });
        }
        return new Response('username already exists or incorrect password', { status: 400 });
    }
    else {
        await platform.env.database.prepare('INSERT INTO users (username, name, passwordhash) VALUES (?, ?, ?)').bind(username, name, hashedPassword).run();
        const token = await signToken({ username });
        cookies.set('token', token, { path: '/', httpOnly: true });
        return new Response('account created', { status: 200 });
    }
};
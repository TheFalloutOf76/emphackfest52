import { redirect } from '@sveltejs/kit';

export async function GET() {
    return new Response('Logged out', {
        status: 302,
        headers: {
            'Set-Cookie': 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
            'Location': '/login'
        }
    });
};
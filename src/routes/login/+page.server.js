import { redirect } from '@sveltejs/kit';

import { verifyToken } from '$lib/auth';

export const load = async ({ cookies }) => {
    const session = cookies.get('token');

    let loggedIn = false;
    if (session) {
        try {
            await verifyToken(session);
            loggedIn = true;
        } catch (e) { }
    }
    if (loggedIn) {
        return redirect(302, '/profile');
    }
};
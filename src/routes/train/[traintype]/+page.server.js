import { verifyToken } from '$lib/auth';

export async function load({ params, cookies, platform }) {
    if (!platform) { throw new Error('No platform'); }
    const trainInit = {
        trainingType: params.traintype,
        loggedIn: false,
        username: null,
        name: null,
        rating: "unrated",
    }
    const session = cookies.get('token');

    if (session) {
        try {
            const payload = await verifyToken(session);
            const users = await platform.env.database.prepare('SELECT * FROM users WHERE username = ?').bind(payload.username).all({ limit: 1 });
            const user = users?.results?.[0];
            if (user) { 
                trainInit.loggedIn = true;
                trainInit.username = payload.username;
                trainInit.name = user.name;
                trainInit.rating = user.rating;
            }
        } catch (e) { }
    }
    return trainInit;
} 
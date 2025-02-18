import { verifyToken } from '$lib/auth';

export async function POST({ request, platform, cookies }) {
    const { totalLetters, correctLetters } = await request.json();
    if (!totalLetters || correctLetters === undefined) {
        return new Response('missing fields', { status: 400 });
    }
    if (totalLetters < 1 || correctLetters < 0 || correctLetters > totalLetters) {
        return new Response('invalid fields', { status: 400 });
    }

    const incorrectLetters = totalLetters - correctLetters;

    const scoreChange = 10 * correctLetters - 8 * incorrectLetters;
    const session = cookies.get('token');

    if (session) {
        try {
            const payload = await verifyToken(session);
            const users = await platform.env.database.prepare('SELECT * FROM users WHERE username = ?').bind(payload.username).all({ limit: 1 });
            const user = users?.results?.[0];
            console.log(user);
            if (user) {
                const newRating = user.rating + scoreChange;
                await platform.env.database.prepare('UPDATE users SET totalAttempted = ?, totalCorrect = ?, rating = ? WHERE username = ?').bind(user.totalAttempted + totalLetters, user.totalCorrect + correctLetters, newRating, payload.username).run();
                return new Response(JSON.stringify({
                    rating: newRating
                }));
            }
        }
        catch (e) {
            console.error(e);
        }
    }
};
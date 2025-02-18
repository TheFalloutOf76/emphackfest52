import * as jose from 'jose';
import { env } from '$env/dynamic/private'

const secret = new TextEncoder().encode(env.JWT_TOKEN ?? 'dev_secret');

async function signToken(data: { [key: string]: any}): Promise<string> {
    const alg = 'HS256';
    const token = await new jose.SignJWT(data)
      .setProtectedHeader({ alg })
      .sign(secret);
    return token;
}

async function verifyToken(token: string): Promise<{ [key: string]: any }> {
    const alg = 'HS256';
    const { payload } = await jose.jwtVerify(token, secret, { algorithms: [alg] });
    return payload;
}

export { signToken, verifyToken };
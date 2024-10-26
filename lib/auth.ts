// lib/auth.ts

import { NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export function authenticateToken(req: NextApiRequest): string {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error('인증 토큰이 제공되지 않았습니다.');

    const token = authHeader.split(' ')[1];
    if (!token) throw new Error('유효하지 않은 토큰입니다.');

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        return decoded.userId;
    } catch (error) {
        throw new Error('유효하지 않은 토큰입니다.');
    }
}

// pages/api/auth/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // 입력값 검증
        if (!email || !password) {
            return res.status(400).json({ error: '이메일과 비밀번호를 입력해야 합니다.' });
        }

        // 사용자 찾기
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: '이메일 또는 비밀번호가 잘못되었습니다.' });
        }

        // 비밀번호 비교
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: '이메일 또는 비밀번호가 잘못되었습니다.' });
        }

        // JWT 생성
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } else {
        res.status(405).json({ error: '허용되지 않는 메소드입니다.' });
    }
}

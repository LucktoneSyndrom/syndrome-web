// pages/api/auth/register.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function register(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password, contactInfo } = req.body;

        // 입력값 검증
        if (!name || !email || !password || !contactInfo) {
            return res.status(400).json({ error: '모든 필드를 입력해야 합니다.' });
        }

        // 이메일 중복 확인
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: '이미 사용 중인 이메일입니다.' });
        }

        // 비밀번호 해싱
        const hashedPassword = await bcrypt.hash(password, 10);

        // 사용자 생성
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                contactInfo,
            },
        });

        res.status(201).json({ message: '사용자 등록이 완료되었습니다.' });
    } else {
        res.status(405).json({ error: '허용되지 않는 메소드입니다.' });
    }
}

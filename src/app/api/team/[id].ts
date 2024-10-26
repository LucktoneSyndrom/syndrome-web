// pages/api/users/[id]/teams.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function userTeamsHandler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        // 사용자가 속한 팀 조회
        const teams = await prisma.team.findMany({
            where: {
                teamMembers: {
                    some: { userId: id as string },
                },
            },
            include: {
                teamName: true,
                teamDescription: true,
                teamMembers: {
                    include: {
                        user: true,
                        developmentPart: true,
                    },
                },
            },
        });

        res.status(200).json(teams);
    } else {
        res.status(405).json({ error: '허용되지 않는 메소드입니다.' });
    }
}

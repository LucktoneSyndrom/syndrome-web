// pages/api/teams/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../../../lib/auth';

const prisma = new PrismaClient();

export default async function teamsHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const userId = authenticateToken(req);
            const {
                teamName,
                teamDescription,
                projectDescription,
                recruitmentDeadline,
                techStackIds,
                recruitmentNeeds,
            } = req.body;

            // 팀 생성
            const team = await prisma.team.create({
                data: {
                    teamName,
                    teamDescription,
                    projectDescription,
                    recruitmentDeadline: recruitmentDeadline ? new Date(recruitmentDeadline) : null,
                    leaderUserId: userId,
                    techStacks: {
                        connect: techStackIds?.map((id: string) => ({ id })),
                    },
                    recruitmentNeeds: {
                        create: recruitmentNeeds?.map((need: { developmentPartId: string; numberNeeded: number }) => ({
                            developmentPartId: need.developmentPartId,
                            numberNeeded: need.numberNeeded,
                        })),
                    },
                    teamMembers: {
                        create: {
                            userId,
                            role: '팀장',
                            developmentPartId: recruitmentNeeds[0]?.developmentPartId,
                        },
                    },
                },
            });

            res.status(201).json(team);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    } else if (req.method === 'GET') {
        // 팀 목록 조회
        const teams = await prisma.team.findMany({
            include: {
                leader: true,
                techStacks: true,
                recruitmentNeeds: {
                    include: { developmentPart: true },
                },
                teamMembers: {
                    include: { user: true, developmentPart: true },
                },
            },
        });

        res.status(200).json(teams);
    } else {
        res.status(405).json({ error: '허용되지 않는 메소드입니다.' });
    }
}

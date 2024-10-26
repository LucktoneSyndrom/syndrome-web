// pages/api/resumes/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../../../lib/auth';

const prisma = new PrismaClient();

export default async function resumesHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const userId = authenticateToken(req);
            const {
                introduction,
                portfolio,
                contactInfo,
                isPublic,
                techStackIds,
                developmentPartIds,
                teamTypeIds,
                locationIds,
            } = req.body;

            // 이력서 생성
            const resume = await prisma.resume.create({
                data: {
                    userId,
                    introduction,
                    portfolio,
                    contactInfo,
                    isPublic,
                    techStacks: {
                        connect: techStackIds?.map((id: string) => ({ id })),
                    },
                    developmentParts: {
                        connect: developmentPartIds?.map((id: string) => ({ id })),
                    },
                    teamTypes: {
                        connect: teamTypeIds?.map((id: string) => ({ id })),
                    },
                    locations: {
                        connect: locationIds?.map((id: string) => ({ id })),
                    },
                },
            });

            res.status(201).json(resume);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    } else if (req.method === 'GET') {
        // 공개된 이력서 조회
        const resumes = await prisma.resume.findMany({
            where: { isPublic: true },
            include: {
                user: true,
                techStacks: true,
                developmentParts: true,
                teamTypes: true,
                locations: true,
            },
        });

        res.status(200).json(resumes);
    } else {
        res.status(405).json({ error: '허용되지 않는 메소드입니다.' });
    }
}

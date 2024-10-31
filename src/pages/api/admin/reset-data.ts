// src/pages/api/admin/reset-data.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { sequelize } from '../../../lib/db';
import { generateDummyData } from '../../../lib/dummyData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: '허용되지 않는 메서드입니다.' });
    }

    try {
        // 데이터베이스 초기화
        await sequelize.sync({ force: true });

        // 더미 데이터 생성
        await generateDummyData();

        res.status(200).json({ message: '데이터가 초기화되었습니다.' });
    } catch (error) {
        console.error('데이터 초기화 중 오류 발생:', error);
        res.status(500).json({ message: '데이터 초기화 중 오류 발생' });
    }
}

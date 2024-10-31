// src/app/api/metadata/reset-data.ts

import { NextResponse } from 'next/server';

/**
 * 메타데이터 조회 API
 * GET /api/metadata
 */
export async function GET() {
    try {
        const metadata = {
            locations: ['서울', '부산', '대구', '광주', '대전', '온라인'],
            techStacks: [
                'JavaScript',
                'React',
                'Node.js',
                'Java',
                'Spring',
                'Python',
                'Django',
            ],
        };

        return NextResponse.json(metadata);
    } catch (error) {
        console.error('메타데이터 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

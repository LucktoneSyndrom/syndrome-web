// src/app/api/resumes/reset-data.ts

import { NextResponse } from 'next/server';
import { Resume } from '../../../models/resume';

/**
 * 이력서 생성 또는 수정 API
 * POST /api/resumes
 */
export async function POST(request: Request) {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정
        const body = await request.json();

        const { introduction, techStacks, portfolio, contactInfo } = body;

        const [resume, created] = await Resume.upsert({
            userId,
            introduction,
            techStacks,
            portfolio,
            contactInfo,
        });

        return NextResponse.json({
            success: true,
            resumeId: resume.id,
            created,
        });
    } catch (error) {
        console.error('이력서 생성/수정 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

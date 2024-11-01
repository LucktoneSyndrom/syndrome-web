// src/app/api/resumes/[resumeId]/route.ts

import { NextResponse } from 'next/server';
import { Resume } from '../../../../models/resume';

/**
 * 이력서 조회 API
 * GET /api/resumes/{resumeId}
 */
export async function GET(request: Request, { params }: { params: { resumeId: string } }) {
    try {
        const resumeId = params.resumeId;

        const resume = await Resume.findByPk(resumeId);

        if (!resume) {
            return NextResponse.json({ message: '이력서를 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json(resume);
    } catch (error) {
        console.error('이력서 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}



/**
 * 이력서 수정 API
 * PUT /api/resumes/{resumeId}
 */
export async function PUT(request: Request, { params }: { params: { resumeId: string } }) {
    try {
        const resumeId = params.resumeId;
        const body = await request.json();

        const { introduction, techStacks, portfolio, contactInfo } = body;

        const resume = await Resume.findByPk(resumeId);

        if (!resume) {
            return NextResponse.json({ message: '이력서를 찾을 수 없습니다.' }, { status: 404 });
        }

        // 이력서 업데이트
        resume.introduction = introduction;
        resume.techStacks = techStacks;
        resume.portfolio = portfolio;
        resume.contactInfo = contactInfo;

        await resume.save();

        return NextResponse.json({ success: true, resumeId: resume.id });
    } catch (error) {
        console.error('이력서 수정 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

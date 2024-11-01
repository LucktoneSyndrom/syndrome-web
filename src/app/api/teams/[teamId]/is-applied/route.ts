// src/app/api/teams/[teamId]/is-applied/route.ts

import { NextResponse } from 'next/server';
import { Application } from '../../../../../models/application';

/**
 * 지원 여부 확인 API
 * GET /api/teams/{teamId}/is-applied
 */
export async function GET(
    request: Request,
    { params }: { params: { teamId: string } }
) {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정
        const teamId = params.teamId;

        const application = await Application.findOne({
            where: { userId, teamId },
        });

        const isApplied = !!application;

        return NextResponse.json({ isApplied });
    } catch (error) {
        console.error('지원 여부 확인 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

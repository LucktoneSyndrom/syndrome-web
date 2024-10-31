// src/app/api/teams/[teamId]/applicants-count/reset-data.ts

import { NextResponse } from 'next/server';
import { Application } from '../../../../models/application';

/**
 * 지원자 수 조회 API
 * GET /api/teams/{teamId}/applicants-count
 */
export async function GET(
    request: Request,
    { params }: { params: { teamId: string } }
) {
    try {
        const teamId = params.teamId;

        const count = await Application.count({
            where: { teamId },
        });

        return NextResponse.json({ count });
    } catch (error) {
        console.error('지원자 수 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

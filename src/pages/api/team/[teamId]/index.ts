// src/app/api/teams/[teamId]/reset-data.ts

import { NextResponse } from 'next/server';
import { Team } from '../../../../models/team';

/**
 * 팀 상세 정보 조회 API
 * GET /api/teams/{teamId}
 */
export async function GET(request: Request, { params }: { params: { teamId: string } }) {
    try {
        const teamId = params.teamId;

        const team = await Team.findByPk(teamId);

        if (!team) {
            return NextResponse.json({ message: '팀을 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json(team);
    } catch (error) {
        console.error('팀 상세 정보 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

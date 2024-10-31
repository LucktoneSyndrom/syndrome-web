// src/app/api/user/applied-teams/reset-data.ts

import { NextResponse } from 'next/server';
import { Application } from '../../../models/application';
import { Team } from '../../../models/team';

/**
 * 지원한 팀 목록 조회 API
 * GET /api/user/applied-teams
 */
export async function GET() {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정

        // 사용자가 지원한 팀 목록 조회
        const applications = await Application.findAll({
            where: { userId },
            attributes: ['teamId'],
        });

        const teamIds = applications.map((app) => app.teamId);

        const teams = await Team.findAll({
            where: { id: teamIds },
        });

        return NextResponse.json(teams);
    } catch (error) {
        console.error('지원한 팀 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

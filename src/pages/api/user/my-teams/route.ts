// src/app/api/user/my-teams/reset-data.ts

import { NextResponse } from 'next/server';
import { User } from '../../../../models/user';
import { Team } from '../../../../models/team';

/**
 * 나의 팀 목록 조회 API
 * GET /api/user/my-teams
 */
export async function GET() {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정

        const user = await User.findByPk(userId);

        if (!user || !user.joinedTeams) {
            return NextResponse.json([], { status: 200 });
        }

        const teams = await Team.findAll({
            where: {
                id: user.joinedTeams,
            },
        });

        return NextResponse.json(teams);
    } catch (error) {
        console.error('나의 팀 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

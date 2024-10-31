// src/app/api/teams/[teamId]/applicants/reset-data.ts

import { NextResponse } from 'next/server';
import { Application } from '../../../../../models/application';
import { User } from '../../../../../models/user';

/**
 * 지원자 목록 조회 API
 * GET /api/teams/{teamId}/applicants
 */
export async function GET(
    request: Request,
    { params }: { params: { teamId: string } }
) {
    try {
        const teamId = params.teamId;

        const applications = await Application.findAll({
            where: { teamId },
            attributes: ['userId'],
        });

        const userIds = applications.map((app) => app.userId);

        const users = await User.findAll({
            where: { id: userIds },
            attributes: ['id', 'name', 'profileImageUrl'],
        });

        return NextResponse.json(users);
    } catch (error) {
        console.error('지원자 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

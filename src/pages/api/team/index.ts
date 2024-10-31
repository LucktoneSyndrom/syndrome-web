// src/app/api/teams/reset-data.ts

import { NextResponse } from 'next/server';
import { Team } from '../../../models/team';

/**
 * 팀 목록 조회 및 팀 생성 API
 * GET /api/teams
 * POST /api/teams
 */
export async function GET() {
    try {
        const teams = await Team.findAll();

        return NextResponse.json(teams);
    } catch (error) {
        console.error('팀 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

/**
 * 팀 생성 API
 * POST /api/teams
 */
export async function POST(request: Request) {
    try {
        const leaderId = 1; // 예시로 팀장 ID를 1로 고정
        const body = await request.json();

        const {
            teamName,
            teamDescription,
            projectDescription,
            deadline,
            noDeadline,
            location,
            recruitmentParts,
            techStacks,
        } = body;

        if (!teamName || !location || !recruitmentParts || !techStacks) {
            return NextResponse.json({ message: '필수 필드가 누락되었습니다.' }, { status: 400 });
        }

        const newTeam = await Team.create({
            teamName,
            teamDescription,
            projectDescription,
            deadline,
            noDeadline,
            location,
            recruitmentParts,
            techStacks,
            leaderId,
        });

        return NextResponse.json({ success: true, teamId: newTeam.id }, { status: 201 });
    } catch (error) {
        console.error('팀 생성 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

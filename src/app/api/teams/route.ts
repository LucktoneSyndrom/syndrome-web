// src/app/api/teams/reset-data/route.ts
import { NextResponse } from 'next/server';
import { Team } from '../../../models/team';
import { Op } from 'sequelize';

// GET 메서드 처리
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('page') || '1';
        const limit = searchParams.get('limit') || '10';
        const search = searchParams.get('search') || '';

        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        const offset = (pageNumber - 1) * limitNumber;

        let whereCondition = {};

        if (search) {
            whereCondition = {
                teamName: {
                    [Op.like]: `%${search}%`,
                },
            };
        }

        const { count, rows } = await Team.findAndCountAll({
            where: whereCondition,
            limit: limitNumber,
            offset,
            order: [['createdAt', 'DESC']],
        });

        return NextResponse.json({
            totalItems: count,
            totalPages: Math.ceil(count / limitNumber),
            currentPage: pageNumber,
            teams: rows,
        });
    } catch (error) {
        console.error('팀 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

// POST 메서드 처리
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

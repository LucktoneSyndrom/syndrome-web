// src/app/api/user/profile/reset-data.ts

import { NextResponse } from 'next/server';
import { User } from '../../../../models/user';

/**
 * 사용자 프로필 조회 API
 * GET /api/user/profile
 */
export async function GET() {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정

        const user = await User.findByPk(userId, {
            attributes: { exclude: ['password'] },
        });

        if (!user) {
            return NextResponse.json({ message: '사용자를 찾을 수 없습니다.' }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error('사용자 프로필 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

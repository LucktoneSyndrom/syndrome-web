// src/app/api/notifications/route.ts

import { NextResponse } from 'next/server';
import { Notification } from '../../../models/notification';

/**
 * 알림 목록 조회 API
 * GET /api/notifications
 */
export async function GET(request: Request) {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정

        const notifications = await Notification.findAll({
            where: { userId },
            order: [['createdAt', 'DESC']],
        });

        return NextResponse.json(notifications);
    } catch (error) {
        console.error('알림 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

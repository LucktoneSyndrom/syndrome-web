// src/app/api/chats/reset-data.ts

import { NextResponse } from 'next/server';
import { Chat } from '../../../models/chat';

/**
 * 채팅 목록 조회 API
 * GET /api/chats
 */
export async function GET(request: Request) {
    try {
        const userId = 1; // 예시로 사용자 ID를 1로 고정

        const chats = await Chat.findAll({
            where: {
                participantIds: {
                    [Op.contains]: [userId],
                },
            },
        });

        return NextResponse.json(chats);
    } catch (error) {
        console.error('채팅 목록 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

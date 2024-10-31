// src/app/api/chats/[chatId]/messages/reset-data.ts

import { NextResponse } from 'next/server';
import { Message } from '../../../../../models/message';

/**
 * 채팅 메시지 조회 및 전송 API
 * GET /api/chats/{chatId}/messages
 * POST /api/chats/{chatId}/messages
 */
export async function GET(
    request: Request,
    { params }: { params: { chatId: string } }
) {
    try {
        const chatId = params.chatId;

        const messages = await Message.findAll({
            where: { chatId },
            order: [['sentAt', 'ASC']],
        });

        return NextResponse.json(messages);
    } catch (error) {
        console.error('채팅 메시지 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

export async function POST(
    request: Request,
    { params }: { params: { chatId: string } }
) {
    try {
        const chatId = params.chatId;
        const senderId = 1; // 예시로 사용자 ID를 1로 고정
        const body = await request.json();
        const { content } = body;

        if (!content) {
            return NextResponse.json({ message: '메시지 내용이 필요합니다.' }, { status: 400 });
        }

        const newMessage = await Message.create({
            chatId,
            senderId,
            content,
        });

        return NextResponse.json(newMessage, { status: 201 });
    } catch (error) {
        console.error('메시지 전송 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

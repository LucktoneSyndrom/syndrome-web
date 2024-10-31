// src/app/api/chats/team/[teamId]/messages/reset-data.ts

import { NextResponse } from 'next/server';
import { Chat } from '../../../../../../models/chat';
import { Message } from '../../../../../../models/message';

/**
 * 팀 채팅 메시지 조회 및 전송 API
 * GET /api/chats/team/{teamId}/messages
 * POST /api/chats/team/{teamId}/messages
 */
export async function GET(
    request: Request,
    { params }: { params: { teamId: string } }
) {
    try {
        const teamId = params.teamId;

        const chat = await Chat.findOne({
            where: { teamId, type: 'team' },
        });

        if (!chat) {
            return NextResponse.json({ message: '채팅방을 찾을 수 없습니다.' }, { status: 404 });
        }

        const messages = await Message.findAll({
            where: { chatId: chat.id },
            order: [['sentAt', 'ASC']],
        });

        return NextResponse.json(messages);
    } catch (error) {
        console.error('팀 채팅 메시지 조회 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

export async function POST(
    request: Request,
    { params }: { params: { teamId: string } }
) {
    try {
        const teamId = params.teamId;
        const senderId = 1; // 예시로 사용자 ID를 1로 고정
        const body = await request.json();
        const { content } = body;

        if (!content) {
            return NextResponse.json({ message: '메시지 내용이 필요합니다.' }, { status: 400 });
        }

        let chat = await Chat.findOne({
            where: { teamId, type: 'team' },
        });

        if (!chat) {
            // 채팅방이 없으면 생성
            chat = await Chat.create({
                type: 'team',
                participantIds: [], // 팀원들의 ID를 추가해야 함
                teamId: Number(teamId),
            });
        }

        const newMessage = await Message.create({
            chatId: chat.id,
            senderId,
            content,
        });

        return NextResponse.json(newMessage, { status: 201 });
    } catch (error) {
        console.error('팀 메시지 전송 중 오류 발생:', error);
        return NextResponse.json({ message: '서버 오류' }, { status: 500 });
    }
}

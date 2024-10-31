// src/models/message.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * Message 모델은 채팅 메시지를 저장합니다.
 */
export class Message extends Model {
    public id!: number; // 메시지 ID
    public chatId!: number; // 채팅방 ID
    public senderId!: number; // 보낸 사람 ID
    public content!: string; // 메시지 내용
    public sentAt!: Date; // 보낸 시간
}

// Message 모델 초기화
Message.init(
    {
        id: {
            // 기본 키 설정
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        chatId: {
            // 채팅방 ID
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        senderId: {
            // 보낸 사람 ID
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        content: {
            // 메시지 내용
            type: DataTypes.TEXT,
            allowNull: false,
        },
        sentAt: {
            // 보낸 시간
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'messages',
        timestamps: false,
    }
);

// 모델 동기화
Message.sync();

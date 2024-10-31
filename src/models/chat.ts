// src/models/chat.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * Chat 모델은 채팅방 정보를 저장합니다.
 */
export class Chat extends Model {
    public id!: number; // 채팅방 ID
    public type!: string; // 채팅방 타입: 'private', 'team'
    public participantIds!: number[]; // 참여자 ID 배열
    public teamId?: number; // 팀 채팅의 경우 팀 ID
}

// Chat 모델 초기화
Chat.init(
    {
        id: {
            // 기본 키 설정
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            // 채팅방 타입
            type: DataTypes.STRING,
            allowNull: false,
        },
        participantIds: {
            // 참여자 ID 배열
            type: DataTypes.JSON,
            allowNull: false,
        },
        teamId: {
            // 팀 채팅의 경우 팀 ID
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'chats',
        timestamps: true,
    }
);

// 모델 동기화
Chat.sync();

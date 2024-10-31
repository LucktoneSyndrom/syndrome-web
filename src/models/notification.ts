// src/models/notification.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * Notification 모델은 알림 정보를 저장합니다.
 */
export class Notification extends Model {
    public id!: number; // 알림 ID
    public userId!: number; // 사용자 ID
    public type!: string; // 알림 타입
    public message!: string; // 알림 메시지
    public createdAt!: Date; // 생성 시간
    public isRead!: boolean; // 읽음 여부
}

// Notification 모델 초기화
Notification.init(
    {
        id: {
            // 기본 키 설정
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            // 사용자 ID
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        type: {
            // 알림 타입
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            // 알림 메시지
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            // 생성 시간
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        isRead: {
            // 읽음 여부
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        tableName: 'notifications',
        timestamps: false,
    }
);

// 모델 동기화
Notification.sync();

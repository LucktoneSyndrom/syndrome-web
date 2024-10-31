// src/models/application.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * Application 모델은 팀 지원 정보를 저장합니다.
 */
export class Application extends Model {
    public id!: number; // 지원 ID
    public userId!: number; // 지원자 ID
    public teamId!: number; // 팀 ID
    public status!: string; // 지원 상태: 'pending', 'approved', 'rejected'
    public appliedAt!: Date; // 지원 날짜
}

// Application 모델 초기화
Application.init(
    {
        id: {
            // 기본 키 설정
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            // 지원자 ID
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        teamId: {
            // 팀 ID
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        status: {
            // 지원 상태
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
        },
        appliedAt: {
            // 지원 날짜
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'applications',
        timestamps: false,
    }
);

// 모델 동기화
Application.sync();

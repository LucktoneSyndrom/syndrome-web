// src/models/resume.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * Resume 모델은 이력서 정보를 저장합니다.
 */
export class Resume extends Model {
    public id!: number;
    public userId!: number;
    public introduction?: string;
    public techStacks!: string[];
    public portfolio?: string;
    public contactInfo?: string;
}

Resume.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        introduction: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        techStacks: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        portfolio: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contactInfo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'resumes',
        timestamps: true,
    }
);

// 모델 동기화
Resume.sync();

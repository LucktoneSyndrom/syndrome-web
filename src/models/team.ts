// src/models/team.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * Team 모델은 팀 정보를 저장합니다.
 */
export class Team extends Model {
    public id!: number;
    public teamName!: string;
    public teamDescription?: string;
    public projectDescription?: string;
    public deadline?: Date;
    public noDeadline!: boolean;
    public location!: string;
    public recruitmentParts!: object[];
    public techStacks!: string[];
    public leaderId!: number;
}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teamDescription: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        projectDescription: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        noDeadline: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recruitmentParts: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        techStacks: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        leaderId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'teams',
        timestamps: true,
    }
);

// 모델 동기화
Team.sync();

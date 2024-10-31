// src/models/user.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../lib/db';

/**
 * User 모델은 사용자 정보를 저장합니다.
 */
export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public profileImageUrl?: string;
    public joinedTeams?: number[];
    public appliedTeams?: number[];
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profileImageUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        joinedTeams: {
            type: DataTypes.JSON, // 팀 ID 배열을 JSON으로 저장
            allowNull: true,
        },
        appliedTeams: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true,
    }
);

// 모델 동기화
User.sync();

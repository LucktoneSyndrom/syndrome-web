// src/lib/db.ts

import { Sequelize } from 'sequelize';

// SQLite를 사용하여 Sequelize 인스턴스 생성
export const sequelize = new Sequelize({
    dialect: 'sqlite', // SQLite 사용
    storage: './database.sqlite3', // 데이터베이스 파일 경로
});

// 데이터베이스 연결 테스트
sequelize
    .authenticate()
    .then(() => {
        console.log('데이터베이스에 연결되었습니다.');
    })
    .catch((err) => {
        console.error('데이터베이스 연결 오류:', err);
    });

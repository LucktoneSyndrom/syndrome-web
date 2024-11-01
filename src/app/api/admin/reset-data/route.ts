// src/app/api/admin/reset-data/route.ts

import { NextResponse } from 'next/server';
import { sequelize } from '../../../../lib/db';
import { generateDummyData } from '../../../../lib/dummyData';

export async function POST(request: Request) {
    try {
        // 데이터베이스 초기화
        await sequelize.sync({ force: true });
        console.log("데이터베이스가 초기화되었습니다.");

        // 더미 데이터 생성
        await generateDummyData();
        console.log("더미 데이터가 성공적으로 생성되었습니다.");

        return NextResponse.json({ message: '데이터베이스가 초기화되고 더미 데이터가 추가되었습니다.' }, { status: 200 });
    } catch (error) {
        console.error("데이터베이스 초기화 또는 더미 데이터 생성 중 오류 발생:", error);
        return NextResponse.json({ message: '데이터 초기화 또는 더미 데이터 생성 중 오류 발생' }, { status: 500 });
    }
}

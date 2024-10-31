// src/lib/dummyData.ts

import { User } from '../models/user';
import { Team } from '../models/team';
import { Resume } from '../models/resume';
import { Application } from '../models/application';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { Notification } from '../models/notification';

// Faker 라이브러리 설치 필요: npm install @faker-js/faker
import { faker } from '@faker-js/faker';

/**
 * 더미 데이터를 생성하는 함수
 */
export async function generateDummyData() {
    // 사용자 생성
    const users = [];
    for (let i = 1; i <= 20; i++) {
        const user = await User.create({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            profileImageUrl: faker.image.avatar(),
        });
        users.push(user);
    }

    // 팀 생성
    const teams = [];
    for (let i = 1; i <= 10; i++) {
        const team = await Team.create({
            teamName: `팀 ${i}`,
            teamDescription: faker.lorem.paragraph(),
            projectDescription: faker.lorem.paragraphs(2),
            deadline: faker.date.future(),
            noDeadline: false,
            location: faker.location.city(),
            recruitmentParts: [
                { partName: '백엔드', numberNeeded: faker.number.int({ min: 1, max: 5 }) },
                { partName: '프론트엔드', numberNeeded: faker.number.int({ min: 1, max: 5 }) },
            ],
            techStacks: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
            leaderId: users[faker.number.int({ min: 0, max: users.length - 1 })].id,

        });
        teams.push(team);
    }

    // 이력서 생성
    for (const user of users) {
        await Resume.create({
            userId: user.id,
            introduction: faker.lorem.paragraph(),
            techStacks: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
            portfolio: faker.internet.url(),
            contactInfo: faker.phone.number(),
        });
    }

    // 지원 생성
    for (const user of users) {
        const team = teams[faker.number.int({ min: 0, max: teams.length - 1 })];
        await Application.create({
            userId: user.id,
            teamId: team.id,
            status: 'pending',
            appliedAt: new Date(),
        });
    }

    // 채팅방 및 메시지 생성
    for (let i = 1; i <= 5; i++) {
        const participants = users.slice(i * 2 - 2, i * 2);
        const chat = await Chat.create({
            type: 'private',
            participantIds: participants.map((user) => user.id),
        });

        // 메시지 생성
        for (let j = 0; j < 10; j++) {
            await Message.create({
                chatId: chat.id,
                senderId: participants[j % 2].id,
                content: faker.lorem.sentence(),
                sentAt: new Date(),
            });
        }
    }

    // 알림 생성
    for (const user of users) {
        await Notification.create({
            userId: user.id,
            type: 'info',
            message: faker.lorem.sentence(),
            createdAt: new Date(),
            isRead: false,
        });
    }
}

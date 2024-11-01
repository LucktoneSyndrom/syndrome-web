// src/lib/dummyData.ts

import { User } from '../models/user';
import { Team } from '../models/team';
import { Resume } from '../models/resume';
import { Application } from '../models/application';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { Notification } from '../models/notification';
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

    for (const teamData of teamDummyData) {
        await Team.create(teamData);
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

    // // 지원 생성
    // for (const user of users) {
    //     const team = teams[faker.number.int({ min: 0, max: teams.length - 1 })];
    //     await Application.create({
    //         userId: user.id,
    //         teamId: team.id,
    //         status: 'pending',
    //         appliedAt: new Date(),
    //     });
    // }

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

const teamDummyData = [
    {
        teamName: "Alpha Developers",
        teamDescription: "백엔드 개발자를 모집합니다.",
        projectDescription: "API 개발 프로젝트",
        deadline: new Date("2023-12-31"),
        noDeadline: false,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Backend", numberNeeded: 2 },
            { partName: "Frontend", numberNeeded: 1 },
        ],
        techStacks: ["Node.js", "Express", "React"],
        leaderId: 1,
    },
    {
        teamName: "Beta Coders",
        teamDescription: "프론트엔드 및 백엔드 개발자를 모집합니다.",
        projectDescription: "풀스택 웹 애플리케이션",
        deadline: new Date("2024-01-15"),
        noDeadline: false,
        location: "Busan",
        recruitmentParts: [
            { partName: "Frontend", numberNeeded: 1 },
            { partName: "Backend", numberNeeded: 2 },
        ],
        techStacks: ["React", "Node.js", "MongoDB"],
        leaderId: 2,
    },
    {
        teamName: "Gamma Team",
        teamDescription: "데이터 분석가와 백엔드 개발자를 모집합니다.",
        projectDescription: "데이터 처리 시스템 구축",
        deadline: new Date("2023-11-30"),
        noDeadline: false,
        location: "Incheon",
        recruitmentParts: [
            { partName: "Backend", numberNeeded: 1 },
            { partName: "Data Analyst", numberNeeded: 1 },
        ],
        techStacks: ["Python", "Pandas", "Django"],
        leaderId: 3,
    },
    {
        teamName: "Delta Builders",
        teamDescription: "모바일 앱 개발자를 모집합니다.",
        projectDescription: "안드로이드 앱 개발",
        deadline: new Date("2023-12-20"),
        noDeadline: false,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Mobile", numberNeeded: 2 },
        ],
        techStacks: ["Kotlin", "Android Studio"],
        leaderId: 4,
    },
    {
        teamName: "Echo Squad",
        teamDescription: "AI 연구 개발자를 모집합니다.",
        projectDescription: "인공지능 모델 연구",
        deadline: null,
        noDeadline: true,
        location: "Daejeon",
        recruitmentParts: [
            { partName: "AI Researcher", numberNeeded: 1 },
        ],
        techStacks: ["TensorFlow", "Python", "Keras"],
        leaderId: 5,
    },
    {
        teamName: "Zeta Innovators",
        teamDescription: "프론트엔드 개발자 모집",
        projectDescription: "웹사이트 디자인 최적화",
        deadline: new Date("2024-02-10"),
        noDeadline: false,
        location: "Gwangju",
        recruitmentParts: [
            { partName: "Frontend", numberNeeded: 2 },
        ],
        techStacks: ["Vue.js", "SCSS"],
        leaderId: 6,
    },
    {
        teamName: "Theta Builders",
        teamDescription: "프론트엔드와 데이터 분석 담당자 모집",
        projectDescription: "리포트 생성 툴 개발",
        deadline: new Date("2024-01-05"),
        noDeadline: false,
        location: "Daegu",
        recruitmentParts: [
            { partName: "Frontend", numberNeeded: 1 },
            { partName: "Data Analyst", numberNeeded: 1 },
        ],
        techStacks: ["Angular", "Pandas"],
        leaderId: 7,
    },
    {
        teamName: "Lambda Logics",
        teamDescription: "서버 관리자를 모집합니다.",
        projectDescription: "서버 최적화 작업",
        deadline: new Date("2023-11-25"),
        noDeadline: false,
        location: "Busan",
        recruitmentParts: [
            { partName: "Server", numberNeeded: 1 },
        ],
        techStacks: ["Nginx", "Docker"],
        leaderId: 8,
    },
    {
        teamName: "Sigma Coders",
        teamDescription: "프론트엔드 개발 및 UX 디자인 경험자 모집",
        projectDescription: "웹 애플리케이션 UI/UX 개선",
        deadline: null,
        noDeadline: true,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Frontend", numberNeeded: 1 },
            { partName: "UX Designer", numberNeeded: 1 },
        ],
        techStacks: ["React", "Figma"],
        leaderId: 9,
    },
    {
        teamName: "Omega Developers",
        teamDescription: "모바일과 웹 개발자를 모집합니다.",
        projectDescription: "크로스 플랫폼 앱 개발",
        deadline: new Date("2024-01-01"),
        noDeadline: false,
        location: "Incheon",
        recruitmentParts: [
            { partName: "Mobile", numberNeeded: 1 },
            { partName: "Web Developer", numberNeeded: 1 },
        ],
        techStacks: ["Flutter", "React"],
        leaderId: 10,
    },
    {
        teamName: "Juno Engineers",
        teamDescription: "백엔드 개발 및 보안 전문가 모집",
        projectDescription: "서버 보안 강화 프로젝트",
        deadline: new Date("2024-02-28"),
        noDeadline: false,
        location: "Suwon",
        recruitmentParts: [
            { partName: "Backend", numberNeeded: 1 },
            { partName: "Security Expert", numberNeeded: 1 },
        ],
        techStacks: ["Node.js", "MongoDB", "Python"],
        leaderId: 11,
    },
    {
        teamName: "Mirae Ventures",
        teamDescription: "웹과 모바일 UX/UI 디자이너 모집",
        projectDescription: "사용자 인터페이스 설계 프로젝트",
        deadline: null,
        noDeadline: true,
        location: "Seoul",
        recruitmentParts: [
            { partName: "UI/UX Designer", numberNeeded: 2 },
        ],
        techStacks: ["Adobe XD", "Figma"],
        leaderId: 12,
    },
    {
        teamName: "Future Techies",
        teamDescription: "AI 엔지니어와 데이터 사이언티스트 모집",
        projectDescription: "AI 예측 모델 개발",
        deadline: new Date("2024-03-15"),
        noDeadline: false,
        location: "Daejeon",
        recruitmentParts: [
            { partName: "AI Engineer", numberNeeded: 1 },
            { partName: "Data Scientist", numberNeeded: 1 },
        ],
        techStacks: ["Python", "PyTorch", "SQL"],
        leaderId: 13,
    },
    {
        teamName: "Hyper Builders",
        teamDescription: "웹 프론트엔드 개발자 모집",
        projectDescription: "E-commerce 웹사이트 개발",
        deadline: new Date("2024-01-31"),
        noDeadline: false,
        location: "Ulsan",
        recruitmentParts: [
            { partName: "Frontend", numberNeeded: 2 },
        ],
        techStacks: ["Vue.js", "JavaScript"],
        leaderId: 14,
    },
    {
        teamName: "Data Pioneers",
        teamDescription: "데이터 엔지니어 모집",
        projectDescription: "데이터 파이프라인 구축",
        deadline: new Date("2024-02-05"),
        noDeadline: false,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Data Engineer", numberNeeded: 1 },
        ],
        techStacks: ["Airflow", "BigQuery"],
        leaderId: 15,
    },
    {
        teamName: "Vision AI",
        teamDescription: "컴퓨터 비전 전문가 모집",
        projectDescription: "이미지 인식 시스템 개발",
        deadline: new Date("2024-04-01"),
        noDeadline: false,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Computer Vision Expert", numberNeeded: 1 },
        ],
        techStacks: ["OpenCV", "Python"],
        leaderId: 16,
    },
    {
        teamName: "Quantum Coders",
        teamDescription: "양자 컴퓨팅 개발자 모집",
        projectDescription: "양자 알고리즘 연구",
        deadline: null,
        noDeadline: true,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Quantum Developer", numberNeeded: 1 },
        ],
        techStacks: ["Qiskit", "Python"],
        leaderId: 17,
    },
    {
        teamName: "Eco Builders",
        teamDescription: "IoT 개발자 모집",
        projectDescription: "환경 모니터링 시스템",
        deadline: new Date("2024-05-01"),
        noDeadline: false,
        location: "Gyeonggi",
        recruitmentParts: [
            { partName: "IoT Developer", numberNeeded: 1 },
        ],
        techStacks: ["Arduino", "C++"],
        leaderId: 18,
    },
    {
        teamName: "Secure Minds",
        teamDescription: "보안 전문가 모집",
        projectDescription: "보안 테스트 및 분석",
        deadline: new Date("2024-03-01"),
        noDeadline: false,
        location: "Seoul",
        recruitmentParts: [
            { partName: "Security Expert", numberNeeded: 1 },
        ],
        techStacks: ["Metasploit", "Python"],
        leaderId: 19,
    },
    {
        teamName: "NextGen Coders",
        teamDescription: "웹 풀스택 개발자 모집",
        projectDescription: "소셜 네트워킹 플랫폼",
        deadline: new Date("2024-04-30"),
        noDeadline: false,
        location: "Incheon",
        recruitmentParts: [
            { partName: "Fullstack Developer", numberNeeded: 2 },
        ],
        techStacks: ["React", "Node.js", "MongoDB"],
        leaderId: 20,
    }
];


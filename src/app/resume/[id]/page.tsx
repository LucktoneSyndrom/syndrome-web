// src/app/resume/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import styles from './ResumePage.module.css';
import { useParams } from 'next/navigation';
import { UserCardInfo } from "../../../types/ProfileCardInfo";

interface Resume {
    id: string;
    name: string;
    introduction: string;
    techStacks: string[];
    portfolio: string;
    contactInfo: string;
}

// Mock data for profiles
const mockProfileCardData: UserCardInfo[] = [
    {
        id: "user-001", 
        name: "최승식",
        school: "인천대학교",
        major: "컴퓨터공학과",
        skills: ["JavaScript", "React", "TypeScript", "Python"],
        intro: "안녕하세요! 저는 소프트웨어 개발에 열정이 있는 컴퓨터공학과 학생입니다. 다양한 기술을 익히고 팀 프로젝트를 통해 실력을 키우고 있습니다.",
        profileImage: "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084519335100.jpg",
        temperature: 36.5,
        stack: ["Frontend", "Backend"],
    },
    {
        id: "user-002",
        name: "김지범",
        school: "서울대학교",
        major: "산업디자인과",
        skills: ["Photoshop", "Illustrator", "Figma", "UI/UX"],
        intro: "디자인과 사용자 경험을 중요하게 생각하는 산업디자인과 학생입니다. 창의적인 디자인과 실용적인 UX를 결합하는 프로젝트를 주로 진행하고 있습니다.",
        profileImage: "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084594554100.jpg",
        temperature: 36.7,
        stack: ["Design", "UX"],
    },
    {
        id: "user-003",
        name: "이승수",
        school: "카이스트",
        major: "전기전자공학과",
        skills: ["C++", "Verilog", "Embedded", "Machine Learning"],
        intro: "임베디드 시스템과 머신러닝을 전공으로 삼고 있으며, 하드웨어와 소프트웨어의 결합에 관심이 많습니다. 혁신적인 기술을 통해 문제를 해결하는 데 목표를 두고 있습니다.",
        profileImage: "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084777180100.jpg",
        temperature: 36.8,
        stack: ["Embedded", "Machine Learning"],
    },
];

const ResumePage = () => {
    const params = useParams();
    const resumeId = params.id as string;

    const [resumeData, setResumeData] = useState<Resume | null>(null);

    useEffect(() => {
        // Mock data fetching
        const fetchResume = () => {
            const foundResume = mockProfileCardData.find(user => user.id === resumeId);
            if (foundResume) {
                setResumeData({
                    id: foundResume.id,
                    name: foundResume.name,
                    introduction: foundResume.intro,
                    techStacks: foundResume.skills,
                    portfolio: "포트폴리오 링크 없음", // 포트폴리오에 대한 목업 값 설정
                    contactInfo: "연락처 정보 없음", // 연락처에 대한 목업 값 설정
                });
            } else {
                console.error('Resume not found');
            }
        };

        fetchResume();
    }, [resumeId]);

    if (!resumeData) {
        return <p>로딩 중...</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.resumeContent}>
                <h1 className={styles.resumeHeader}>{resumeData.name}님의 이력서</h1>
                <div className={styles.resumeSection}>
                    <h2>소개</h2>
                    <p>{resumeData.introduction}</p>
                </div>
                <div className={styles.resumeSection}>
                    <h2>기술 스택</h2>
                    <p>{resumeData.techStacks.join(', ')}</p>
                </div>
                <div className={styles.resumeSection}>
                    <h2>포트폴리오</h2>
                    <p>{resumeData.portfolio}</p>
                </div>
                <div className={styles.resumeSection}>
                    <h2>연락처</h2>
                    <p>{resumeData.contactInfo}</p>
                </div>
            </div>
            <img
                src={mockProfileCardData.find(user => user.id === resumeId)?.profileImage}
                alt={`${resumeData.name}의 프로필 사진`}
                className={styles.profileImage}
            />
        </div>
    );
    
};

export default ResumePage;

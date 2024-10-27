// src/app/resume/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import styles from './ResumePage.module.css';
import { useParams } from 'next/navigation';

interface Resume {
    id: string;
    name: string;
    introduction: string;
    techStacks: string[];
    portfolio: string;
    contactInfo: string;
}

const ResumePage = () => {
    const params = useParams();
    const resumeId = params.id as string;

    const [resumeData, setResumeData] = useState<Resume | null>(null);

    useEffect(() => {
        // 이력서 데이터를 가져오는 함수
        const fetchResume = async () => {
            try {
                // 실제 API 호출로 대체해야 합니다.
                const response = await fetch(`/api/resumes/${resumeId}`);
                const data = await response.json();
                setResumeData(data);
            } catch (error) {
                console.error('Failed to fetch resume:', error);
            }
        };

        fetchResume();
    }, [resumeId]);

    if (!resumeData) {
        return <p>로딩 중...</p>;
    }

    return (
        <div className={styles.container}>
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
    );
};

export default ResumePage;

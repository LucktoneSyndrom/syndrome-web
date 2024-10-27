// src/app/find/my-team/[id]/applicants/page.tsx
'use client';

import React from 'react';
import styles from './ApplicantsPage.module.css';
import { useRouter } from 'next/navigation';

interface Applicant {
    id: string;
    name: string;
    partName: string;
    profileImageUrl?: string;
}

const mockApplicantsData: Applicant[] = [
    {
        id: '1',
        name: '지원자1',
        partName: '백엔드',
        profileImageUrl: '',
    },
    {
        id: '2',
        name: '지원자2',
        partName: '프론트엔드',
        profileImageUrl: '',
    },
    // 추가 지원자 데이터
];

const ApplicantsPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();

    const handleViewResume = (applicantId: string) => {
        // 이력서 보기 페이지로 이동
        router.push(`/resume/${applicantId}`);
    };

    const handleContact = (applicantId: string) => {
        // 연락하기 기능 구현
        // 예시로 쪽지 보내기 페이지로 이동
        router.push(`/chat/detail/${applicantId}`);
    };

    const handleAddToTeam = (applicantId: string) => {
        // 팀으로 만들기 기능 구현
        // 예시로 API 호출하여 팀에 추가하고, 페이지를 새로고침하거나 상태 업데이트
        alert(`${applicantId}님을 팀에 추가했습니다.`);
    };

    return (
        <div className={styles.container}>
            <h1>지원자 목록</h1>
            <section className={styles.applicantsList}>
                {mockApplicantsData.map((applicant) => (
                    <div className={styles.applicantItem} key={applicant.id}>
                        <div className={styles.applicantImage}></div>
                        <div className={styles.applicantInfo}>
                            {applicant.name} - {applicant.partName}
                        </div>
                        <button
                            className={styles.viewResumeButton}
                            onClick={() => handleViewResume(applicant.id)}
                        >
                            이력서 보기
                        </button>
                        <button
                            className={styles.contactButton}
                            onClick={() => handleContact(applicant.id)}
                        >
                            연락하기
                        </button>
                        <button
                            className={styles.addToTeamButton}
                            onClick={() => handleAddToTeam(applicant.id)}
                        >
                            팀으로 만들기
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ApplicantsPage;

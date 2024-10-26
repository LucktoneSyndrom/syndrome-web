// src/app/find/my-team/[id]/page.tsx
'use client';

import React from 'react';
import styles from './MyTeamDetail.module.css';
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
    // 추가 지원자 데이터
];

const MyTeamDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();

    const handleAccept = (applicantId: string) => {
        // 지원자 수락 로직 처리
    };

    const handleReject = (applicantId: string) => {
        // 지원자 거절 로직 처리
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.teamName}>내 팀 상세 페이지</h1>
            {/* 팀 상세 정보 표시 */}
            <section className={styles.applicantsList}>
                <h2>지원한 팀원 리스트</h2>
                {mockApplicantsData.map((applicant) => (
                    <div className={styles.applicantItem} key={applicant.id}>
                        <div className={styles.applicantImage}></div>
                        <div className={styles.applicantInfo}>
                            {applicant.name} - {applicant.partName}
                        </div>
                        <button
                            className={styles.acceptButton}
                            onClick={() => handleAccept(applicant.id)}
                        >
                            수락
                        </button>
                        <button
                            className={styles.rejectButton}
                            onClick={() => handleReject(applicant.id)}
                        >
                            거절
                        </button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MyTeamDetailPage;

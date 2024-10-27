// src/app/find/my-team/[id]/page.tsx
'use client';

import React from 'react';
import styles from './MyTeamDetail.module.css';
import { useRouter } from 'next/navigation';

const MyTeamDetailPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();

    const handleEditClick = () => {
        router.push(`/find/my-team/${params.id}/edit`);
    };

    const handleApplicantsClick = () => {
        router.push(`/find/my-team/${params.id}/applicants`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.teamName}>내 팀 상세 페이지</h1>
            {/* 팀 상세 정보 표시 */}

            <div className={styles.buttonContainer}>
                {/* 수정하기 버튼 */}
                <button className={styles.editButtonSmall} onClick={handleEditClick}>
                    수정하기
                </button>
                <button className={styles.applicantsButton} onClick={handleApplicantsClick}>
                    지원자 보기
                </button>

            </div>
        </div>
    );
};

export default MyTeamDetailPage;

// src/components/TeamItem.tsx

import React from 'react';
import styles from './TeamItem.module.css';
import { useRouter } from 'next/navigation';
import { TeamCardInfo } from '../types/TeamCardInfo';

interface TeamItemProps {
    teamInfo: TeamCardInfo;
}

const TeamItem: React.FC<TeamItemProps> = ({ teamInfo }) => {
    const router = useRouter();

    const handleCheckClosed = () => {
        // 마감 여부 확인 로직
        alert('마감 여부를 확인합니다.');
    };

    const handleViewDetails = () => {
        router.push(`/find/my-team/${teamInfo.id}`);
    };

    const handleCloseRecruitment = () => {
        // 모집 마감 로직
        alert('모집을 마감합니다.');
    };

    const handleViewApplicants = () => {
        router.push(`/find/my-team/${teamInfo.id}/applicants`);
    };

    const handleTeamChat = () => {
        router.push(`/chat/team/${teamInfo.id}`);
    };

    return (
        <div className={styles.teamItem}>
            <h3 className={styles.teamName}>{teamInfo.teamName}</h3>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleCheckClosed}>
                    마감 여부
                </button>
                <button className={styles.button} onClick={handleViewDetails}>
                    자세히 보기
                </button>
                <button className={styles.button} onClick={handleCloseRecruitment}>
                    마감시키기
                </button>
                <button className={styles.button} onClick={handleViewApplicants}>
                    지원자 보기
                </button>
                <button className={styles.button} onClick={handleTeamChat}>
                    팀 채팅
                </button>
            </div>
        </div>
    );
};

export default TeamItem;

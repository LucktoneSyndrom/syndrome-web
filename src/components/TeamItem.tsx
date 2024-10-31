// src/components/TeamItem.tsx

import React, { useState } from 'react';
import styles from './TeamItem.module.css';
import { useRouter } from 'next/navigation';
import { TeamCardInfo } from '../types/TeamCardInfo';

interface TeamItemProps {
    teamInfo: TeamCardInfo;
}

const TeamItem: React.FC<TeamItemProps> = ({ teamInfo }) => {
    const router = useRouter();
    const [isClosed, setIsClosed] = useState(false); // 마감 여부 상태

    const handleToggleChange = () => {
        setIsClosed(!isClosed);
        // 마감 상태 변경 로직 처리 (예: API 호출)
    };

    const handleViewDetails = () => {
        router.push(`/find/my-team/${teamInfo.id}`);
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

            <div className={styles.statusContainer}>
                <span className={styles.statusLabel}>마감 여부:</span>
                <span>{isClosed ? '마감됨' : '모집 중'}</span>
            </div>

            <div className={styles.recruitInfo}>
                <span className={styles.statusLabel}>모집 인원:</span>
                <span>
                    {teamInfo.positions.map((position) => (
                        <span key={position.role} className={styles.position}>
                            {position.role} {position.count}명
                        </span>
                    ))}
                </span>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleViewApplicants}>
                    지원자 보기
                </button>
                <button className={styles.button} onClick={handleTeamChat}>
                    팀 채팅
                </button>
                <button className={styles.button} onClick={handleViewDetails}>
                    자세히 보기
                </button>
            </div>
        </div>
    );
};

export default TeamItem;

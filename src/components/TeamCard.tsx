// src/components/TeamCard.tsx

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './TeamCard.module.css';
import { TeamCardInfo } from '../types/TeamCardInfo';

interface TeamCardProps {
    teamCardInfo: TeamCardInfo;
    isSelected?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamCardInfo, isSelected }) => {
    const router = useRouter();

    const handleDetailsClick = () => {
        router.push(`/gather/team/${teamCardInfo.id}`);
    };

    const handleChatClick = () => {
        router.push(`/chat/team/${teamCardInfo.id}`);
    };

    return (
        <div className={styles.teamCard}>
            <h3 className={styles.teamName}>{teamCardInfo.teamName}</h3>
            <p className={styles.shortDescription}>{teamCardInfo.shortDescription}</p>
            <p className={styles.deadline}>마감일: {teamCardInfo.deadline}</p>
            <div className={styles.recruitmentParts}>
                {teamCardInfo.recruitmentParts.map((part, index) => (
                    <p className={styles.recruitmentPart} key={index}>
                        {part.partName}: {part.numberNeeded}명
                    </p>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.detailsButton} onClick={handleDetailsClick}>
                    자세히 보기
                </button>
                {isSelected && (
                    <button className={styles.chatButton} onClick={handleChatClick}>
                        팀 채팅
                    </button>
                )}
            </div>
        </div>
    );
};

export default TeamCard;

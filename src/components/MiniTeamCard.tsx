// src/components/MiniTeamCard.tsx

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './MiniTeamCard.module.css';
import { TeamCardInfo } from '../types/TeamCardInfo';

interface MiniTeamCardProps {
    teamCardInfo: TeamCardInfo;
}

const MiniTeamCard: React.FC<MiniTeamCardProps> = ({ teamCardInfo }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/gather/team/${teamCardInfo.id}`);
    };

    return (
        <div className={styles.miniTeamCard} onClick={handleCardClick}>
            <h3 className={styles.teamName}>{teamCardInfo.teamName}</h3>
            <p className={styles.shortDescription}>{teamCardInfo.shortDescription}</p>
            <div className={styles.recruitmentParts}>

                {teamCardInfo.recruitmentParts.map((part, index) => (
                    <span key={index} className={styles.part}>
            {part.partName} {part.numberNeeded}명
                        {index < teamCardInfo.recruitmentParts.length - 1 && ', '}
          </span>
                ))}
            </div>
            <div className={styles.tagContainer}>
                {teamCardInfo.tag.map((tag, index) => (
                    <span key={index} className={styles.tag}>
            #{tag}
          </span>
                ))}
            </div>
        </div>
    );
};

export default MiniTeamCard;

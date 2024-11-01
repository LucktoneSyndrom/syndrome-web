// src/components/TeamCard.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Chip } from '@mui/material';
import Image from 'next/image';
import styles from './TeamCard.module.css';
import { TeamCardInfo } from '../../types/TeamCardInfo';

interface TeamCardProps {
  teamCardInfo: TeamCardInfo;
  isSelected?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamCardInfo, isSelected }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/gather/team/${teamCardInfo.id}`);
  };

  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 요소 클릭 방지
    router.push(`/chat/team/${teamCardInfo.id}`);
  };

  return (
      <div
          className={styles.teamCardContainer}
          onClick={handleDetailsClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleDetailsClick();
          }}
          aria-label={`팀 ${teamCardInfo.teamName} 자세히 보기`}
      >
        {/* Content Section */}
        <div className={styles.contentContainer}>
          <h3 className={styles.teamName}>{teamCardInfo.teamName}</h3>
          <p className={styles.shortDescription}>{teamCardInfo.shortDescription}</p>

          {/* Recruitment Parts */}
          <div className={styles.recruitmentParts}>
            {teamCardInfo.recruitmentParts.map((part, index) => (
                <span key={index} className={styles.recruitmentPart}>
              {part.partName} {part.numberNeeded}명
            </span>
            ))}
          </div>

          {/* Tags */}
          <div className={styles.tagContainer}>
            {teamCardInfo.tag.map((tag, index) => (
                <Chip key={index} label={`#${tag}`} className={styles.tag} />
            ))}
          </div>

          {/* Recruitment Deadline */}
          <div className={styles.deadlineContainer}>
            <span className={styles.deadlineDay}>D-{teamCardInfo.deadlineDay}</span>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
          <Image
              src="/images/teams/1.jpg"
              alt={`${teamCardInfo.teamName} 이미지`}
              className={styles.teamImage}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/images/teams/1.jpg"
          />
        </div>
      </div>
  );
};

export default TeamCard;

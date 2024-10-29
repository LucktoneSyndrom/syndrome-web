// src/components/TeamCard.tsx
'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Chip } from "@mui/material";
import styles from "./TeamCard.module.css";
import { TeamCardInfo } from "../types/TeamCardInfo";

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
    <div className={styles.teamCard} onClick={handleDetailsClick}>
      <h3 className={styles.shortDescription}>
        {teamCardInfo.shortDescription}
      </h3>
      <Chip label={teamCardInfo.collectPart} />
      <p className={styles.teamName}>{teamCardInfo.teamName}</p>

      <p className={styles.person}>모집 인원: {teamCardInfo.person}</p>
      <div className={styles.recruitmentParts}>
        <span className={styles.recruitmentPart}>현재 팀: </span>
        {teamCardInfo.recruitmentParts.map((part, index) => (
          <span className={styles.recruitmentPart} key={index}>
            {part.partName} {part.numberNeeded}명
            {index < teamCardInfo.recruitmentParts.length - 1 && ", "}
          </span>
        ))}
      </div>
      <span className={styles.deadline}>
        모집 기간: {teamCardInfo.deadline}
      </span>
      <span className={styles.deadlineDay}>D-{teamCardInfo.deadlineDay}</span>
      <p className={styles.tag}># {teamCardInfo.tag}</p>
      {isSelected && (
        <button className={styles.chatButton} onClick={handleChatClick}>
          팀 채팅
        </button>
      )}
    </div>
  );
};

export default TeamCard;

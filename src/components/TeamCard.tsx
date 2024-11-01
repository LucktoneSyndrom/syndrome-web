// src/components/TeamCard.tsx

import React from "react";
import { useRouter } from "next/navigation";
import { Chip, Stack } from "@mui/material";
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

  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 부모 요소 클릭 방지
    router.push(`/chat/team/${teamCardInfo.id}`);
  };

  return (
    <div className={styles.teamCard} onClick={handleDetailsClick}>
      <h3 className={styles.shortDescription}>
        {teamCardInfo.shortDescription}
      </h3>
      <Stack direction="row" spacing={0.5}>
          {teamCardInfo.collectPart && teamCardInfo.collectPart.map((part, index) => (
          <Chip
            key={index}
            label={part}
            className={styles.chip}
            color={
              part === "Frontend"
                ? "error"
                : part === "Backend"
                ? "primary"
                : part === "Mobile"
                ? "success"
                : "default"
            }
          />
        ))}
      </Stack>

      <p className={styles.teamName}>{teamCardInfo.teamName}</p>

      <div className={styles.recruitmentParts}>
        <span className={styles.recruitmentPartLabel}>모집 인원: </span>
        {teamCardInfo.recruitmentParts.map((part, index) => (
          <span className={styles.recruitmentPart} key={index}>
            {part.partName} {part.numberNeeded}명
            {index < teamCardInfo.recruitmentParts.length - 1 && ", "}
          </span>
        ))}
      </div>

      <div className={styles.deadlineContainer}>
        <span className={styles.deadline}>
          모집 기간: {teamCardInfo.deadline}
        </span>
        <span className={styles.deadlineDay}>D-{teamCardInfo.deadlineDay}</span>
      </div>
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

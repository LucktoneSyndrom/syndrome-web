// src/components/TeamCard.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Chip, Stack, Divider } from "@mui/material";
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
    <Stack>
      <div className={styles.teamCard} onClick={handleDetailsClick}>
        <p className={styles.teamName}>{teamCardInfo.teamName}</p>
        <h3 className={styles.shortDescription}>
          {teamCardInfo.shortDescription}
        </h3>
        <Stack direction="row" spacing={0.5}>
          {teamCardInfo.recruitmentParts.map((part, index) => (
            <Chip
              key={index}
              label={part.partName}
              className={styles.chip}
              color={
                part.partName === "Frontend"
                  ? "error"
                  : part.partName === "Backend"
                    ? "primary"
                    : part.partName === "Mobile"
                      ? "success"
                      : "default"
              }
            />
          ))}
        </Stack>
        <div className={styles.infoContainer}>
          <div className={styles.recruitmentParts}>
            <span className={styles.recruitmentPartLabel}>모집 인원: </span>
            {teamCardInfo.recruitmentParts.map((part, index) => (
              <span className={styles.recruitmentPart} key={index}>
                {part.partName} {part.numberNeeded}명
                {index < teamCardInfo.recruitmentParts.length - 1 && ", "}
              </span>
            ))}
          </div>
          <Divider orientation="vertical" flexItem className={styles.divider} />
          <div className={styles.deadlineContainer}>
            <span className={styles.deadline}>
              모집 기간: {teamCardInfo.deadline}
            </span>
            <span className={styles.deadlineDay}>
              D-{teamCardInfo.deadlineDay}
            </span>
          </div>
          <Divider orientation="vertical" flexItem className={styles.divider} />
          <p className={styles.tag}>
            {teamCardInfo.tag.map((tag, index) => `#${tag}`).join(' ')}
          </p>
        </div>

        {/* 버튼 섹션 */}
        <div className={styles.buttonSection}>

          {isSelected && (
            <>
              <button className={styles.chatButton} onClick={handleChatClick}>
                팀 채팅
              </button>
            </>
          )}
        </div>
      </div>
    </Stack>
  );
};

export default TeamCard;

// src/app/gather/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./GatherPage.module.css";
import TeamCard from "../../components/TeamCard";
import { TeamCardInfo } from "../../types/TeamCardInfo";

const mockTeamCardData: TeamCardInfo[] = [
  {
    id: "1",
    shortDescription: "백엔드 개발자를 모집합니다.",
    teamName: "프로젝트 A",
    collectPart: "Backend",
    person: 1,
    deadline: "2023-12-31",
    deadlineDay: 7,
    tag: "공모전",
    recruitmentParts: [
      { partName: "백엔드", numberNeeded: 2 },
      { partName: "프론트엔드", numberNeeded: 1 },
    ],
  },
  {
    id: "2",
    shortDescription: "프론트엔드 개발자를 모집합니다.",
    teamName: "프로젝트 B",
    collectPart: "Frontend",
    person: 1,
    deadline: "2023-11-15",
    deadlineDay: 20,
    tag: "React",
    recruitmentParts: [{ partName: "프론트엔드", numberNeeded: 2 }],
  },
  {
    id: "3",
    shortDescription: "모바일 앱 개발자를 모집합니다.",
    teamName: "프로젝트 C",
    collectPart: "Mobile",
    person: 2,
    deadline: "2023-12-31",
    deadlineDay: 35,
    tag: "Android",
    recruitmentParts: [{ partName: "모바일", numberNeeded: 1 }],
  },
  // 추가 팀 카드 데이터
];

const GatherPage = () => {
  const [tab, setTab] = useState<"team" | "applied">("team");

  const handleTabClick = (selectedTab: "team" | "applied") => {
    setTab(selectedTab);
  };

  return (
    <div className={styles.container}>
      {/* Tab Menu */}
      <div className={styles.tabMenu}>
        <button
          onClick={() => handleTabClick("team")}
          className={tab === "team" ? styles.active : ""}
        >
          팀 찾기
        </button>
        <button
          onClick={() => handleTabClick("applied")}
          className={tab === "applied" ? styles.active : ""}
        >
          내가 지원한 팀 보기
        </button>
      </div>

      {/* List Section */}
      <section className={styles.listSection}>
        {tab === "team" ? (
          <>
            {mockTeamCardData.length > 0 ? (
              <div className={styles.teamCardList}>
                {mockTeamCardData.map((team) => (
                  <TeamCard key={team.id} teamCardInfo={team} />
                ))}
              </div>
            ) : (
              <p className={styles.noData}>등록된 팀이 없습니다.</p>
            )}
          </>
        ) : (
          // 내가 지원한 팀 보기 내용 (이미 구현됨)
          <></>
        )}
      </section>
    </div>
  );
};

export default GatherPage;

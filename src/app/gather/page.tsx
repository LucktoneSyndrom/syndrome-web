// src/app/gather/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./GatherPage.module.css";
import Header from "../../components/Header";
import TeamCard from "../../components/TeamCard";
import { TeamCardInfo } from "../../types/TeamCardInfo";
import Category from "../../components/Category";

const mockTeamCardData: TeamCardInfo[] = [
  {
    id: "1",
    shortDescription: "백엔드, 프론트엔드 개발자를 모집합니다.",
    teamName: "프로젝트 A",
    collectPart: ["Backend", "Frontend"],
    deadline: "2023-12-31",
    deadlineDay: 7,
    tag: ["공모전"],
    recruitmentParts: [
      { partName: "백엔드", numberNeeded: 2 },
      { partName: "프론트엔드", numberNeeded: 1 },
    ],
  },
  {
    id: "2",
    shortDescription: "프론트엔드 개발자를 모집합니다.",
    teamName: "프로젝트 B",
    collectPart: ["Frontend"],
    deadline: "2023-11-15",
    deadlineDay: 20,
    tag: ["React"],
    recruitmentParts: [{ partName: "프론트엔드", numberNeeded: 2 }],
  },
  {
    id: "3",
    shortDescription: "모바일 앱 개발자를 모집합니다.",
    teamName: "프로젝트 C",
    collectPart: ["Mobile"],
    deadline: "2023-12-31",
    deadlineDay: 35,
    tag: ["Android"],
    recruitmentParts: [{ partName: "모바일", numberNeeded: 1 }],
  },
  // 추가 팀 카드 데이터
];


// 내가 속한 팀 더미 데이터 (선정된 팀과 선정되지 않은 팀)
const myParticipatingTeams = {
  selected: [
    {
      id: "12",
      shortDescription: "데이터 사이언티스트와 엔지니어를 모집합니다.",
      teamName: "데이터 분석팀",
      collectPart: ["Data Scientist", "Engineer"],
      deadline: "2024-03-01",
      deadlineDay: 30,
      tag: ["Data", "Analysis"],
      recruitmentParts: [
        { partName: "Data Scientist", numberNeeded: 1 },
        { partName: "Engineer", numberNeeded: 2 },
      ],
    },
  ],
  notSelected: [
    {
      id: "13",
      shortDescription: "모바일 UX 디자이너를 모집합니다.",
      teamName: "모바일 앱 UX 팀",
      collectPart: ["UX Designer"],
      deadline: "2023-12-15",
      deadlineDay: 20,
      tag: ["UX", "Mobile"],
      recruitmentParts: [{ partName: "UX Designer", numberNeeded: 1 }],
    },{
      id: "10",
      shortDescription: "AI 연구 개발자를 모집합니다.",
      teamName: "인공지능 연구팀",
      collectPart: ["AI Engineer", "Data Scientist"],
      deadline: "2024-01-15",
      deadlineDay: 45,
      tag: ["AI", "Research"],
      recruitmentParts: [
        { partName: "AI Engineer", numberNeeded: 2 },
        { partName: "Data Scientist", numberNeeded: 1 },
      ],
    },
    {
      id: "11",
      shortDescription: "풀스택 개발자를 모집합니다.",
      teamName: "웹 플랫폼 개발팀",
      collectPart: ["Backend", "Frontend"],
      deadline: "2024-02-20",
      deadlineDay: 60,
      tag: ["Fullstack", "Web"],
      recruitmentParts: [
        { partName: "Backend", numberNeeded: 1 },
        { partName: "Frontend", numberNeeded: 1 },
      ],
    },

  ],
};

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
            내가 신청한 팀
          </button>
        </div>

        {/* List Section */}
        <section className={styles.listSection}>
          {tab === "team" ? (
              <>
                <Category />
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
              <>
                <Category />
                {myParticipatingTeams.selected.length > 0 ? (
                    <div className={styles.teamCardList}>
                      {myParticipatingTeams.selected.map((team) => (
                          <TeamCard
                              key={team.id}
                              teamCardInfo={team}
                              isSelected={true}
                          />
                      ))}
                    </div>
                ) : (
                    <p className={styles.noData}>선정된 팀이 없습니다.</p>
                )}
                {myParticipatingTeams.notSelected.length > 0 ? (
                    <div className={styles.teamCardList}>
                      {myParticipatingTeams.notSelected.map((team) => (
                          <TeamCard
                              key={team.id}
                              teamCardInfo={team}
                              isSelected={false}
                          />
                      ))}
                    </div>
                ) : (
                    <p className={styles.noData}>선정되지 않은 팀이 없습니다.</p>
                )}
              </>
          )}
        </section>
      </div>
  );
};

export default GatherPage;

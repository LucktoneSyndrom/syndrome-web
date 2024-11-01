// src/app/find/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./FindPage.module.css";
import { useRouter } from "next/navigation";
import TeamItem from "../../components/TeamItem"; // 새로운 컴포넌트
import { Typography, Stack } from "@mui/material";
import { TeamCardInfo } from "../../types/TeamCardInfo";
import { UserCardInfo } from "../../types/ProfileCardInfo";
import Category from "../../components/Category";

import ProfileCard from "../../components/ProfileCard";

const mockMyTeamsData: TeamCardInfo[] = [
    {
        id: 'team-001',
        teamName: '내가 만든 프로젝트 1',
        shortDescription: '프로젝트 설명 1',
        deadline: '2023-12-31',
        recruitmentParts: [{ partName: '백엔드', numberNeeded: 1 }],
    },
    // 추가 데이터
];

const mockProfileCardData: UserCardInfo[] = [
  {
    name: "최승식",
    school: "인천대학교",
    major: "컴퓨터공학과",
    skills: ["JavaScript", "React", "TypeScript", "Python"],
    intro:
      "안녕하세요! 저는 소프트웨어 개발에 열정이 있는 컴퓨터공학과 학생입니다. 다양한 기술을 익히고 팀 프로젝트를 통해 실력을 키우고 있습니다.",
    profileImage:
      "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084519335100.jpg",
    temperature: 36.5,
    stack: ["Frontend", "Backend"], // 스택 정보 배열로 변경
  },
  {
    name: "김지범",
    school: "서울대학교",
    major: "산업디자인과",
    skills: ["Photoshop", "Illustrator", "Figma", "UI/UX"],
    intro:
      "디자인과 사용자 경험을 중요하게 생각하는 산업디자인과 학생입니다. 창의적인 디자인과 실용적인 UX를 결합하는 프로젝트를 주로 진행하고 있습니다.",
    profileImage:
      "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084594554100.jpg",
    temperature: 36.7,
    stack: ["Design", "UX"],
  },
  {
    name: "이승수",
    school: "카이스트",
    major: "전기전자공학과",
    skills: ["C++", "Verilog", "Embedded", "Machine Learning"],
    intro:
      "임베디드 시스템과 머신러닝을 전공으로 삼고 있으며, 하드웨어와 소프트웨어의 결합에 관심이 많습니다. 혁신적인 기술을 통해 문제를 해결하는 데 목표를 두고 있습니다.",
    profileImage:
      "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084777180100.jpg",
    temperature: 36.8,
    stack: ["Embedded", "Machine Learning"],
  },
];

const FindPage = () => {
  const router = useRouter();

  const [tab, setTab] = useState<"find" | "created">("find");

  const handleTabClick = (selectedTab: "find" | "created") => {
    setTab(selectedTab);
  };

  const handleCreateTeam = () => {
    router.push("/find/create-team");
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabMenu}>
        <button
          onClick={() => handleTabClick("find")}
          className={tab === "find" ? styles.active : ""}
        >
          멤버 찾기
        </button>
        <button
          onClick={() => handleTabClick("created")}
          className={tab === "created" ? styles.active : ""}
        >
          내가 만든 팀 보기
        </button>
      </div>
      {tab === "created" ? ( //내가 만든 팀 보기
        <>
          <button
            className={styles.createTeamButton}
            onClick={handleCreateTeam}
          >
            팀 만들기
          </button>

          <section className={styles.teamList}>
            <h2>내가 만든 팀</h2>
            {mockMyTeamsData.length > 0 ? (
              <div className={styles.teamCardList}>
                {mockMyTeamsData.map((team) => (
                  <TeamItem key={team.id} teamInfo={team} />
                ))}
              </div>
            ) : (
              <p className={styles.noData}>아직 만든 팀이 없습니다.</p>
            )}
          </section>
        </>
      ) : (
        //멤버 찾기
        <>
          <div>
            <Category />
          </div>
          <Stack sx={{ pl: "10px" }}>
            {mockProfileCardData.map((user) => (
              <ProfileCard userInfo={user} />
            ))}
          </Stack>
        </>
      )}
    </div>
  );
};

export default FindPage;

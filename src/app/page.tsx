// src/app/page.tsx
"use client";

import React, { useState } from "react";
import styles from "./HomePage.module.css";
import { useRouter } from "next/navigation";
import { FaSearch, FaPlusCircle, FaComments, FaUser } from "react-icons/fa";
import TeamCard from "../components/TeamCard";
import Image from "../components/Image";
import { TeamCardInfo } from "../types/TeamCardInfo";

const mockRecommendedTeams: TeamCardInfo[] = [
  // 추천 팀 더미 데이터
  {
    id: "1",
    teamName: "추천 프로젝트 A",
    shortDescription: "함께 성장할 팀원을 찾습니다.",
    deadline: "2023-12-31",
    recruitmentParts: [{ partName: "프론트엔드", numberNeeded: 1 }],
    collectPart: ["Frontend"],
    deadlineDay: 24,
    tag: ["공모전"],
  },
  {
    id: "2",
    teamName: "추천 프로젝트 B",
    shortDescription: "열정적인 백엔드 개발자를 모집합니다.",
    deadline: "2023-11-30",
    recruitmentParts: [{ partName: "백엔드", numberNeeded: 2 }],
    deadlineDay: 20,
    collectPart: ["Backend"],
    tag: ["Spring"],
  },
  // 추가 데이터
];

const HomePage = () => {
  const router = useRouter();
  const userName = "홍길동"; // 사용자 이름 (예시)
  const [searchQuery, setSearchQuery] = useState("");

  const handleQuickAccessClick = (path: string) => {
    router.push(path);
  };

  const handleSearch = () => {
    // 검색 기능 구현
    alert(`검색어: ${searchQuery}`);
  };

  return (
    <div className={styles.container}>
      {/* 알림 배너 */}
      <div className={styles.notificationBanner}>새로운 지원자가 있습니다!</div>

      <Image src="logo.png" />

      {/* 검색 바 */}
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="팀이나 프로젝트 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          검색
        </button>
      </div>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>팀 찾기</h2>
          <p>원하는 프로젝트 팀을 찾아 참여하세요.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>팀원 모집</h2>
          <p>프로젝트에 필요한 팀원을 구해보세요.</p>
        </div>
      </section>

      {/*/!* 배너 이미지 *!/*/}
      {/*<div className={styles.banner}>*/}
      {/*    <div className={styles.bannerImage}></div>*/}
      {/*</div>*/}

      {/* 추천 팀 */}
      <div className={styles.recommendations}>
        <h2 className={styles.sectionTitle}>추천 팀</h2>
        <div className={styles.teamCardList}>
          {mockRecommendedTeams.map((team) => (
            <div className={styles.teamCard} key={team.id}>
              <TeamCard teamCardInfo={team} />
            </div>
          ))}
        </div>
      </div>

      {/* 나의 팀 */}
      <div className={styles.myTeams}>
        <h2 className={styles.sectionTitle}>나의 팀</h2>
        {/* 나의 팀 목록 표시 */}
        {/* ... */}
      </div>
    </div>
  );
};

export default HomePage;

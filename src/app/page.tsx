// src/app/page.tsx

'use client';



import React, { useState } from 'react';
import styles from './HomePage.module.css';
import { useRouter } from 'next/navigation';
import { FaSearch, FaUsers, FaPlusCircle } from 'react-icons/fa';
import MiniTeamCard from '../components/MiniTeamCard';
import { TeamCardInfo } from '../types/TeamCardInfo';

const mockRecommendedTeams: TeamCardInfo[] = [
    {
        id: '1',
        teamName: '함께하는 프로젝트 A',
        shortDescription: '함께 성장할 팀원을 찾습니다.',
        deadline: '2023-12-31',
        recruitmentParts: [{ partName: '프론트엔드', numberNeeded: 1 }],
        collectPart: ['Frontend'],
        deadlineDay: 24,
        tag: ['공모전'],
    },
    {
        id: '2',
        teamName: '열정 가득 프로젝트 B',
        shortDescription: '열정적인 백엔드 개발자를 모집합니다.',
        deadline: '2023-11-30',
        recruitmentParts: [{ partName: '백엔드', numberNeeded: 2 }],
        collectPart: ['Backend'],
        deadlineDay: 20,
        tag: ['Spring'],
    },
    {
        id: '3',
        teamName: '열정 가득 프로젝트 B',
        shortDescription: '열정적인 백엔드 개발자를 모집합니다.',
        deadline: '2023-11-30',
        recruitmentParts: [{ partName: '백엔드', numberNeeded: 2 }],
        collectPart: ['Backend'],
        deadlineDay: 20,
        tag: ['Spring'],
    },
];

const mockParticipatingTeams: TeamCardInfo[] = [
    {
        id: '3',
        teamName: '창의적 디자인 팀',
        shortDescription: '디자인과 UX에 열정 있는 팀원을 찾습니다.',
        deadline: '2023-12-15',
        recruitmentParts: [{ partName: '디자이너', numberNeeded: 1 }],
        collectPart: ['Designer'],
        deadlineDay: 10,
        tag: ['디자인', 'UX'],
    },
    {
        id: '4',
        teamName: 'AI 연구 프로젝트',
        shortDescription: 'AI 관련 연구에 관심 있는 분을 모집합니다.',
        deadline: '2023-11-25',
        recruitmentParts: [{ partName: 'AI 엔지니어', numberNeeded: 1 }],
        collectPart: ['AI'],
        deadlineDay: 5,
        tag: ['AI', 'Machine Learning'],
    },
];

const HomePage = () => {
  const router = useRouter();
  const userName = '홍길동'; // 사용자 이름 (예시)
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleSearch = () => {
    // 검색 기능 구현
    alert(`검색어: ${searchQuery}`);
  };

  return (
      <div className={styles.container}>
        {/* 헤더 */}
        <header className={styles.header}>
          <img src="/logo.png" alt="로고" className={styles.logo} />
          <nav className={styles.nav}>
            <button onClick={() => handleNavigation('/find')}>
              <FaSearch /> 팀 찾기
            </button>
            <button onClick={() => handleNavigation('/gather')}>
              <FaUsers /> 팀원 모집
            </button>
          </nav>
        </header>

        {/* 환영 메시지 */}
        <section className={styles.welcomeSection}>
          <h1>
            안녕하세요, <span className={styles.userName}>{userName}</span>님! 👋
          </h1>
          <p>오늘도 멋진 협업을 시작해보세요.</p>
        </section>

        {/* 검색 바 */}
        <div className={styles.searchBar}>
          <input
              type="text"
              className={styles.searchInput}
              placeholder="관심 있는 팀이나 프로젝트를 찾아보세요."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        {/* 추천 팀 */}
        <section className={styles.recommendations}>
          <h2 className={styles.sectionTitle}>추천 팀</h2>
          <div className={styles.teamCardList}>
            {mockRecommendedTeams.map((team) => (
                <MiniTeamCard key={team.id} teamCardInfo={team} />
            ))}
          </div>
        </section>

        {/* 나의 팀 */}
          <section className={styles.myTeams}>
              <h2 className={styles.sectionTitle}>내가 참여 중인 팀</h2>
              <div className={styles.teamCardList}>
                  {mockParticipatingTeams.map((team) => (
                      <MiniTeamCard key={team.id} teamCardInfo={team} />
                  ))}
              </div>
          </section>

        <button className={styles.createTeamButton} onClick={() => handleNavigation('/find/create-team')}>
          <FaPlusCircle /> 새로운 팀 만들기
        </button>

        {/* 푸터 */}
        <footer className={styles.footer}>
          <p>© 2023 MyCollab. 모두와 함께하는 협업 플랫폼</p>
        </footer>
      </div>
  );
};

export default HomePage;


'use client';

import React, { useState, useEffect } from "react";
import styles from './GatherPage.module.css';
import TeamCard from '../../components/TeamCard';
import { TeamCardInfo } from '../../types/TeamCardInfo';
import Category from '../../components/Category';
import { FaSearch, FaUsers, FaPlusCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const GatherPage = () => {
  const router = useRouter();
  const [tab, setTab] = useState<"team" | "applied">("team");
  const [teamData, setTeamData] = useState<TeamCardInfo[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<TeamCardInfo[]>([]);
  const [notSelectedTeams, setNotSelectedTeams] = useState<TeamCardInfo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [filteredTeamData, setFilteredTeamData] = useState<TeamCardInfo[]>([]);
  const [filteredSelectedTeams, setFilteredSelectedTeams] = useState<TeamCardInfo[]>([]);
  const [filteredNotSelectedTeams, setFilteredNotSelectedTeams] = useState<TeamCardInfo[]>([]);

  // 더미 데이터 설정
  const mockTeamData: TeamCardInfo[] = [
    {
      id: "4",
      shortDescription: "AI 개발자를 모집합니다.",
      teamName: "인공지능 연구팀",
      collectPart: ["AI Engineer"],
      deadline: "2024-01-15",
      deadlineDay: 45,
      tag: ["AI", "Research"],
      recruitmentParts: [
        { partName: "AI Engineer", numberNeeded: 2 },
      ],
    },
    {
      id: "5",
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
    // 추가 팀 데이터
  ];

  const mockParticipatingTeams: TeamCardInfo[] = {
    selected: [
      {
        id: "6",
        shortDescription: "UX 디자이너를 모집합니다.",
        teamName: "모바일 UX 팀",
        collectPart: ["UX Designer"],
        deadline: "2024-03-10",
        deadlineDay: 25,
        tag: ["UX", "Mobile"],
        recruitmentParts: [
          { partName: "UX Designer", numberNeeded: 1 },
        ],
      },
    ],
    notSelected: [
      {
        id: "7",
        shortDescription: "데이터 분석가를 모집합니다.",
        teamName: "데이터 분석팀",
        collectPart: ["Data Analyst"],
        deadline: "2024-04-05",
        deadlineDay: 50,
        tag: ["Data", "Analysis"],
        recruitmentParts: [
          { partName: "Data Analyst", numberNeeded: 2 },
        ],
      },
    ],
  };

  useEffect(() => {
    // 실제 프로젝트에서는 API를 통해 데이터 페칭
    setTeamData(mockTeamData);
    setSelectedTeams(mockParticipatingTeams.selected);
    setNotSelectedTeams(mockParticipatingTeams.notSelected);

    // 초기 필터링 설정
    setFilteredTeamData(mockTeamData);
    setFilteredSelectedTeams(mockParticipatingTeams.selected);
    setFilteredNotSelectedTeams(mockParticipatingTeams.notSelected);
  }, []);

  const handleTabClick = (selectedTab: "team" | "applied") => {
    setTab(selectedTab);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // 검색어가 비어있을 경우 전체 데이터 표시
      setFilteredTeamData(teamData);
      setFilteredSelectedTeams(selectedTeams);
      setFilteredNotSelectedTeams(notSelectedTeams);
      return;
    }

    const query = searchQuery.toLowerCase();

    // 팀 찾기 탭 필터링
    const filteredTeams = teamData.filter(
        (team) =>
            team.teamName.toLowerCase().includes(query) ||
            team.shortDescription.toLowerCase().includes(query)
    );

    // 신청한 팀 탭 필터링
    const filteredSelected = selectedTeams.filter(
        (team) =>
            team.teamName.toLowerCase().includes(query) ||
            team.shortDescription.toLowerCase().includes(query)
    );

    const filteredNotSelected = notSelectedTeams.filter(
        (team) =>
            team.teamName.toLowerCase().includes(query) ||
            team.shortDescription.toLowerCase().includes(query)
    );

    setFilteredTeamData(filteredTeams);
    setFilteredSelectedTeams(filteredSelected);
    setFilteredNotSelectedTeams(filteredNotSelected);
  };

  return (
      <div className={styles.container}>
        {/* 헤더 */}
        <header className={styles.header}>
          <img src="/logo.png" alt="로고" className={styles.logo} />
          <nav className={styles.nav}>
            <button onClick={() => router.push('/find')}>
              <FaSearch /> 팀 찾기
            </button>
            <button onClick={() => router.push('/gather')}>
              <FaUsers /> 팀원 모집
            </button>
          </nav>
        </header>

        {/* 탭 메뉴 */}
        <div className={styles.tabMenu}>
          <button
              onClick={() => handleTabClick('team')}
              className={tab === 'team' ? styles.active : ''}
          >
            팀 찾기
          </button>
          <button
              onClick={() => handleTabClick('applied')}
              className={tab === 'applied' ? styles.active : ''}
          >
            내가 신청한 팀
          </button>
        </div>

        {/* 검색 바 */}
        <div className={styles.searchBar}>
          <input
              type="text"
              className={styles.searchInput}
              placeholder="팀이나 프로젝트를 검색해보세요."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        {/* 리스트 섹션 */}
        <section className={styles.listSection}>
          {tab === 'team' ? (
              <>
                <Category />
                {filteredTeamData.length > 0 ? (
                    <div className={styles.teamCardList}>
                      {filteredTeamData.map((team) => (
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
                {filteredSelectedTeams.length > 0 ? (
                    <>
                      <h3 className={styles.subSectionTitle}>선정된 팀</h3>
                      <div className={styles.teamCardList}>
                        {filteredSelectedTeams.map((team) => (
                            <TeamCard
                                key={team.id}
                                teamCardInfo={team}
                                isSelected={true}
                            />
                        ))}
                      </div>
                    </>
                ) : (
                    <p className={styles.noData}>선정된 팀이 없습니다.</p>
                )}
                {filteredNotSelectedTeams.length > 0 ? (
                    <>
                      <h3 className={styles.subSectionTitle}>선정되지 않은 팀</h3>
                      <div className={styles.teamCardList}>
                        {filteredNotSelectedTeams.map((team) => (
                            <TeamCard
                                key={team.id}
                                teamCardInfo={team}
                                isSelected={false}
                            />
                        ))}
                      </div>
                    </>
                ) : (
                    <p className={styles.noData}>선정되지 않은 팀이 없습니다.</p>
                )}
              </>
          )}
        </section>

        {/* 푸터 */}
        <footer className={styles.footer}>
          <p>© 2023 MyCollab. 모두와 함께하는 협업 플랫폼</p>
        </footer>
      </div>
  );
};

export default GatherPage;

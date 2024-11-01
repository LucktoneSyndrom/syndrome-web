// src/pages/GatherPage.tsx

"use client";

import React, { useState, useEffect } from "react";
import styles from './GatherPage.module.css';
import TeamCard from '../../components/TeamCard';
import { TeamCardInfo } from '../../types/TeamCardInfo';
import Category from '../../components/Category';
import { FaSearch } from "react-icons/fa";
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

    // 필터링을 위한 상태 관리
    const [selectedField, setSelectedField] = useState<string>('All');
    const [selectedStack, setSelectedStack] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string>('All');
    const [selectedSort, setSelectedSort] = useState<string>(''); // 초기값을 ''로 설정

    // 더미 데이터 설정
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
            region: "서울",
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
            region: "부산",
        },
        {
            id: "8",
            shortDescription: "모바일 앱 개발자를 모집합니다.",
            teamName: "모바일 개발팀",
            collectPart: ["iOS Developer", "Android Developer"],
            deadline: "2024-05-10",
            deadlineDay: 120,
            tag: ["Mobile", "App Development"],
            recruitmentParts: [
                { partName: "iOS Developer", numberNeeded: 1 },
                { partName: "Android Developer", numberNeeded: 1 },
            ],
            region: "대구",
        },
        {
            id: "9",
            shortDescription: "데이터 사이언티스트를 모집합니다.",
            teamName: "데이터 분석팀",
            collectPart: ["Data Scientist"],
            deadline: "2024-03-25",
            deadlineDay: 75,
            tag: ["Data", "Science"],
            recruitmentParts: [
                { partName: "Data Scientist", numberNeeded: 2 },
            ],
            region: "인천",
        },
        {
            id: "10",
            shortDescription: "UI/UX 디자이너를 모집합니다.",
            teamName: "디자인 팀",
            collectPart: ["UI/UX Designer"],
            deadline: "2024-04-15",
            deadlineDay: 90,
            tag: ["Design", "UI/UX"],
            recruitmentParts: [
                { partName: "UI/UX Designer", numberNeeded: 1 },
            ],
            region: "광주",
        },
        {
            id: "11",
            shortDescription: "클라우드 엔지니어를 모집합니다.",
            teamName: "클라우드 인프라 팀",
            collectPart: ["Cloud Engineer"],
            deadline: "2024-06-01",
            deadlineDay: 150,
            tag: ["Cloud", "Infrastructure"],
            recruitmentParts: [
                { partName: "Cloud Engineer", numberNeeded: 2 },
            ],
            region: "대전",
        },
        {
            id: "12",
            shortDescription: "보안 전문가를 모집합니다.",
            teamName: "보안 팀",
            collectPart: ["Security Specialist"],
            deadline: "2024-07-20",
            deadlineDay: 200,
            tag: ["Security", "Cybersecurity"],
            recruitmentParts: [
                { partName: "Security Specialist", numberNeeded: 1 },
            ],
            region: "울산",
        },
        {
            id: "13",
            shortDescription: "게임 개발자를 모집합니다.",
            teamName: "게임 개발팀",
            collectPart: ["Game Developer"],
            deadline: "2024-08-15",
            deadlineDay: 220,
            tag: ["Game Development", "Entertainment"],
            recruitmentParts: [
                { partName: "Game Developer", numberNeeded: 3 },
            ],
            region: "경기도",
        },
    ];

    const mockParticipatingTeams: { selected: TeamCardInfo[]; notSelected: TeamCardInfo[] } = {
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
                region: "서울",
            },
            {
                id: "14",
                shortDescription: "데브옵스 엔지니어를 모집합니다.",
                teamName: "DevOps 팀",
                collectPart: ["DevOps Engineer"],
                deadline: "2024-09-05",
                deadlineDay: 300,
                tag: ["DevOps", "Infrastructure"],
                recruitmentParts: [
                    { partName: "DevOps Engineer", numberNeeded: 2 },
                ],
                region: "경상북도",
            },
            {
                id: "15",
                shortDescription: "프로젝트 매니저를 모집합니다.",
                teamName: "프로젝트 관리팀",
                collectPart: ["Project Manager"],
                deadline: "2024-10-20",
                deadlineDay: 350,
                tag: ["Management", "Project"],
                recruitmentParts: [
                    { partName: "Project Manager", numberNeeded: 1 },
                ],
                region: "전라남도",
            },
            {
                id: "16",
                shortDescription: "QA 엔지니어를 모집합니다.",
                teamName: "품질 보증팀",
                collectPart: ["QA Engineer"],
                deadline: "2024-11-30",
                deadlineDay: 400,
                tag: ["QA", "Testing"],
                recruitmentParts: [
                    { partName: "QA Engineer", numberNeeded: 2 },
                ],
                region: "충청남도",
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
                region: "대구",
            },
            {
                id: "17",
                shortDescription: "소프트웨어 엔지니어를 모집합니다.",
                teamName: "소프트웨어 개발팀",
                collectPart: ["Software Engineer"],
                deadline: "2024-05-25",
                deadlineDay: 100,
                tag: ["Software", "Development"],
                recruitmentParts: [
                    { partName: "Software Engineer", numberNeeded: 3 },
                ],
                region: "충청북도",
            },
            {
                id: "18",
                shortDescription: "마케팅 전문가를 모집합니다.",
                teamName: "마케팅 팀",
                collectPart: ["Marketing Specialist"],
                deadline: "2024-06-15",
                deadlineDay: 125,
                tag: ["Marketing", "Sales"],
                recruitmentParts: [
                    { partName: "Marketing Specialist", numberNeeded: 1 },
                ],
                region: "전라북도",
            },
            {
                id: "19",
                shortDescription: "시스템 관리자을 모집합니다.",
                teamName: "시스템 관리팀",
                collectPart: ["System Administrator"],
                deadline: "2024-07-10",
                deadlineDay: 160,
                tag: ["System", "Administration"],
                recruitmentParts: [
                    { partName: "System Administrator", numberNeeded: 2 },
                ],
                region: "경상남도",
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
        filterTeams();
    };

    const handleFilterChange = (
        field: string,
        value: string | string[]
    ) => {
        if (field === "field") {
            setSelectedField(value as string);
        } else if (field === "stack") {
            setSelectedStack(value as string[]);
        } else if (field === "region") {
            setSelectedRegion(value as string);
        } else if (field === "sort") {
            setSelectedSort(value as string);
        }
        // 필터 상태가 변경될 때마다 필터링 함수 호출
        // Debounce를 추가하여 성능 최적화 가능
    };

    useEffect(() => {
        filterTeams();
    }, [searchQuery, selectedField, selectedStack, selectedRegion, selectedSort]);

    const filterTeams = () => {
        // 검색어, 분야, 스택, 지역을 기반으로 필터링
        const query = searchQuery.toLowerCase();

        const filteredTeams = teamData.filter((team) => {
            const matchesSearch =
                team.teamName.toLowerCase().includes(query) ||
                team.shortDescription.toLowerCase().includes(query);
            const matchesField =
                selectedField === 'All' || team.tag.includes(selectedField);
            const matchesStack =
                selectedStack.length === 0 ||
                team.recruitmentParts.some(part => selectedStack.includes(part.partName));
            const matchesRegion =
                selectedRegion === 'All' || team.region === selectedRegion;

            return matchesSearch && matchesField && matchesStack && matchesRegion;
        });

        const filteredSelected = selectedTeams.filter((team) => {
            const matchesSearch =
                team.teamName.toLowerCase().includes(query) ||
                team.shortDescription.toLowerCase().includes(query);
            const matchesField =
                selectedField === 'All' || team.tag.includes(selectedField);
            const matchesStack =
                selectedStack.length === 0 ||
                team.recruitmentParts.some(part => selectedStack.includes(part.partName));
            const matchesRegion =
                selectedRegion === 'All' || team.region === selectedRegion;

            return matchesSearch && matchesField && matchesStack && matchesRegion;
        });

        const filteredNotSelected = notSelectedTeams.filter((team) => {
            const matchesSearch =
                team.teamName.toLowerCase().includes(query) ||
                team.shortDescription.toLowerCase().includes(query);
            const matchesField =
                selectedField === 'All' || team.tag.includes(selectedField);
            const matchesStack =
                selectedStack.length === 0 ||
                team.recruitmentParts.some(part => selectedStack.includes(part.partName));
            const matchesRegion =
                selectedRegion === 'All' || team.region === selectedRegion;

            return matchesSearch && matchesField && matchesStack && matchesRegion;
        });

        // 정렬 적용
        const sortFunction = (a: TeamCardInfo, b: TeamCardInfo) => {
            if (selectedSort === '마감순') {
                return a.deadlineDay - b.deadlineDay; // 마감일 순
            } else if (selectedSort === '최신순') {
                return new Date(b.deadline).getTime() - new Date(a.deadline).getTime(); // 최신순
            } else if (selectedSort === '추천순') {
                // 예시: 추천순 정렬 로직 (임의로 deadlineDay 기준)
                return a.deadlineDay - b.deadlineDay;
            }
            return 0;
        };

        setFilteredTeamData(filteredTeams.sort(sortFunction));
        setFilteredSelectedTeams(filteredSelected.sort(sortFunction));
        setFilteredNotSelectedTeams(filteredNotSelected.sort(sortFunction));
    };

    return (
        <div className={styles.container}>

            {/* 탭 메뉴 및 필터링 콤보박스 */}
            <div className={styles.topBar}>
                <div className={styles.tabMenu}>
                    <button
                        onClick={() => handleTabClick('team')}
                        className={`${styles.tabButton} ${tab === 'team' ? styles.active : ''}`}
                        aria-selected={tab === 'team'}
                    >
                        팀 찾기
                    </button>
                    <button
                        onClick={() => handleTabClick('applied')}
                        className={`${styles.tabButton} ${tab === 'applied' ? styles.active : ''}`}
                        aria-selected={tab === 'applied'}
                    >
                        내가 신청한 팀
                    </button>
                </div>
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

            <Category onFilterChange={handleFilterChange} />

            {/* 리스트 섹션 */}
            <section className={styles.listSection}>
                {tab === 'team' ? (
                    <>
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

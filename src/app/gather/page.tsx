// src/app/gather/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './GatherPage.module.css';
import TeamCard from '../../components/TeamCard';
import { TeamCardInfo } from '../../types/TeamCardInfo';

const mockTeamCardData: TeamCardInfo[] = [
    {
        id: '1',
        teamName: '프로젝트 A',
        shortDescription: '백엔드 개발자를 모집합니다.',
        deadline: '2023-10-31',
        recruitmentParts: [
            { partName: '백엔드', numberNeeded: 2 },
            { partName: '프론트엔드', numberNeeded: 1 },
        ],
    },
    {
        id: '2',
        teamName: '프로젝트 B',
        shortDescription: '프론트엔드 개발자를 모집합니다.',
        deadline: '2023-11-15',
        recruitmentParts: [{ partName: '프론트엔드', numberNeeded: 2 }],
    },
    // 추가 팀 카드 데이터
];

const mockAppliedTeamsData: TeamCardInfo[] = [
    // 내가 지원한 팀 데이터
];

const GatherPage = () => {
    const [tab, setTab] = useState<'team' | 'applied'>('team');

    const handleTabClick = (selectedTab: 'team' | 'applied') => {
        setTab(selectedTab);
    };

    return (
        <div className={styles.container}>
            {/* Tab Menu */}
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
                    내가 지원한 팀 보기
                </button>
            </div>

            {/* List Section */}
            <section className={styles.listSection}>
                {tab === 'team' ? (
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
                    <>
                        {mockAppliedTeamsData.length > 0 ? (
                            <div className={styles.teamCardList}>
                                {mockAppliedTeamsData.map((team) => (
                                    <TeamCard key={team.id} teamCardInfo={team} />
                                ))}
                            </div>
                        ) : (
                            <p className={styles.noData}>지원한 팀이 없습니다.</p>
                        )}
                    </>
                )}
            </section>
        </div>
    );
};

export default GatherPage;

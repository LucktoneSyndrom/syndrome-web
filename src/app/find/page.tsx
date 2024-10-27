"use client";

import React from 'react';
import styles from './FindPage.module.css';
import { useRouter } from 'next/navigation';
import TeamItem from '../../components/TeamItem'; // 새로운 컴포넌트
import { TeamCardInfo } from '../../types/TeamCardInfo';

const mockMyTeamsData: TeamCardInfo[] = [
    {
        id: '1',
        teamName: '내가 만든 프로젝트 1',
        shortDescription: '프로젝트 설명 1',
        deadline: '2023-12-31',
        recruitmentParts: [{ partName: '백엔드', numberNeeded: 1 }],
    },
    // 추가 데이터
];

const FindPage = () => {
    const router = useRouter();

    const handleCreateTeam = () => {
        router.push('/find/create-team');
    };

    return (
        <div className={styles.container}>
            <button className={styles.createTeamButton} onClick={handleCreateTeam}>
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
        </div>
    );
};

export default FindPage;

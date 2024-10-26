// src/app/find/page.tsx
'use client';

import React from 'react';
import styles from './FindPage.module.css';
import { useRouter } from 'next/navigation';
import TeamCard from '../../components/TeamCard';
import { TeamCardInfo } from '../../types/TeamCardInfo';

const mockMyTeamsData: TeamCardInfo[] = [
    // 내가 만든 팀 데이터
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
                            <TeamCard key={team.id} teamCardInfo={team} />
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

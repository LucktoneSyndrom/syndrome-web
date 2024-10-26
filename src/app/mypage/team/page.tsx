
// src/app/mypage/team/page.tsx
import React from 'react';
import TeamCard from '../../../components/TeamCard';
import styles from './MyTeamPage.module.css';

const MyTeamPage = () => {
    const myTeams = [
        {
            teamName: 'Awesome Project',
            projectIntro: '혁신적인 아이디어를 가진 프로젝트 팀입니다.',
            requiredSkills: ['Python', 'Django'],
        },
        // 추가 팀 정보
    ];

    return (
        <div className={styles.myTeamPage}>
            <h1>내 팀 정보</h1>
            <div className={styles.teamList}>
                {myTeams.map((team, index) => (
                    <TeamCard key={index} teamName={team.teamName} projectIntro={team.projectIntro} requiredSkills={team.requiredSkills} />
                ))}
            </div>
            <button>새 팀 만들기</button>
        </div>
    );
};

export default MyTeamPage;

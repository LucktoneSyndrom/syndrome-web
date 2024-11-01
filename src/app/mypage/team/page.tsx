// src/app/mypage/team/page.tsx
import React from 'react';
import TeamCard from '../../../components/TeamCard';
import styles from './MyTeamPage.module.css';

const MyTeamPage = () => {
    const myTeams = [
        {
            id: 'team-001',
            teamName: '소프트웨어 개발팀',
            shortDescription: '혁신적인 소프트웨어 솔루션을 개발하는 팀입니다.',
            deadline: '2024-12-31T23:59:59Z',
            deadlineDay: 30,
            collectPart: '프론트엔드 개발자, 백엔드 개발자',
            person: 5,
            tag: ['개발', '팀워크', '혁신'], // 배열 형태로 변경
            recruitmentParts: [
                { partName: '프론트엔드 개발자', numberNeeded: 2 },
                { partName: '백엔드 개발자', numberNeeded: 2 },
            ],
        },
        {
            id: 'team-002',
            teamName: '데이터 분석팀',
            shortDescription: '데이터를 분석하여 인사이트를 도출하는 팀입니다.',
            deadline: '2024-11-30T23:59:59Z',
            deadlineDay: 30,
            collectPart: '데이터 분석가, 머신러닝 엔지니어',
            person: 4,
            tag: ['데이터', '분석', '통찰'], // 배열 형태로 변경
            recruitmentParts: [
                { partName: '머신러닝 엔지니어', numberNeeded: 1 },
                { partName: '데이터 엔지니어', numberNeeded: 1 },
            ],
        },
        {
            id: 'team-003',
            teamName: '마케팅 전략팀',
            shortDescription: '효과적인 마케팅 전략을 수립하는 팀입니다.',
            deadline: '2024-12-15T23:59:59Z',
            deadlineDay: 15,
            collectPart: '마케팅 전문가, 콘텐츠 제작자',
            person: 3,
            tag: ['마케팅', '전략', '콘텐츠'], // 배열 형태로 변경
            recruitmentParts: [
                { partName: '마케팅 전문가', numberNeeded: 1 },
                { partName: '콘텐츠 제작자', numberNeeded: 2 },
            ],
        },
    ];
    
    

    return (
        <div className={styles.myTeamPage}>
            <h1>내 팀 정보</h1>
            <div className={styles.teamList}>
                {myTeams.map((team) => (
                    <TeamCard key={team.id} teamCardInfo={team} isSelected={false} />
                ))}
            </div>
            <button className={styles.createTeamButton}>새 팀 만들기</button>
        </div>
    );
};

export default MyTeamPage;

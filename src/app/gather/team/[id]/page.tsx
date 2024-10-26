// src/app/gather/team/[id]/page.tsx

import React from 'react';
import styles from './TeamDetail.module.css';
import { TeamDetailInfo } from '../../../../types/TeamDetailInfo';

interface TeamDetailPageProps {
    params: { id: string };
}

const mockTeamDetailData: TeamDetailInfo = {
    id: '1',
    teamName: '프로젝트 A',
    teamDescription: '멋진 프로젝트를 함께할 팀원들을 모집합니다.',
    projectDescription: '이 프로젝트는 ...',
    deadline: '2023-10-31',
    recruitmentParts: [
        { partName: '백엔드', numberNeeded: 2 },
        { partName: '프론트엔드', numberNeeded: 1 },
    ],
    techStacks: ['React', 'Node.js', 'TypeScript'],
    currentMembers: [
        {
            id: '1',
            name: '홍길동',
            partName: '팀장 / 백엔드',
            profileImageUrl: '',
        },
        // 추가 멤버 정보
    ],
    leaderInfo: {
        id: '1',
        name: '홍길동',
        profileImageUrl: '',
        introduction: '팀장 소개 문구',
    },
};

const TeamDetailPage: React.FC<TeamDetailPageProps> = ({ params }) => {
    // 실제로는 params.id를 사용하여 서버에서 데이터를 가져옵니다.
    const teamDetailInfo = mockTeamDetailData;

    return (
        <div className={styles.container}>
            <h1 className={styles.teamName}>{teamDetailInfo.teamName}</h1>
            <p className={styles.teamDescription}>{teamDetailInfo.teamDescription}</p>
            <p className={styles.projectDescription}>{teamDetailInfo.projectDescription}</p>
            <p className={styles.deadline}>마감일: {teamDetailInfo.deadline}</p>

            <div className={styles.recruitmentParts}>
                <h2>모집 파트별 인원</h2>
                {teamDetailInfo.recruitmentParts.map((part, index) => (
                    <p className={styles.recruitmentPart} key={index}>
                        {part.partName}: {part.numberNeeded}명
                    </p>
                ))}
            </div>

            <div className={styles.techStacks}>
                <h2>사용 예정 스택</h2>
                {teamDetailInfo.techStacks.map((stack, index) => (
                    <span className={styles.techStackItem} key={index}>
            {stack}
          </span>
                ))}
            </div>

            <div className={styles.currentMembers}>
                <h2>현재 팀원 소개</h2>
                {teamDetailInfo.currentMembers.map((member) => (
                    <div className={styles.memberItem} key={member.id}>
                        <div className={styles.memberImage}></div>
                        <div className={styles.memberInfo}>
                            {member.name} - {member.partName}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.leaderInfo}>
                <h2>팀장 정보</h2>
                <div className={styles.memberItem}>
                    <div className={styles.memberImage}></div>
                    <div className={styles.memberInfo}>
                        {teamDetailInfo.leaderInfo.name}
                        <p>{teamDetailInfo.leaderInfo.introduction}</p>
                    </div>
                </div>
            </div>

            <button className={styles.joinButton}>지원하기</button>
        </div>
    );
};

export default TeamDetailPage;

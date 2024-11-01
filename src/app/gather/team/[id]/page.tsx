// src/app/gather/team/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import styles from './TeamDetail.module.css';
import { useParams } from 'next/navigation';
import { TeamDetailInfo } from '../../../../types/TeamDetailInfo';

import { useRouter } from 'next/navigation';

const TeamDetailPage: React.FC = () => {
    const params = useParams();
    const teamId = params.id as string;

    const router = useRouter();
    const [teamDetailInfo, setTeamDetailInfo] = useState<TeamDetailInfo | null>(null);

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    useEffect(() => {
        // 더미 데이터 사용
        const mockTeamDetailData: TeamDetailInfo = {
            id: teamId,
            teamName: 'Innovative AI Solutions',
            teamDescription: '최첨단 AI 솔루션을 개발할 열정적인 팀원들을 모집합니다.',
            projectDescription: '이 프로젝트는 인공지능 기반의 예측 모델을 개발하여 다양한 산업에 응용할 수 있는 솔루션을 제공하는 것이 목표입니다. 주로 머신러닝, 딥러닝을 활용한 데이터 분석과 예측 모델 개발이 주된 작업입니다.',
            deadline: '2023-12-31',
            recruitmentParts: [
                { partName: '백엔드', numberNeeded: 2 },
                { partName: '프론트엔드', numberNeeded: 1 },
                { partName: '데이터 사이언티스트', numberNeeded: 1 },
                { partName: 'AI 엔지니어', numberNeeded: 2 },
            ],
            techStacks: ['React', 'Node.js', 'TypeScript', 'Python', 'TensorFlow', 'Keras', 'SQL', 'Docker'],
            currentMembers: [
                {
                    id: '1',
                    name: '홍길동',
                    partName: '팀장 / 백엔드',
                    profileImageUrl: '',
                },
                {
                    id: '2',
                    name: '이수민',
                    partName: '프론트엔드',
                    profileImageUrl: '',
                },
                {
                    id: '3',
                    name: '박재영',
                    partName: '데이터 사이언티스트',
                    profileImageUrl: '',
                },
                {
                    id: '4',
                    name: '김민주',
                    partName: 'AI 엔지니어',
                    profileImageUrl: '',
                },
            ],
            leaderInfo: {
                id: '1',
                name: '홍길동',
                profileImageUrl: '',
                introduction: '10년 경력의 백엔드 개발자입니다. 주로 대규모 트래픽 처리와 시스템 최적화에 관심이 많습니다.',
            },
        };

        setTeamDetailInfo(mockTeamDetailData);
    }, [teamId]);

    if (!teamDetailInfo) {
        return <p>로딩 중...</p>;
    }
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

            <div className={styles.buttonContainer}>
                <button className={styles.joinButton}>지원하기</button>
                <button className={styles.inquiryButton}
                        onClick={() => handleNavigation('/chat/detail/1')}
                >문의하기</button>
            </div>
        </div>
    );
};

export default TeamDetailPage;

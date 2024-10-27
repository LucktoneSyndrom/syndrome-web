// src/app/find/my-team/[id]/page.tsx
'use client';

import React from 'react';
import styles from './MyTeamDetail.module.css';
import { useRouter } from 'next/navigation';

const MyTeamDetailPage = () => {
    const params = useParams();
    const teamId = params.id as string;
    const router = useRouter();

    const [teamDetailInfo, setTeamDetailInfo] = useState<TeamDetailInfo | null>(null);

    useEffect(() => {
        // 더미 데이터 사용
        const mockTeamDetailData: TeamDetailInfo = {
            id: teamId,
            teamName: '내가 만든 프로젝트 상세 정보',
            teamDescription: '팀 설명...',
            projectDescription: '프로젝트 설명...',
            deadline: '2023-12-31',
            recruitmentParts: [
                { partName: '백엔드', numberNeeded: 1 },
                // 추가 파트
            ],
            techStacks: ['React', 'Node.js'],
            currentMembers: [
                {
                    id: '1',
                    name: '나',
                    partName: '팀장 / 백엔드',
                    profileImageUrl: '',
                },
                // 추가 멤버
            ],
            leaderInfo: {
                id: '1',
                name: '나',
                profileImageUrl: '',
                introduction: '팀장 소개 문구',
            },
        };

        setTeamDetailInfo(mockTeamDetailData);
    }, [teamId]);

    const handleEditClick = () => {
        router.push(`/find/my-team/${teamId}/edit`);
    };

    if (!teamDetailInfo) {
        return <p>로딩 중...</p>;
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.teamName}>내 팀 상세 페이지</h1>
            {/* 팀 상세 정보 표시 */}

            <div className={styles.buttonContainer}>
                {/* 수정하기 버튼 */}
                <button className={styles.editButtonSmall} onClick={handleEditClick}>
                    수정하기
                </button>
            </div>
        </div>
    );
};

export default MyTeamDetailPage;

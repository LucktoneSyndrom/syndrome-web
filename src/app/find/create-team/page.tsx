// src/app/find/create-team/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './CreateTeamPage.module.css';
import { useRouter } from 'next/navigation';

const CreateTeamPage = () => {
    const router = useRouter();

    const [teamName, setTeamName] = useState('');
    const [teamDescription, setTeamDescription] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 팀 생성 로직 처리
        // 생성 후 팀 상세 페이지로 이동
        router.push('/find/my-team/1'); // 예시로 팀 ID가 1인 경우
    };

    return (
        <div className={styles.container}>
            <h1>팀 만들기</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="teamName">팀 이름</label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="teamDescription">팀 설명</label>
                    <textarea
                        id="teamDescription"
                        value={teamDescription}
                        onChange={(e) => setTeamDescription(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="projectDescription">프로젝트 설명</label>
                    <textarea
                        id="projectDescription"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        required
                    />
                </div>
                {/* 추가 입력 필드들 */}
                <button type="submit" className={styles.submitButton}>
                    팀 생성하기
                </button>
            </form>
        </div>
    );
};

export default CreateTeamPage;

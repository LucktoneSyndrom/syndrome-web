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
    const [deadline, setDeadline] = useState('');
    const [recruitmentParts, setRecruitmentParts] = useState([{ partName: '', numberNeeded: 1 }]);
    const [techStacks, setTechStacks] = useState(['']);
    const [location, setLocation] = useState('');
    const [noDeadline, setNoDeadline] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 팀 생성 로직 처리
        // 생성 후 팀 상세 페이지로 이동
        router.push('/find/my-team/1'); // 예시로 팀 ID가 1인 경우
    };

    const handleAddRecruitmentPart = () => {
        setRecruitmentParts([...recruitmentParts, { partName: '', numberNeeded: 1 }]);
    };

    const handleRecruitmentPartChange = (index: number, field: string, value: string) => {
        const updatedParts = recruitmentParts.map((part, i) => {
            if (i === index) {
                return { ...part, [field]: field === 'numberNeeded' ? parseInt(value) : value };
            }
            return part;
        });
        setRecruitmentParts(updatedParts);
    };

    const handleAddTechStack = () => {
        setTechStacks([...techStacks, '']);
    };

    const handleTechStackChange = (index: number, value: string) => {
        const updatedStacks = techStacks.map((stack, i) => (i === index ? value : stack));
        setTechStacks(updatedStacks);
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
                <div className={styles.formGroup}>
                    <label htmlFor="deadline">모집 마감일</label>
                    {!noDeadline && (
                        <input
                            type="date"
                            id="deadline"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            required={!noDeadline}
                        />
                    )}
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id="noDeadline"
                            checked={noDeadline}
                            onChange={(e) => setNoDeadline(e.target.checked)}
                        />
                        <label htmlFor="noDeadline">마감일 없음</label>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="location">활동 지역</label>
                    <select
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    >
                        <option value="">지역 선택</option>
                        <option value="서울">서울</option>
                        <option value="부산">부산</option>
                        <option value="대구">대구</option>
                        <option value="광주">광주</option>
                        <option value="대전">대전</option>
                        <option value="온라인">온라인</option>
                        {/* 추가 지역 */}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label>모집 파트별 인원</label>
                    {recruitmentParts.map((part, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="파트 이름"
                                value={part.partName}
                                onChange={(e) =>
                                    handleRecruitmentPartChange(index, 'partName', e.target.value)
                                }
                                required
                            />
                            <input
                                type="number"
                                placeholder="필요 인원"
                                value={part.numberNeeded}
                                onChange={(e) =>
                                    handleRecruitmentPartChange(index, 'numberNeeded', e.target.value)
                                }
                                required
                                min="1"
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddRecruitmentPart}>
                        파트 추가
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <label>사용 예정 스택</label>
                    {techStacks.map((stack, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                placeholder="기술 스택"
                                value={stack}
                                onChange={(e) => handleTechStackChange(index, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddTechStack}>
                        스택 추가
                    </button>
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

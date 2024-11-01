// src/app/mypage/profile/page.tsx
'use client';

import React from 'react';
import styles from './ProfilePage.module.css';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const router = useRouter();

    const profile = {
        name: '홍길동',
        school: '국립인천대학교',
        major: '컴퓨터공학부',
        skills: '프론트',
        intro: '안녕하세요! 저는 국립인천대학교 컴퓨터공학부 학생으로, 프론트엔드 개발에 열정을 가지고 있습니다. 사용자 경험과 인터페이스에 대한 깊은 관심을 바탕으로, 효과적이고 직관적인 웹 애플리케이션 개발을 목표로 하고 있습니다.',
    };

    const handleEdit = () => {
        router.push('/mypage/profile/edit');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>내 이력서</h1>
            <div className={styles.profileSection}>
                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>이름</label>
                        <div className={styles.value}>{profile.name}</div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>학교</label>
                        <div className={styles.value}>{profile.school}</div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>전공</label>
                        <div className={styles.value}>{profile.major}</div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>기술 스택</label>
                        <div className={styles.value}>{profile.skills}</div>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>자기소개</label>
                        <div className={styles.value}>{profile.intro}</div>
                    </div>
                </div>
                <img
                    src="https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084580270100.jpg"
                    alt="프로필 이미지"
                    className={styles.profileImage}
                />
            </div>
            <button onClick={handleEdit} className={`${styles.saveButton} ${styles.editButton}`}>
                수정하기
            </button>
        </div>
    );
};

export default ProfilePage;

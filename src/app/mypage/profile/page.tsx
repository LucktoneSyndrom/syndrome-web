// src/app/mypage/profile/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: '',
        school: '',
        major: '',
        skills: '',
        intro: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 프로필 정보 저장 로직
        alert('프로필 정보가 저장되었습니다.');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>내 이력서</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        이름
                        <input type="text" name="name" value={profile.name} onChange={handleChange} className={styles.inputField} />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        학교
                        <input type="text" name="school" value={profile.school} onChange={handleChange} className={styles.inputField} />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        전공
                        <input type="text" name="major" value={profile.major} onChange={handleChange} className={styles.inputField} />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        기술 스택
                        <input type="text" name="skills" value={profile.skills} onChange={handleChange} className={styles.inputField} />
                    </label>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>
                        자기소개
                        <textarea name="intro" value={profile.intro} onChange={handleChange} className={styles.textarea}></textarea>
                    </label>
                </div>
                <button type="submit" className={styles.saveButton}>저장하기</button>
            </form>
        </div>
    );
};

export default ProfilePage;

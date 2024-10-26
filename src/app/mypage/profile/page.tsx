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
    };

    return (
        <div className={styles.profilePage}>
            <h1>내 프로필</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    이름:
                    <input type="text" name="name" value={profile.name} onChange={handleChange} />
                </label>
                <label>
                    학교:
                    <input type="text" name="school" value={profile.school} onChange={handleChange} />
                </label>
                <label>
                    전공:
                    <input type="text" name="major" value={profile.major} onChange={handleChange} />
                </label>
                <label>
                    기술 스택:
                    <input type="text" name="skills" value={profile.skills} onChange={handleChange} />
                </label>
                <label>
                    자기소개:
                    <textarea name="intro" value={profile.intro} onChange={handleChange}></textarea>
                </label>
                <button type="submit">저장하기</button>
            </form>
        </div>
    );
};

export default ProfilePage;

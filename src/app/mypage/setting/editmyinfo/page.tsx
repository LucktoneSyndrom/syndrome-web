// src/app/mypage/settings/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './EditMyInfoPage.module.css';

const SettingsPage = () => {
    const router = useRouter();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const handleToggleNotifications = () => {
        setNotificationsEnabled(prev => !prev);
    };

    const handleToggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    const handleEditInfo = () => {
        router.push('/mypage/profile');
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
            <h1 className={styles.header}>내 정보 수정</h1>
            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>아이디</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="textbox"
                        checked={notificationsEnabled}
                        onChange={handleToggleNotifications}
                        className={styles.infoInput}
                    />
                </label>
            </div>

            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>비밀번호</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="textbox"
                        checked={darkMode}
                        onChange={handleToggleDarkMode}
                        className={styles.infoInput}
                    />
                </label>
            </div>

            <div className={styles.settingBox} onClick={handleEditInfo}>
                <span style={{color:'red', fontWeight: 'bold'}}>회원탈퇴</span>
            </div>
        </div>
    );
};

export default SettingsPage;

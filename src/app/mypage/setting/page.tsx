// src/app/mypage/settings/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SettingsPage.module.css';

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
        router.push('/mypage/setting/editmyinfo');
    };

    const handleNotice = () => {
    };

    const handleLogout = () => {
    };

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
            <h1 className={styles.header}>설정</h1>

            {/* 내 정보 수정 박스 */}
            <div className={styles.settingBox} onClick={handleEditInfo}>
                <span className={styles.settingLabel}>내 정보 수정</span>
            </div>

            {/* 알림 설정 박스 */}
            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>알림</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={handleToggleNotifications}
                        className={styles.toggleInput}
                    />
                </label>
            </div>

            {/* 다크 모드 설정 박스 */}
            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>다크 모드</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={handleToggleDarkMode}
                        className={styles.toggleInput}
                    />
                </label>
            </div>

            <div className={styles.settingBox} onClick={handleNotice}>
                <span className={styles.settingLabel}>공지사항</span>
            </div>

            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>버전 정보</span>
                <span className={styles.versionLabel}>24.43.3(244303)</span>
            </div>

            <div className={styles.settingBox} onClick={handleLogout}>
                <span className={styles.settingLabel}>로그아웃</span>
            </div>
        </div>
    );
};

export default SettingsPage;

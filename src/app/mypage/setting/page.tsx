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

    return (
        <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
            <h1 className={styles.header}>설정</h1>

            {/* 내 정보 수정 박스 */}
            <div className={styles.settingBox} onClick={handleEditInfo}>
                <span className={styles.settingLabel}>내 정보 수정</span>
            </div>

            {/* 알림 설정 박스 */}
            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>알림:</span>
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
                <span className={styles.settingLabel}>다크 모드:</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={handleToggleDarkMode}
                        className={styles.toggleInput}
                    />
                </label>
            </div>
        </div>
    );
};

export default SettingsPage;

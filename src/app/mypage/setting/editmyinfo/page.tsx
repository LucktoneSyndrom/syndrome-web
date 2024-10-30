'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './EditMyInfoPage.module.css';

const SettingsPage = () => {
    const router = useRouter();
    const [profile, setProfile] = useState({
        id: 'user123',
        pw: 'password!@#',
    });
    const [tempProfile, setTempProfile] = useState(profile);
    const [showModal, setShowModal] = useState(false); // 모달 표시 상태 추가

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTempProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleModifyProfile = () => {
        setProfile(tempProfile);
        setShowModal(true); // 수정 완료 후 모달 표시
        // 이후 필요한 추가 작업 (예: 서버에 수정 내용 전달) 가능
    };

    const handleRemoveUser = () => {
        router.push(`/mypage/setting/editmyinfo/removeuser`);
    };

    const closeModal = () => {
        setShowModal(false); // 모달 닫기
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>내 정보 수정</h1>

            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>아이디</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="text"
                        className={styles.infoInput}
                        name="id"
                        value={tempProfile.id}
                        onChange={handleProfileChange}
                    />
                </label>
            </div>

            <div className={styles.settingBox}>
                <span className={styles.settingLabel}>비밀번호</span>
                <label className={styles.toggleLabel}>
                    <input
                        type="password"
                        className={styles.infoInput}
                        name="pw"
                        value={tempProfile.pw}
                        onChange={handleProfileChange}
                    />
                </label>
            </div>

            <div className={styles.submitBox}>
                <button className={styles.modifyButton} onClick={handleModifyProfile}>
                    수정하기
                </button>
            </div>

            <div className={styles.settingBox} onClick={handleRemoveUser}>
                <span style={{ color: 'red', fontWeight: 'bold' }}>회원탈퇴</span>
            </div>

            {/* 모달 */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <h2>수정이 완료되었습니다</h2>
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;

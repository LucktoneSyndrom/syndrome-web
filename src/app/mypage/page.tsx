// src/app/mypage/page.tsx
import React from 'react';
import styles from './MyPage.module.css';

const MyPage = () => {
    return (
        <div className={styles.container}>
            {/* 프로필 헤더 */}
            <div className={styles.profileHeader}>
                <div className={styles.profileImage}></div>
                <div className={styles.profileInfo}>
                    <h2>홍길동</h2>
                    <p>프론트엔드 개발자</p>
                </div>
            </div>

            {/* 메뉴 리스트 */}
            <div className={styles.menuList}>
                <div className={styles.menuItem}>내 이력서</div>
                <div className={styles.menuItem}>내 팀 정보</div>
                <div className={styles.menuItem}>설정</div>
            </div>
        </div>
    );
};

export default MyPage;

// src/app/mypage/page.tsx
'use client';

import React from 'react';
import styles from './MyPage.module.css';
import { useRouter } from 'next/navigation';


const MyPage = () => {
    const router = useRouter();

    const handleMenuItemClick = (menuId: string) => {
        if (menuId === 'profile') {
            router.push(`/mypage/profile`);
        }else if (menuId === 'team') {
            router.push(`/mypage/team`);
        }else if (menuId === 'setting') {
            router.push(`/mypage/setting`);
        }
    };
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
                <div className={styles.menuItem} onClick={() => handleMenuItemClick('profile')}>내 이력서</div>
                <div className={styles.menuItem} onClick={() => handleMenuItemClick('team')}>내 팀 정보</div>
                <div className={styles.menuItem} onClick={() => handleMenuItemClick('setting')}>설정</div>
            </div>
        </div>
    );
};

export default MyPage;

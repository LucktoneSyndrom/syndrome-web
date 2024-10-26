// src/components/BottomTabNav.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomTabNav.module.css';

const BottomTabNav = () => {
    const pathname = usePathname();

    const tabs = [
        { name: '홈', href: '/', icon: '🏠' },
        { name: '모아요', href: '/gather', icon: '🔍' },
        { name: '프로필', href: '/mypage', icon: '👤' },
    ];

    return (
        <nav className={styles.bottomTabNav}>
            {tabs.map((tab) => (
                <Link href={tab.href} key={tab.name} className={styles.tabItem}>
                    <div className={`${styles.tabItem} ${pathname === tab.href ? styles.tabItemActive : ''}`}>
                        <div className={styles.tabIcon}>{tab.icon}</div>
                        <div className={styles.tabLabel}>{tab.name}</div>
                    </div>
                </Link>
            ))}
        </nav>
    );
};

export default BottomTabNav;

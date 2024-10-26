// src/components/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Team Matching Platform</Link>
            </div>
            <nav>
                <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ''}`}>
                    <li><Link href="/gather">모아요</Link></li>
                    <li><Link href="/mypage">마이페이지</Link></li>
                    <li><Link href="/login">로그인</Link></li>
                </ul>
            </nav>
            <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </header>
    );
};

export default Header;

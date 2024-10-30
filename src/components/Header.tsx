// src/components/Header.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import { FaArrowLeft } from 'react-icons/fa';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const router = useRouter();

    const handleBackClick = () => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <header className={styles.header}>
            <button className={styles.backButton} onClick={handleBackClick}>
                <FaArrowLeft />
            </button>
            <h1 className={styles.pageTitle}>{title}</h1>
        </header>
    );
};

export default Header;

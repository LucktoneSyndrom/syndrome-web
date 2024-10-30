'use client';

import React from 'react';
import styles from './RemoveUserPage.module.css';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();

    const handleCancelButton= ()=>{
        window.history.back();

    }


    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>회원 탈퇴</h1>
                <p>지금 떠나면 너무 아쉬워요!</p>
                <p>정말 탈퇴하시겠어요?</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonRemove}>탈퇴하기</button>
                    <button className={styles.button} onClick={handleCancelButton}>취소</button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

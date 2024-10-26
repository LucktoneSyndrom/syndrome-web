// src/app/page.tsx
import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>팀 매칭 플랫폼에 오신 것을 환영합니다!</h1>
                <p>팀을 찾고, 팀원을 모아보세요.</p>
                <button>시작하기</button>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featureCard}>
                    <h2>팀 찾기</h2>
                    <p>원하는 프로젝트 팀을 찾아 참여하세요.</p>
                </div>
                <div className={styles.featureCard}>
                    <h2>팀원 모집</h2>
                    <p>프로젝트에 필요한 팀원을 구해보세요.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

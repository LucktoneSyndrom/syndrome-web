// src/app/mypage/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './MyPage.module.css';
import { useRouter } from 'next/navigation';


const MyPage = () => {
    const router = useRouter();

    const [userName, setUserName] = useState("김지범");
    const [userStack, setUserStack] = useState("야리돌림 전문가");
    const [temperature, setTemperature] = useState(36.5); // 초기 온도

    // 데이터 초기화 함수 추가
    const resetTestData = async () => {
        if (confirm('정말로 모든 데이터를 초기화하시겠습니까?')) {
            try {
                const response = await fetch('/api/admin/reset-data', {
                    method: 'POST',
                });

                const result = await response.json();

                if (response.ok) {
                    alert('데이터가 초기화되었습니다.');
                } else {
                    alert('오류 발생: ' + result.message);
                }
            } catch (error) {
                console.error('데이터 초기화 중 오류 발생:', error);
                alert('데이터 초기화 중 오류 발생');
            }
        }
    };

    const handleMenuItemClick = (menuId: string) => {
        if (menuId === 'profile') {
            router.push(`/mypage/profile`);
        } else if (menuId === 'team') {
            router.push(`/mypage/team`);
        } else if (menuId === 'setting') {
            router.push(`/mypage/setting`);
        }
    };

    const calculateGaugeWidth = (temp: number) => {
        const minTemperature = 30.0;
        const maxTemperature = 45;
        const percentage = ((temp - minTemperature) / (maxTemperature - minTemperature)) * 100;
        return `${Math.min(Math.max(percentage, 0), 100)}%`; // 최소 0%, 최대 100%로 제한
    };

    const increaseTemperature = () => {
        setTemperature((prev) => Math.min(prev + 0.5, 45)); // 최대 45°C
    };

    const decreaseTemperature = () => {
        setTemperature((prev) => Math.max(prev - 0.5, 30)); // 최소 30°C
    };

    // 온도에 따른 이모티콘 설정
    const getEmoji = (temp: number) => {
        if (temp < 32) {
            return '🥶'; // 매우 낮은 온도
        } else if (temp < 34) {
            return '😐'; // 보통
        } else if (temp < 36) {
            return '😊'; // 따뜻한
        } else if (temp < 38) {
            return '😄'; // 따뜻한
        } else {
            return '🔥'; // 높은 온도
        }
    };

    return (
        <div className={styles.container}>
            {/* 프로필 헤더 */}
            <div className={styles.profileHeader}>
                <div className={styles.profileImage}></div>
                <div className={styles.profileInfo}>
                    <h2>{userName}</h2>
                    <p>{userStack}</p>
                </div>
            </div>

            {/* 온도 표시 영역 */}
            <div className={styles.temperatureContainer}>
                <div className={styles.temperatureHeader}>
                    <span className={styles.title}>매너온도</span>
                    <div className={styles.currentTemperature}>
                        <span className={styles.temperature}>{temperature.toFixed(1)}°C</span>
                        <span className={styles.emoji}>{getEmoji(temperature)}</span>
                    </div>
                </div>

                <div className={styles.temperatureBarContainer}>
                    <div
                        className={styles.temperatureBar}
                        style={{ width: calculateGaugeWidth(temperature) }}
                    ></div>
                </div>
            </div>

            {/* 온도 조정 버튼 (테스트용) */}
            <div className={styles.temperatureControls}>
                <button onClick={increaseTemperature}>온도 상승</button>
                <button onClick={decreaseTemperature}>온도 하락</button>
            </div>

            {/* 메뉴 리스트 */}
            <div className={styles.menuList}>
                <div className={styles.menuItem} onClick={() => handleMenuItemClick('profile')}>내 이력서</div>
                <div className={styles.menuItem} onClick={() => handleMenuItemClick('team')}>내 팀 정보</div>
                <div className={styles.menuItem} onClick={() => handleMenuItemClick('setting')}>설정</div>
                {/* 개발용 데이터 초기화 버튼 추가 */}
                <div className={styles.menuItem} onClick={resetTestData} style={{ color: 'red' }}>
                    개발용 데이터 초기화
                </div>
            </div>
        </div>
    );
};

export default MyPage;

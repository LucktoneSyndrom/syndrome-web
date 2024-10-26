// src/app/messages/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './MessagesPage.module.css';

const mockSentMessages = [
    // 내가 문의한 글 데이터
];

const mockReceivedMessages = [
    // 나한테 문의 온 글 데이터
];

const mockRealNameMessages = [
    // 실명 쪽지 데이터
];

const MessagesPage = () => {
    const [tab, setTab] = useState<'sent' | 'received' | 'realname'>('sent');

    const handleTabClick = (selectedTab: 'sent' | 'received' | 'realname') => {
        setTab(selectedTab);
    };

    const renderMessages = () => {
        let messages = [];
        if (tab === 'sent') {
            messages = mockSentMessages;
        } else if (tab === 'received') {
            messages = mockReceivedMessages;
        } else if (tab === 'realname') {
            messages = mockRealNameMessages;
        }

        return messages.length > 0 ? (
            <div className={styles.messageList}>
                {messages.map((message: any) => (
                    <div className={styles.messageItem} key={message.id}>
                        <h3>{message.title}</h3>
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p className={styles.noData}>메시지가 없습니다.</p>
        );
    };

    return (
        <div className={styles.container}>
            {/* Tab Menu */}
            <div className={styles.tabMenu}>
                <button
                    onClick={() => handleTabClick('sent')}
                    className={tab === 'sent' ? styles.active : ''}
                >
                    내가 문의한 글
                </button>
                <button
                    onClick={() => handleTabClick('received')}
                    className={tab === 'received' ? styles.active : ''}
                >
                    나한테 문의 온 글
                </button>
                <button
                    onClick={() => handleTabClick('realname')}
                    className={tab === 'realname' ? styles.active : ''}
                >
                    실명 쪽지
                </button>
            </div>

            {/* Messages List */}
            {renderMessages()}
        </div>
    );
};

export default MessagesPage;

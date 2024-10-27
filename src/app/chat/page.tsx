// src/app/chat/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './ChatPage.module.css';
import { useRouter } from 'next/navigation';

interface ChatItem {
    id: string;
    title: string;
    lastMessage: string;
}

const mockSentMessages: ChatItem[] = [
    // 내가 문의한 글 데이터
];

const mockReceivedMessages: ChatItem[] = [
    // 나한테 문의 온 글 데이터
];

const mockTeamChats: ChatItem[] = [
    {
        id: '1',
        title: '프로젝트 A 팀 채팅',
        lastMessage: '팀장: 내일 회의 있습니다.',
    },
    // 추가 팀 채팅 데이터
];

const ChatPage = () => {
    const [tab, setTab] = useState<'sent' | 'received' | 'teamChat'>('sent');
    const router = useRouter();

    const handleTabClick = (selectedTab: 'sent' | 'received' | 'teamChat') => {
        setTab(selectedTab);
    };

    const handleChatItemClick = (chatId: string) => {
        if (tab === 'teamChat') {
            router.push(`/chat/team/${chatId}`);
        } else {
            router.push(`/chat/detail/${chatId}`);
        }
    };

    const renderChatList = () => {
        let chats: ChatItem[] = [];
        if (tab === 'sent') {
            chats = mockSentMessages;
        } else if (tab === 'received') {
            chats = mockReceivedMessages;
        } else if (tab === 'teamChat') {
            chats = mockTeamChats;
        }

        return chats.length > 0 ? (
            <div className={styles.chatList}>
                {chats.map((chat) => (
                    <div
                        className={styles.chatItem}
                        key={chat.id}
                        onClick={() => handleChatItemClick(chat.id)}
                    >
                        <h3>{chat.title}</h3>
                        <p>{chat.lastMessage}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p className={styles.noData}>채팅이 없습니다.</p>
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
                    onClick={() => handleTabClick('teamChat')}
                    className={tab === 'teamChat' ? styles.active : ''}
                >
                    팀 채팅
                </button>
            </div>

            {/* Chat List */}
            {renderChatList()}
        </div>
    );
};

export default ChatPage;

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
    {
        id: '1',
        title: '문의사항: 프로젝트 A 진행 상황',
        lastMessage: '안녕하세요, 프로젝트 A의 현재 진행 상황이 궁금합니다.',
    },
    {
        id: '2',
        title: '의견: 팀원 회의 일정',
        lastMessage: '이번 주 금요일에 팀원 회의 일정을 잡아주세요.',
    },
    {
        id: '3',
        title: '문의사항: 코드 리뷰 요청',
        lastMessage: '코드 리뷰를 요청드립니다. 확인 부탁드립니다.',
    },
];

const mockReceivedMessages: ChatItem[] = [
    {
        id: '1',
        title: '문의 답변: 프로젝트 A 진행 상황',
        lastMessage: '안녕하세요, 현재 프로젝트 A는 계획대로 진행 중입니다.',
    },
    {
        id: '2',
        title: '회의 일정: 팀원 회의 일정 안내',
        lastMessage: '팀원 회의는 이번 주 금요일로 결정되었습니다.',
    },
    {
        id: '3',
        title: '코드 리뷰: 코드 리뷰 결과',
        lastMessage: '코드 리뷰가 완료되었습니다. 피드백을 확인해주세요.',
    },
];

const mockTeamChats: ChatItem[] = [
    {
        id: '1',
        title: '프로젝트 A 팀 채팅',
        lastMessage: '팀장: 내일 회의 있습니다.',
    },
    {
        id: '2',
        title: '프로젝트 B 팀 채팅',
        lastMessage: '팀원: 자료 준비 완료했습니다.',
    },
    {
        id: '3',
        title: '프로젝트 C 팀 채팅',
        lastMessage: '팀장: 모든 팀원은 이 문서를 검토해주세요.',
    },
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
                    className={tab === 'sent' ? styles.active : styles.inactive}
                >
                    내가 문의한 글
                </button>
                <button
                    onClick={() => handleTabClick('received')}
                    className={tab === 'received' ? styles.active : styles.inactive}
                >
                    나한테 문의 온 글
                </button>
                <button
                    onClick={() => handleTabClick('teamChat')}
                    className={tab === 'teamChat' ? styles.active : styles.inactive}
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

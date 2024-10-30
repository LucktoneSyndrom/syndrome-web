// src/app/chat/team/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './ChatPage.module.css';

import TeamCard from '../../../../components/TeamCard';


interface Team {
    id: string;
    teamName: string;
    shortDescription: string;
    deadline: string; // ISO 8601 형식의 날짜 문자열
    deadlineDay: number;
    collectPart: string;
    person: number;
    tag: string;
    recruitmentParts: RecruitmentPart[];
}

interface Message {
    id: string;
    sender: string;
    content: string;
}

const mockTeamData: Team = {
    id: "1",
    shortDescription: "백엔드 개발자를 모집합니다.",
    teamName: "프로젝트 A",
    collectPart: "Backend",
    person: 1,
    deadline: "2023-12-31",
    deadlineDay: 7,
    tag: "공모전",
    recruitmentParts: [
      { partName: "백엔드", numberNeeded: 2 },
      { partName: "프론트엔드", numberNeeded: 1 },
    ],
};

const mockMessagesData: Message[] = [
    {
        id: '1',
        sender: '이승수',
        content: '안녕하세요, 문의를 위한 개인 대화방입니다.',
    },
    {
        id: '2',
        sender: '나',
        content: '네, 안녕하세요!',
    },
    // 추가 메시지 데이터
];

const TeamChatPage = ({ params }: { params: { id: string } }) => {
    const [messages, setMessages] = useState<Message[]>(mockMessagesData);
    const [newMessage, setNewMessage] = useState('');
    const [personName, setPersonName] = useState("이승수");

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const newMsg: Message = {
            id: (messages.length + 1).toString(),
            sender: '나',
            content: newMessage,
        };

        setMessages([...messages, newMsg]);
        setNewMessage('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.chatHeader}>{personName} 님과의 대화</h1>
            <TeamCard key={mockTeamData.id} teamCardInfo={mockTeamData} isSelected={false} />
            <div className={styles.chatMessages}>
                {messages.map((msg) => (
                    <div 
                        className={`${styles.messageItem} ${msg.sender === '나' ? styles.myMessage : styles.otherMessage}`} 
                        key={msg.id}
                    >
                        <div className={styles.messageSender}>{msg.sender}</div>
                        <div className={styles.messageContent}>{msg.content}</div>
                    </div>
                ))}
            </div>
            <div className={styles.chatInputContainer}>
                <input
                    className={styles.chatInput}
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="메시지 입력"
                />
                <button className={styles.sendButton} onClick={handleSendMessage}>
                    전송
                </button>
            </div>
        </div>
    );
};

export default TeamChatPage;

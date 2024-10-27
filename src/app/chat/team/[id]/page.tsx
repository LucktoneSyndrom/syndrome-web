// src/app/chat/team/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import styles from './TeamChatPage.module.css';

interface Message {
    id: string;
    sender: string;
    content: string;
}

const mockMessagesData: Message[] = [
    {
        id: '1',
        sender: '팀장',
        content: '안녕하세요, 팀 채팅방입니다.',
    },
    {
        id: '2',
        sender: '팀원1',
        content: '네, 안녕하세요!',
    },
    // 추가 메시지 데이터
];

const TeamChatPage = ({ params }: { params: { id: string } }) => {
    const [messages, setMessages] = useState<Message[]>(mockMessagesData);
    const [newMessage, setNewMessage] = useState('');

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

    return (
        <div className={styles.container}>
            <h1 className={styles.chatHeader}>팀 채팅방</h1>
            <div className={styles.chatMessages}>
                {messages.map((msg) => (
                    <div className={styles.messageItem} key={msg.id}>
                        <span className={styles.messageSender}>{msg.sender}: </span>
                        <span className={styles.messageContent}>{msg.content}</span>
                    </div>
                ))}
            </div>
            <div className={styles.chatInputContainer}>
                <input
                    className={styles.chatInput}
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
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

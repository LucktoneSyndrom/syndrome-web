export interface Message {
    id: string;
    title: string;
    content: string;
    senderId: string;
    receiverId: string;
    isRealName: boolean;
    createdAt: string;
}

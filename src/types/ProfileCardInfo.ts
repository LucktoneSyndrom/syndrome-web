// src/types/ProfileCardInfo.ts
export interface UserCardInfo {
    name: string;
    school: string;
    major: string;
    skills: string[];
    intro: string;
    profileImage: string;
    temperature: number;
    stack: string[]; // 새로운 속성 추가
}

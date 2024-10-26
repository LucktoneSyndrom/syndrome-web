// src/components/ProfileCard.tsx
import React from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
    name: string;
    school: string;
    major: string;
    skills: string[];
    intro: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, school, major, skills, intro }) => {
    return (
        <div className={styles.profileCard}>
            <img src="/images/default-profile.png" alt={`${name}의 프로필 사진`} />
            <h3>{name}</h3>
            <p>{school} - {major}</p>
            <p>{skills.join(', ')}</p>
            <p>{intro}</p>
            <button>컨택하기</button>
        </div>
    );
};

export default ProfileCard;

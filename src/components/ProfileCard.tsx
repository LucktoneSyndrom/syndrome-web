import React from 'react';
import styles from './ProfileCard.module.css';
import { UserCardInfo } from '../types/ProfileCardInfo';

interface ProfileCardProps {
    userInfo: UserCardInfo;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userInfo }) => {
    return (
        <div className={styles.profileCard}>
            <img src={userInfo.profileImage} alt={`${userInfo.name}의 프로필 사진`} className={styles.profileImage} />
            <div className={styles.info}>
                <h3>{userInfo.name} <span className={styles.temperature}>{userInfo.temperature}</span></h3>
                <p>{userInfo.school} - {userInfo.major}</p>
                <p>{userInfo.intro}</p>
                <div className={styles.stacks}>
                    {userInfo.stack.map((stackItem, index) => (
                        <button key={index} className={styles.stackButton}>{stackItem}</button>
                    ))}
                </div>
                <div className={styles.skills}>
                    {userInfo.skills.map((skill, index) => (
                        <button key={index} className={styles.skillButton}>{skill}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

// src/app/find/my-team/[id]/applicants/page.tsx
"use client";

import React from "react";
import styles from "./ApplicantsPage.module.css";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";
import ProfileCard from "../../../../../components/ProfileCard";

interface Applicant {
  id: string;
  name: string;
  partName: string;
  profileImageUrl?: string;
}

const mockApplicantsData: Applicant[] = [
  {
    id: "1",
    name: "지원자1",
    partName: "백엔드",
    profileImageUrl: "",
  },
  {
    id: "2",
    name: "지원자2",
    partName: "프론트엔드",
    profileImageUrl: "",
  },
  // 추가 지원자 데이터
];

const mockProfileCardData: UserCardInfo[] = [
  {
    id: "user-001",
    name: "최승식",
    school: "인천대학교",
    major: "컴퓨터공학과",
    skills: ["JavaScript", "React", "TypeScript", "Python"],
    intro:
      "안녕하세요! 저는 소프트웨어 개발에 열정이 있는 컴퓨터공학과 학생입니다. 다양한 기술을 익히고 팀 프로젝트를 통해 실력을 키우고 있습니다.",
    profileImage:
      "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084519335100.jpg",
    temperature: 36.5,
    stack: ["Frontend", "Backend"],
  },
  {
    id: "user-002",
    name: "김지범",
    school: "서울대학교",
    major: "산업디자인과",
    skills: ["Photoshop", "Illustrator", "Figma", "UI/UX"],
    intro:
      "디자인과 사용자 경험을 중요하게 생각하는 산업디자인과 학생입니다. 창의적인 디자인과 실용적인 UX를 결합하는 프로젝트를 주로 진행하고 있습니다.",
    profileImage:
      "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084594554100.jpg",
    temperature: 36.7,
    stack: ["Design", "UX"],
  },
  {
    id: "user-003",
    name: "이승수",
    school: "카이스트",
    major: "전기전자공학과",
    skills: ["C++", "Verilog", "Embedded", "Machine Learning"],
    intro:
      "임베디드 시스템과 머신러닝을 전공으로 삼고 있으며, 하드웨어와 소프트웨어의 결합에 관심이 많습니다. 혁신적인 기술을 통해 문제를 해결하는 데 목표를 두고 있습니다.",
    profileImage:
      "https://cse.inu.ac.kr/sites/isis/atchmnfl/profl/1675/temp_1709084777180100.jpg",
    temperature: 36.8,
    stack: ["Embedded", "Machine Learning"],
  },
];

const ApplicantsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const handleViewResume = (applicantId: string) => {
    // 이력서 보기 페이지로 이동
    router.push(`/resume/${applicantId}`);
  };

  const handleContact = (applicantId: string) => {
    // 연락하기 기능 구현
    // 예시로 쪽지 보내기 페이지로 이동
    router.push(`/chat/detail/${applicantId}`);
  };

  const handleAddToTeam = (applicantId: string) => {
    // 팀으로 만들기 기능 구현
    // 예시로 API 호출하여 팀에 추가하고, 페이지를 새로고침하거나 상태 업데이트
    alert(`${applicantId}님을 팀에 추가했습니다.`);
  };

  return (
    <div className={styles.container}>
      <section className={styles.applicantsList}>
        {mockProfileCardData.map((user) => (
          <div key={user.name} className={styles.profileCardContainer}>
            <ProfileCard userInfo={user} />
            <div className={styles.buttonContainer}>
              <button
                className={styles.viewResumeButton}
                onClick={() => handleViewResume(user.id)} // 수정된 부분
              >
                이력서 보기
              </button>
              <button
                className={styles.contactButton}
                onClick={() => handleContact(user.id)} // 수정된 부분
              >
                연락하기
              </button>
              <button
                className={styles.addToTeamButton}
                onClick={() => handleAddToTeam(user.id)} // 수정된 부분
              >
                팀으로 만들기
              </button>
            </div>
            <Divider sx={{ pt: "20px" }} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ApplicantsPage;

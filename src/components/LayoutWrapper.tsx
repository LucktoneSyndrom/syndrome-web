// src/components/LayoutWrapper.tsx

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import styles from "./LayoutWrapper.module.css";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  // 최상위 경로 목록
  const topLevelPaths = ["/", "/find", "/chat", "/mypage"];

  // 헤더 표시 여부 결정
  const showHeader = !topLevelPaths.includes(pathname);

  // 페이지 제목 결정
  let pageTitle = "";

  if (showHeader) {
    const pathSegments = pathname.split("/").filter(Boolean);

    if (pathSegments.length > 0) {
      let lastSegment = pathSegments[pathSegments.length - 1];

      // 동적 라우팅 처리 (예: [id])
      if (Number(lastSegment)) {
        lastSegment = pathSegments[pathSegments.length - 2];
      }

      // 페이지 제목 매핑
      const pageTitleMap: { [key: string]: string } = {
        team: "팀 상세 정보",
        "create-team": "팀 만들기",
        applicants: "지원자 목록",
        "my-team": "내 팀",
        messages: "메시지",
        detail: "채팅 상세",
        resume: "이력서",
        gather: "찾아요",
        category: "필터",
        // 추가 경로 매핑
      };

      pageTitle = pageTitleMap[lastSegment] || lastSegment;

      // 첫 글자 대문자화 (옵션)
      pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
    }
  }

  const headerProps = {
    title: pageTitle,
    ...(pathname === "/gather" && { search: true }),
  };

  return (
    <div className={showHeader ? styles.containerWithHeader : undefined}>
      {showHeader && <Header {...headerProps} />}
      {children}
    </div>
  );
};

export default LayoutWrapper;

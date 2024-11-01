// src/components/BottomTabNav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./BottomTabNav.module.css";
import {
  FaHome,
  FaSearch,
  FaPlusCircle,
  FaComments,
  FaUser,
} from "react-icons/fa";

const BottomTabNav = () => {
  const pathname = usePathname();

  const tabs = [
    { name: "홈", href: "/", icon: <FaHome /> },
    { name: "찾아요", href: "/gather", icon: <FaSearch /> },
    { name: "모아요", href: "/find", icon: <FaPlusCircle /> },
    { name: "채팅", href: "/chat", icon: <FaComments /> },
    { name: "마이페이지", href: "/mypage", icon: <FaUser /> },
  ];

  return (
      <nav className={styles.bottomTabNav}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
          return (
              <Link href={tab.href} key={tab.name} className={styles.tabLink}>
                <div className={`${styles.tabItem} ${isActive ? styles.tabItemActive : ""}`}>
                  <div className={styles.tabIcon}>{tab.icon}</div>
                  <div className={styles.tabLabel}>{tab.name}</div>
                </div>
              </Link>
          );
        })}
      </nav>
  );
};

export default BottomTabNav;

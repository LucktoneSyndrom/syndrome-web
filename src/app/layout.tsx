// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BottomTabNav from '../components/BottomTabNav';
import LayoutWrapper from '../components/LayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Your App Name',
    description: 'Your App Description',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
        <BottomTabNav />
        </body>
        </html>
    );
}

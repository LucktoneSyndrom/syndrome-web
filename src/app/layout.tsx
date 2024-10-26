// src/app/layout.tsx
import './globals.css';
import BottomTabNav from '../components/BottomTabNav';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            {/* 기타 메타 태그 */}
        </head>
        <body>
        <main>{children}</main>
        <BottomTabNav />
        </body>
        </html>
    );
}

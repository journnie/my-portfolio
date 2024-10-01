import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap", // 폰트 로딩되는 동안 브라우저 디폴트 폰트로 보여줌
  // variable: "--font-pretendard"
  // weight: "100 900",
});

export const metadata: Metadata = {
  title: "Journnie Portfolio",
  description: "Journnie Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={Pretendard.className}
      >
        {children}
      </body>
    </html>
  );
}

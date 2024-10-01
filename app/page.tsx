import Header from "./components/Header";
import IntroSection from "./sections/IntroSection";
import TimeLineSection from "./sections/TimeLineSection";

// 함수 선언식
// 호이스팅
// 우선순위 높다는 거
// 페이지 경우에는 index.html
// 함수 선언식 - 호이스팅 됨 -> 페이지
// 함수 표현식 - 호이스팅 안됨 -> 컴포넌트

// viewport

// tailwind는 크기가 4 단위
//=> 1 == 4px
// text-16 == 64px

// text-lg,xl,md

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start items-center min-h-screen">
      <Header />
      <IntroSection />
      <TimeLineSection />
    </main>
  );
}

import Link from "next/link";
import React from "react";

const Header = () => {
  // 동적 기능 있다면 여기에

  // 함수니까 반환값 있음 - html
  return(
    <header className="w-full flex flex-row justify-between items-center p-16">
      <div>
        <h2 className="text">
          Journnie Portfolio
        </h2>
      </div>

      <div className="flex flex-row justify-start items-center gap-4">
        <Link href="/">
          <h4>Home</h4>
        </Link>
        <Link href="/">
          <h4>Guests</h4>
        </Link>
        <Link href="/">
          <h4>Contact</h4>
        </Link>
      </div>
    </header>
  );
};

export default Header;
// 모든 컴포넌트는 export default
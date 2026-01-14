"use client";
import Link from "next/link"; // 1. Linkをインポート
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <header>
      <div className="rounded-b-2xl bg-pink-300 py-3 shadow-md">
        <div
          className={twMerge(
            "mx-4 max-w-2xl md:mx-auto",
            "flex items-center justify-between",
            "text-lg font-bold text-white",
          )}
        >
          <div>
            {/* 2. Linkコンポーネントで囲む (href="/") */}
            <Link href="/">
              <FontAwesomeIcon icon={faFish} className="mr-1" />
              あんりさんブログ
            </Link>
          </div>
          <div>検索</div> {/* ここはそのまま */}
          <div>
            {/* 3. Linkコンポーネントで囲む (href="/about") */}
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

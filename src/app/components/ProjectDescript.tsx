"use client";
import { JSX, useState } from "react";

interface descType {
  keyword: string;
  content: string;
}

export default function ProjDescription() {
  // tag의 초기 값은 intro = 프로젝트 소개
  const [tag, setTag] = useState<string>("intro");

  const changeTag = (word: string) => {
    setTag(word);
  };

  // 반복되는 태그 줄이는 용도
  const arrow: JSX.Element = (
    <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#B8B8B8] mx-auto"></div>
  );
  const description: descType[] = [
    { keyword: "intro", content: "소개소개" },
    { keyword: "purpose", content: "소개소개" },
    { keyword: "role", content: "소개소개" },
    { keyword: "feature", content: "소개소개" },
    { keyword: "link", content: "소개소개" },
  ];

  return (
    <div className="mr-auto mt-[97px] w-full">
      <div className="flex flex-wrap ">
        <div className="grow" onClick={() => changeTag("intro")}>
          <h2 className="font-bold text-2xl mx-auto w-fit cursor-pointer">
            프로젝트 소개
          </h2>
          {tag === "intro" && arrow}
        </div>
        <div className="grow" onClick={() => changeTag("purpose")}>
          <h2 className="font-bold text-2xl mx-auto w-fit cursor-pointer">
            목적
          </h2>
          {tag === "purpose" && arrow}
        </div>
        <div className="grow" onClick={() => changeTag("role")}>
          <h2 className="font-bold text-2xl mx-auto w-fit cursor-pointer">
            팀 내 역할
          </h2>
          {tag === "role" && arrow}
        </div>
        <div className="grow" onClick={() => changeTag("feature")}>
          <h2 className="font-bold text-2xl mx-auto w-fit cursor-pointer">
            특징
          </h2>
          {tag === "feature" && arrow}
        </div>
        <div className="grow" onClick={() => changeTag("link")}>
          <h2 className="font-bold text-2xl mx-auto w-fit cursor-pointer">
            외부 링크
          </h2>
          {tag === "link" && arrow}
        </div>
      </div>
      <div className="w-full p-5 mb-auto border-4 border-[#B8B8B8] bg-[#f0f0f0]">
        {description[0].content}
      </div>
    </div>
  );
}

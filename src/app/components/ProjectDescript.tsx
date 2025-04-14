"use client";
import { JSX, useState } from "react";
import { description } from "./DescriptionData";

export default function ProjDescription() {
  // tag의 초기 값은 intro = 프로젝트 소개
  const [tag, setTag] = useState<number>(0);

  // 반복되는 태그 줄이는 용도
  // 이후 애니메이션 효과 추가 예정
  const arrow: JSX.Element = (
    <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#B8B8B8] mx-auto"></div>
  );

  return (
    <div className="mr-auto mt-[20px] xl:mt-10 w-full">
      <h2 className="font-extrabold text-center xl:text-start text-4xl mb-[20px] xl:mb-[40px] break-keep">
        농산물 직거래 플랫폼 웹 프로젝트,{" "}
        <span className="text-[#72BF78]">바로Farm</span>
      </h2>

      <div className="flex flex-wrap gap-1 md:gap-0">
        <div className="grow" onClick={() => setTag(0)}>
          <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
            프로젝트 소개
          </h2>
          {tag === 0 && arrow}
        </div>
        <div className="grow" onClick={() => setTag(1)}>
          <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
            목적
          </h2>
          {tag === 1 && arrow}
        </div>

        <div className="grow" onClick={() => setTag(2)}>
          <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
            팀 내 역할
          </h2>
          {tag === 2 && arrow}
        </div>
        <div className="grow" onClick={() => setTag(3)}>
          <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
            특징
          </h2>
          {tag === 3 && arrow}
        </div>
        <div className="grow" onClick={() => setTag(4)}>
          <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
            기술 스택
          </h2>
          {tag === 4 && arrow}
        </div>
        <div className="grow" onClick={() => setTag(5)}>
          <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
            외부 링크
          </h2>
          {tag === 5 && arrow}
        </div>
      </div>
      <div
        className="w-full p-5 mb-auto border-4 text-sm xl:text-lg border-[#B8B8B8] bg-[#f0f0f0]"
        id="decriptionArea"
      >
        {description[tag].content}
      </div>
    </div>
  );
}

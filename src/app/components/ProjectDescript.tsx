"use client";
import { JSX, useState } from "react";
import { description } from "./DescriptionData";
import Carousel from "./Carousel";

export default function ProjDescription() {
  // tag의 초기 값은 intro = 프로젝트 소개
  const [tag, setTag] = useState<string>("intro");
  const [project, setProject] = useState<number>(0);

  // 반복되는 태그 줄이는 용도
  // 이후 애니메이션 효과 추가 예정
  const arrow: JSX.Element = (
    <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#B8B8B8] mx-auto"></div>
  );

  return (
    <>
      <div className="mr-auto mt-[20px] xl:mt-10 w-full">
        <div className="flex gap-7 justify-center xl:justify-start overflow-x-clip min-w-[246px] mb-[10px]">
          <span
            onClick={() => {
              setProject(0);
              setTag("intro");
            }}
            className={`text-[#72BF78] hover:underline cursor-pointer text-xl ${
              project === 0 ? "font-extrabold" : ""
            }`}
          >
            바로Farm{project === 0 ? "<" : ""}
          </span>
          <span
            onClick={() => {
              setProject(1);
              setTag("intro");
            }}
            className={`text-[#72BF78] hover:underline cursor-pointer text-xl ${
              project === 1 ? "font-extrabold" : ""
            }`}
          >
            바로Farm Refactored{project === 1 ? "<" : ""}
          </span>
        </div>
        <h2 className="font-extrabold text-center xl:text-start text-4xl mb-[20px] xl:mb-[40px] break-keep">
          농산물 직거래 플랫폼 웹 프로젝트,{" "}
          <a
            href={`${
              project === 0
                ? "https://barofarm.netlify.app/"
                : "https://barofarm-refactoredtk.netlify.app/"
            }`}
            target="_blank"
            className="text-[#72BF78] hover:underline cursor-pointer"
          >
            바로Farm{project === 1 && " Refactored"}
          </a>
        </h2>
        <div className="flex flex-wrap gap-1 md:gap-0">
          <div className="grow" id="intro" onClick={() => setTag("intro")}>
            <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
              프로젝트 소개
            </h2>
            {tag === "intro" && arrow}
          </div>
          <div className="grow" id="purpose" onClick={() => setTag("purpose")}>
            <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
              목적
            </h2>
            {tag === "purpose" && arrow}
          </div>

          {project === 0 && (
            <div className="grow" id="role" onClick={() => setTag("role")}>
              <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
                팀 내 역할
              </h2>
              {tag === "role" && arrow}
            </div>
          )}
          <div className="grow" id="feature" onClick={() => setTag("feature")}>
            <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
              특징
            </h2>
            {tag === "feature" && arrow}
          </div>
          <div
            className="grow"
            id="techStack"
            onClick={() => setTag("techStack")}
          >
            <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
              기술 스택
            </h2>
            {tag === "techStack" && arrow}
          </div>
          <div className="grow" id="link" onClick={() => setTag("link")}>
            <h2 className="font-bold md:text-xl mx-auto w-fit cursor-pointer">
              외부 링크
            </h2>
            {tag === "link" && arrow}
          </div>
        </div>
        <div
          className="w-full p-5 mb-auto border-4 text-sm xl:text-lg border-[#B8B8B8] bg-[#f0f0f0]"
          id="decriptionArea"
        >
          {description[project][tag as keyof (typeof description)[number]]}
        </div>
      </div>
      <img
        src="/ProjectImg.svg"
        alt="baroFarm Introduce Img"
        className="hidden xl:block xl:aspect-5/8 w-[150px] h-[240px] xl: xl:w-[500px] xl:h-[800px] self-center xl:ml-[60px] mt-5 xl:mt-0"
      />
      <div className="xl:hidden mt-5 bg-[#72BF78] w-full mx-auto rounded-xl border-2 border-green-600">
        <Carousel />
      </div>
    </>
  );
}

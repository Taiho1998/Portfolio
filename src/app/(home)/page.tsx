import Navigate from "../components/Navigate";
import Github from "../components/Github";
import { Metadata } from "next";
import CopyTextButton from "../components/CopyTextButton";
import ProfileImg from "../components/ProfileImg";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Home() {
  return (
    <>
      <Navigate />
      <div className="text-center mt-5 xl:mt-0">
        <ProfileImg />
        <h1 className="text-xl xl:text-4xl font-bold mt-[15px] break-keep">
          안녕하십니까, 프론트엔드 개발자{" "}
          <span className="text-[#EE6533] break-keep">고태호</span>입니다!
          <br />
          Hello, my name is{" "}
          <span className="text-[#EE6533] break-keep">Taiho Koh</span>, a
          front-end developer!
        </h1>

        {/* 이메일 클릭 시 이메일 보내기 링크로 전송 주가 예정 */}
        <h3 className="font-bold text-2xl xl:text-[32px] mb-5 hover:text-[#EE6533] mt-[40px]">
          Contact
        </h3>
        <div className="h-fit flex flex-col xl:flex-row gap-5 justify-center items-center">
          <div className="flex h-fit items-center">
            <img
              src="/icons/Envelope.svg"
              alt="phone Icon Img"
              className="size-[30px]"
            />
            <a
              href="mailto:tgo12323@gmail.com"
              title="클릭하여 이메일 보내기"
              className="xl:text-2xl ml-[30px] font-light h-fit hover:underline"
            >
              tgo12323@gmail.com
            </a>
          </div>
          <CopyTextButton copyText={"tgo12323@gmail.com"} />
        </div>
        <h3 className="font-bold text-2xl xl:text-[32px] mb-5 hover:text-[#EE6533] mt-[40px]">
          Link
        </h3>
        <a
          target="_blank"
          href="https://github.com/Taiho1998"
          className="hover:underline hover:underline-offset-4"
        >
          <div className="border w-fit p-3 inline-block group bg-[#2b3137] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#2b3137] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
            <img
              src="/icons/github.png"
              alt="github icon"
              className="box-border h-[28px] inline rounded-md  border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
            />
          </div>
        </a>
        <div className="flex flex-col xl:flex-row mt-20 text-center xl:text-left gap-5 xl:gap-0">
          <div className="grow mx-auto xl:mx-0">
            <div className="w-fit xl:ml-auto mr-3">
              <h3 className="font-bold text-[32px] mb-5 hover:text-[#EE6533]">
                Education
              </h3>
              <div className="flex flex-col xl:flex-row gap-5 mb-5">
                <img
                  src="/icons/Bank.svg"
                  alt="College"
                  className="self-center xl:self-baseline"
                />
                <p className="font-extralight text-2xl">
                  중앙대학교, 창의ICT공과대학
                  <br /> 컴퓨터공학부 소프트웨어전공 졸업, 2024
                </p>
              </div>
              <div className="flex flex-col gap-5 xl:flex-row">
                <img
                  src="/icons/tent.svg"
                  alt="BootCamp"
                  className="self-center xl:self-baseline"
                />
                <p className="font-extralight text-2xl">
                  멋쟁이사자처럼 부트캠프, <br />
                  프론트엔드 스쿨 11기 수료, 2025
                </p>
              </div>
            </div>
          </div>
          <div className="grow mx-auto xl:mx-0">
            <h3 className="font-bold text-[32px] mb-5 hover:text-[#EE6533]">
              Tech Stack
            </h3>
            <div>
              <div className="flex flex-wrap gap-3 mb-3 justify-center xl:justify-start">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/PYTHON-3776AB?style=for-the-badge&logo=python&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white"
                />
              </div>
              <div className="flex flex-wrap gap-3 mb-3 justify-center xl:justify-start">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white"
                />
              </div>
              <div className="flex flex-wrap gap-3 mb-3 justify-center xl:justify-start">
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/TAILWINDCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=white"
                />

                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center xl:justify-start">
                {/* 깃헙 이미지, 클릭 시 링크 이동 추가 예정 */}
                <Github />
                <img
                  className="transition-transform duration-300 hover:scale-110"
                  src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

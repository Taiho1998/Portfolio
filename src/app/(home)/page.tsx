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
      <div className="text-center">
        <ProfileImg />
        <h1 className="text-4xl font-bold mt-[15px]">
          안녕하십니까, 프론트엔드 개발자{" "}
          <span className="text-[#EE6533]">고태호</span>입니다!
          <br />
          Hello, my name is <span className="text-[#EE6533]">Taiho Koh</span>, a
          front-end developer!
        </h1>

        {/* 이메일 클릭 시 이메일 보내기 링크로 전송 주가 예정 */}
        <h3 className="font-bold text-[32px] mb-5 hover:text-[#EE6533] mt-[40px]">
          Contact
        </h3>
        <div className="mx-[280px] h-fit flex justify-center items-center">
          <div className="flex h-fit">
            <img
              src="/icons/Envelope.svg"
              alt="phone Icon Img"
              className="size-[30px]"
            />
            <a
              href="mailto:tgo12323@gmail.com"
              className="text-2xl ml-[30px] font-light h-fit"
            >
              <span className="">tgo12323@gmail.com</span>
            </a>
          </div>
          <CopyTextButton copyText={"tgo12323@gmail.com"} />
        </div>
        <div className="flex mt-20 text-left">
          <div className="grow">
            <div className="w-fit ml-auto mr-3">
              <h3 className="font-bold text-[32px] mb-5 hover:text-[#EE6533]">
                Education
              </h3>
              <div className="flex gap-5 mb-5">
                <img
                  src="/icons/Bank.svg"
                  alt="College"
                  className="self-baseline"
                />
                <p className="font-extralight text-2xl">
                  중앙대학교, 창의ICT공과대학
                  <br /> 컴퓨터공학부 소프트웨어전공 졸업, 2024
                </p>
              </div>
              <div className="flex gap-5">
                <img
                  src="/icons/tent.svg"
                  alt="BootCamp"
                  className="self-baseline"
                />
                <p className="font-extralight text-2xl">
                  멋쟁이사자처럼 부트캠프, <br />
                  프론트엔드 스쿨 11기 수료, 2025
                </p>
              </div>
            </div>
          </div>
          <div className="grow">
            <h3 className="font-bold text-[32px] mb-5 hover:text-[#EE6533]">
              Tech Stack
            </h3>
            <div>
              <div>
                <div className="flex flex-wrap gap-3 mb-3">
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
                <div className="flex flex-wrap gap-3 mb-3">
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
                <div className="flex flex-wrap gap-3 mb-3">
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
                <div className="flex flex-wrap gap-3">
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
      </div>
    </>
  );
}

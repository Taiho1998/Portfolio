import Link from "next/link";
import Navigate from "../components/Navigate";

export default function Home() {
  return (
    <>
      <Navigate />
      <div className="bg-green-200 text-center">
        <img
          src="/Frame1.svg"
          alt="Profile_Img"
          className="size-[300px] mx-auto rounded-full hover:shadow-2xl hover:-translate-1"
        />
        {/* 이미지 작업 목록 : 마우스 올릴 시 뜨는 스타일 애니메이션 효과 */}
        <h1 className="text-4xl font-bold mt-[15px]">
          안녕하십니까,<span className="text-[#EE6533]">고태호</span>입니다!
          <br />
          Hello, my name is <span className="text-[#EE6533]">Taiho Koh</span>!
        </h1>
        <div className="grid grid-cols-2 mx-[280px] mt-[90px]">
          <div className="flex justify-center">
            <img
              src="/icons/Telephone.svg"
              alt="phone Icon Img"
              className="size-[30px]"
            />
            <p className="text-2xl ml-[30px] font-light">(010) 0000-0000</p>
          </div>
          {/* 이메일 클릭 시 이메일 보내기 링크로 전송 주가 예정 */}
          <div className="flex justify-center">
            <img
              src="/icons/Envelope.svg"
              alt="phone Icon Img"
              className="size-[30px]"
            />
            <p className="text-2xl ml-[30px] font-light">tgo12323@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-2 mx-[220px] mt-20 text-left">
          <div>
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
                멋쟁이사자처럼, <br />
                프론트엔드 스쿨 11기 수료, 2025
              </p>
            </div>
          </div>
          <div>
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
                  <img
                    className="transition-transform duration-300 hover:scale-110"
                    src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"
                  />
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

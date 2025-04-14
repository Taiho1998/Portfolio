import { JSX } from "react";

interface descType {
  keyword: string;
  content: JSX.Element;
}

export const description: descType[] = [
  {
    keyword: "intro",
    content: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>농산물 직거래 오픈마켓 웹페이지.</li>
        <br />
        <li>진행 기간: 24.12.19 - 25.01.22</li>
        <br />
        <li>
          멋쟁이 사자처럼 프론트엔드 스쿨 11기 최종 프로젝트 결과물입니다.
        </li>
        <br />
        <li>기획부터 설계, 디자인을 전부 자율적으로 진행했습니다.</li>
        <br />
        <li>
          백엔드 서버를 프로젝트 매니저(멋쟁이사자처럼 프론트엔드 부트캠프
          매니저)로부터 제공받았으며, 기본적인 오픈마켓 API를 활용하여 기본에
          충실한 웹사이트를 제작했습니다.
        </li>
        <br />
        <li>
          부트 캠프 종료 이후 깃헙 개인 레포지터리에서 개인 프로젝트를
          진행했습니다.
        </li>
      </ul>
    ),
  },
  {
    keyword: "purpose",
    content: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          농산물 유통 판매 사이트로써, 기존에 생산지에서 중간 유통을 거쳐
          소비자에게 도달하는 과정을 모바일 직거래 플랫폼으로 대체하여 유통
          과정을 생략하고 생산자가 빠르게 소비자에게 상품을 판매할 수 있는
          사이트를 설계하고자 했습니다.
        </li>
        <br />
        <li>
          또한 제공받은 백엔드 API와 DB를 기반으로 기초적인 React 스킬을 복습 및
          활용을 목적으로 두었습니다.
        </li>
        <br />
        <li>
          이후 Typescript를 학습하기 위한 목적으로 Typescript로 전환하였습니다.
        </li>
      </ul>
    ),
  },
  {
    keyword: "role",
    content: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          프로필 및 커뮤니티
          <ul className="font-light list-disc pl-5 break-keep">
            <li>
              커뮤니티 기능
              <ul className="font-light list-disc pl-5 break-keep">
                <li>
                  커뮤니티 기능의 전반적인 프론트엔드 기능을 담당했으며, 게시글
                  작성, 수정, 삭제를 구현했습니다.
                </li>

                <li>게시글의 댓글 작성 및 삭제 또한 구현했습니다.</li>
              </ul>
            </li>
            <br />
            <li>
              프로필 기능
              <ul className="font-light list-disc pl-5 break-keep">
                <li>유저의 기본적인 정보를 조회 및 수정할 수 있습니다.</li>{" "}
                <li>
                  또한 유저가 판매하고 있는 상품의 정보도 필요시 수정할 수 있는
                  기능이 포함되어 있습니다.
                </li>
                <br />
              </ul>
            </li>
          </ul>
        </li>
        <li>
          프로젝트 팀 리더
          <ul className="font-light list-disc pl-5 break-keep">
            <li>
              팀 리더로서 스크럼에서 팀의 의견을 전반적으로 조율하였으며,
              프로젝트 일정을 준수하여 제 시간에 스케쥴을 맞출 수 있게 했습니다.
              <br />
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    keyword: "feature",
    content: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          특징으로는 커뮤니티 기능을 추가하여 레시피를 공유하거나 판매자의
          바이럴 마켓팅과 같은 유저 간의 정보 공유가 원활이 이뤄지게 했습니다.
        </li>
        <br />
        <li>
          카카오톡 API를 활용하여 간편 로그인이 가능하고, 카카오페이 기능을
          사용하여 결제할 수 있습니다.
        </li>
        <br />
        <li>Zustand를 이용하여 상태 관리를 했습니다.</li>
        <br />
        <li>
          판매자와 구매자로 회원 계급이 나뉘어집니다. 판매자의 경우 구매와 판매
          기능의 이용이 자유로우며, 구매자는 구매 기능만 이용할 수 있습니다.
        </li>
        <br />
        <li>
          상품을 구매한 후 리뷰와 점수를 남길 수 있으며, 해당 별점은 합산되어
          평균 점수를 도출해 노출됩니다.
        </li>
        <br />
        <li>
          과일의 경우 제철 기간을 판매자가 설정할 수 있으며, 만약 제철 기간과
          현재 기간이 맞으면 메인 화면에 노출됩니다.
        </li>
      </ul>
    ),
  },
  {
    keyword: "techStack",
    content: (
      <>
        <div className="flex flex-wrap gap-3 justify-center">
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
            className="transition-transform duration-300 hover:scale-110 cursor-pointer"
            src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"
          />
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
          />
        </div>
      </>
    ),
  },
  {
    keyword: "link",
    content: (
      <div className="font-light text-lg w-full overflow-hidden">
        <div className="flex flex-col items-center sm:flex-row">
          홈페이지 주소:{" "}
          <a
            target="_blank"
            href="https://barofarm.netlify.app/"
            className="hover:underline hover:underline-offset-4"
          >
            <div className="border w-fit p-3 inline-block bg-[#95d89a] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#95d89a] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              원본 버전
              <img
                src="/BaroFarmLogo.png"
                alt="BaroFarmLogo icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
          <a
            target="_blank"
            href="https://barofarm-refactoredtk.netlify.app/"
            className="hover:underline hover:underline-offset-4 sm:ml-3"
          >
            <div className="border w-fit p-3 inline-block  bg-[#95d89a] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#95d89a] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all whitespace-nowrap">
              리팩토링 버전
              <img
                src="/BaroFarmLogo.png"
                alt="BaroFarmLogo icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
        <div className="sm:my-3 flex flex-col items-center sm:flex-row">
          Github 주소:{" "}
          <a
            target="_blank"
            href="https://github.com/FRONTENDBOOTCAMP-11th/baroFarm"
            className="hover:scale-110"
          >
            <div className="border w-fit p-3 inline-block group  bg-[#2b3137] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#2b3137] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              원본 버전
              <img
                src="/icons/github.png"
                alt="github icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
          <a
            target="_blank"
            href="https://github.com/Taiho1998/baroFarm"
            className="hover:underline hover:underline-offset-4 sm:ml-3"
          >
            <div className="border w-fit p-3 inline-block group bg-[#2b3137] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#2b3137] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              리팩토링 버전
              <img
                src="/icons/github.png"
                alt="github icon"
                className="box-border h-[28px] inline ml-2 rounded-md  border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
        <div className="sm:mb-3 flex flex-col items-center sm:flex-row">
          노션 주소:{" "}
          <a
            target="_blank"
            href="https://www.notion.so/4-4-3275fa56674041069f61c44806d2d11e?pvs=4"
            className="hover:scale-110"
          >
            <div className="border w-fit p-3 inline-block group bg-[#3F4448] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#3F4448] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로 가기
              <img
                src="/icons/icons8-개념-150.png"
                alt="Notion icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          Figma 주소:{" "}
          <a
            target="_blank"
            href="https://www.notion.so/4-4-3275fa56674041069f61c44806d2d11e?pvs=4"
            className="hover:scale-110"
          >
            <div className="border w-fit p-3 inline-block group bg-[#fe2c54] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#fe2c54] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로 가기
              <img
                src="/icons/Figma.png"
                alt="Notion icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
      </div>
    ),
  },
];

import { JSX } from "react";

interface descType {
  intro: JSX.Element;
  purpose: JSX.Element;
  role: JSX.Element;
  feature: JSX.Element;
  techStack: JSX.Element;
  link: JSX.Element;
}

export const description: descType[] = [
  {
    intro: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>농산물 직거래 오픈마켓 웹페이지.</li>
        <br />
        <li>진행 기간: 24.12.19 - 25.01.22</li>
        <br />
        <li>멋쟁이 사자처럼 프론트엔드 스쿨 11기 최종 프로젝트</li>
        <br />
        <li>기획부터 설계, 디자인 모두 자율적으로 진행</li>
        <br />
        <li>
          백엔드 서버를 프로젝트 매니저(멋쟁이사자처럼 프론트엔드 부트캠프
          매니저)로부터 제공받음
        </li>
        <br />
        <li>기본적인 오픈마켓 API를 활용하여 기본에 충실한 웹사이트를 제작</li>
      </ul>
    ),
    purpose: (
      <ul className="font-light break-keep">
        <li className="font-bold text-2xl hover:text-[#EE6533]">
          오픈 마켓 농산물 직거래 플랫폼
        </li>
        <ul className="list-disc pl-5 break-keep">
          <li>
            농산물 유통 판매 사이트로써, 기존에 생산지에서 중간 유통을 거쳐
            소비자에게 도달하는 과정을 모바일 직거래 플랫폼으로 대체하여 유통
            과정을 생략하고 생산자가 빠르게 소비자에게 상품을 판매할 수 있는
            사이트를 설계하고자 했습니다.
          </li>
        </ul>

        <br />
        <li className="font-bold text-2xl hover:text-[#EE6533]">
          전반적인 프론트엔드 웹 프로젝트 경험
        </li>
        <ul className="list-disc pl-5 break-keep">
          <li>
            프론트엔드 웹 개발 프로젝트를 기획 단계에서부터 디자인, 개발,
            테스트, DB구축, 마무리로 배포까지 경험하기 위한 팀프로젝트입니다
          </li>
        </ul>
        <br />

        <li className="font-bold text-2xl hover:text-[#EE6533]">
          React와 Javascript을 활용한 반응형 웹 프로젝트
        </li>
        <ul className="list-disc pl-5 break-keep">
          <li>
            또한 제공받은 백엔드 API와 DB를 기반으로 기초적인 React 스킬을 복습
            및 활용을 목적으로 두었습니다.
          </li>
        </ul>
        <br />
      </ul>
    ),
    role: (
      <ul className="font-light break-keep ">
        <li>
          <span className="font-bold text-3xl hover:text-[#EE6533]">
            프로필 및 커뮤니티
          </span>
          <ul className="font-light pl-5 break-keep">
            <li>
              <span className="font-semibold text-2xl hover:text-[#EE6533]">
                바로파밍 페이지 - 커뮤니티 기능
              </span>
              <ul id="comm" className="font-light list-disc pl-5 break-keep">
                <li>
                  <span className="font-semibold">게시글 CRUD 기능</span> -
                  Axios 통신을 활용하여 REST API를 호출. /posts 엔드포인트를
                  이용해 게시글 조회, 작성, 수정, 삭제를 구현
                </li>
                <li>
                  <span className="font-semibold">댓글 CRD 기능</span> -
                  /posts/:PostId/replies 엔드포인트를 이용하여 댓글 작성, 조회
                  및 삭제 기능 구현
                </li>
                <li>
                  <span className="font-semibold">Pagination 적용</span> -
                  게시글 목록을 조회시 한 페이지에 10개의 항목으로 제한하여 성능
                  개선 및 사용자 정보 과부화 방지
                </li>
                <li>
                  <span className="font-semibold">
                    사진 미첨부 게시물의 분류
                  </span>
                  - 사진을 첨부하지 않은 게시물의 경우 noPic 타입으로 설정하여
                  메인화면에 표시되지 않게 했습니다.
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-2xl hover:text-[#EE6533]">
                마이 페이지 - 프로필 기능
              </span>

              <ul id="MyPage" className="font-light list-disc pl-5 break-keep ">
                <li>
                  <span className="font-semibold">
                    REST API 기반의 유저 정보 조회 및 수정
                  </span>
                  - Axios 통신을 활용하여 REST API를 호출. /users 엔드포인트를
                  유저 정보의 조회, 수정을 구현
                </li>
                <li>
                  <span className="font-semibold">프로필 수정 예외 처리</span> -
                  일부 정보는 주문 기능에서 활용하는 정보이기에 추가적으로
                  작성하게 했으며, 모든 정보를 기입하지 않을 시 수정 처리하지
                  않음
                </li>
                <li>
                  <span className="font-semibold">
                    판매 상품 등록 및 조회 기능
                  </span>
                  - 엔드 포인트 /products를 통해 판매자 유저가 판매하고 싶은
                  상품을 등록할 수 있는 기능
                </li>
                <br />
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold text-3xl hover:text-[#EE6533]">
            프로젝트 팀 리더
          </span>

          <ul id="Leader" className="font-light list-disc pl-5 break-keep ">
            <li>정기적인 스크럼 진행 및 의견 조율</li>
            <li>
              스케쥴을 지정하고 팀원들의 프로젝트 진도 관리를 통한 마일스톤 준수
            </li>
            <li>Github 레포지터리의 전체적인 프로젝트 세팅 및 브랜치 관리</li>
            <li>Netlify를 통한 프로젝트 배포 담당</li>
          </ul>
        </li>
      </ul>
    ),
    feature: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          특징으로는 커뮤니티 기능을 추가하여 레시피를 공유하거나 판매자의
          바이럴 마켓팅과 같은 유저 간의 정보 공유가 원활이 이뤄지게 함
        </li>
        <br />
        <li>
          카카오톡 API를 활용하여 간편 로그인이 가능하고, 카카오페이 기능을
          사용하여 결제할 수 있습니다
        </li>
        <br />
        <li>Zustand를 이용하여 상태 관리를 했습니다</li>
        <br />
        <li>
          두 유형의 유저 타입이 존재: 판매자의 경우 구매와 판매 기능의 이용이
          자유로우며, 구매자는 구매 기능만 이용할 수 있음
        </li>
        <br />
        <li>
          상품을 구매한 후 리뷰와 점수를 남길 수 있으며, 해당 별점은 합산되어
          평균 점수를 도출해 노출됨
        </li>
        <br />
        <li>
          과일의 경우 제철 기간을 판매자가 설정할 수 있으며, 만약 제철 기간과
          현재 기간이 맞으면 메인 화면에 노출됨
        </li>
      </ul>
    ),
    techStack: (
      <>
        <div className="flex flex-wrap gap-3 justify-start mb-3">
          <span>기본적인 프론트엔드 기술 : </span>
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
        <ul className="font-light list-disc pl-10 break-keep mb-3">
          <li>
            아직 팀원 내에서 타입스크립트에 대한 이해도가 전반적으로 부족했으며,
            프로젝트에서 구현해할 기능이 최초 계획보다 훨씬 많아져 학습에 걸리는
            시간을 고려하여 자바스크립트를 선택함
          </li>
        </ul>
        <div className="flex flex-wrap gap-3 justify-start mb-3">
          <span>외부 라이브러리 : </span>
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=white"
          />
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/TAILWINDCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"
          />
        </div>
        <ul className="font-light list-disc pl-10 break-keep mb-3">
          <li>
            React 기반의 웹 프로젝트이었으며, UI를 자유롭게 구축하며 팀원들 간의
            불균형한 프론트엔드 개발 숙련을 고려하여 React를 채택
          </li>
          <li>
            TailwindCSS를 사용한 이유는 해당 라이브러리 특성상 따로 스타일
            파일을 생성하거나 모든 태그에 클래스명을 고려할 필요없었기에
            스타일을 직접 적용하여 작업 효율을 높이기 위함
          </li>
          <li>
            또한 TailwindCSS를 부트캠프 기간동안 학습했기에 이를 활용하기 위함
          </li>
        </ul>
        <div className="flex flex-wrap gap-3 justify-start">
          <span>상태 관리 및 데이터 페칭 : </span>
          <img src="https://img.shields.io/badge/zustand-00B899?style=for-the-badge&logo=&logoColor=white" />
          <img src="https://img.shields.io/badge/tanstack query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" />
        </div>
        <ul className="font-light list-disc pl-10 break-keep mb-3">
          <li>
            zustand의 경우 낮은 학습 난이도로 인해 상태 관리 라이브러리로써
            활용하기 용이하며, 코드량 또한 효과적으로 줄임
          </li>
          <li>
            React-query는 데이터 패칭, 캐싱 등, 직접 서버 상태 관리를 하는것
            보다 생산성을 높임
          </li>
        </ul>
        <div className="flex flex-wrap gap-3 justify-start">
          <span>개발 도구 : </span>
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"
          />
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/FIGMA-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
          />
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
          />
        </div>
        <ul className="font-light list-disc pl-10 break-keep mb-3">
          <li>
            Figma는 여러 인원이서 협업을 하며 화상 채팅을 통해 작업해야 했던
            당시 프로젝트 환경 특성상 서로의 작업과 커서의 움직임 등이
            즉각적으로 표시되는 Figma는 최선의 디자인툴
          </li>
          <li>
            Netlify는 Next.js를 사용하지 않았기에 Vercel을 사용할 필요가
            없었으며, 넉넉한 웹 배포 제한이 프로젝트 진행 도중 배포 테스트를
            하기에 적절한 플랫폼
          </li>
        </ul>
      </>
    ),
    link: (
      <div className="font-light text-lg w-full">
        <div className="flex flex-col items-center sm:flex-row">
          홈페이지 주소:{" "}
          <a
            target="_blank"
            href="https://barofarm.netlify.app/"
            className="hover:underline hover:underline-offset-4 ml-[20px]"
          >
            <div className="border w-fit p-3 inline-block bg-[#95d89a] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#95d89a] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로가기
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
            className="hover:scale-110 ml-[20px]"
          >
            <div className="border w-fit p-3 inline-block group  bg-[#2b3137] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#2b3137] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로가기
              <img
                src="/icons/github.png"
                alt="github icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
        <div className="sm:mb-3 flex flex-col items-center sm:flex-row">
          노션 주소:{" "}
          <a
            target="_blank"
            href="https://www.notion.so/4-4-3275fa56674041069f61c44806d2d11e?pvs=4"
            className="hover:scale-110 ml-[20px]"
          >
            <div className="border w-fit p-3 inline-block group bg-[#3F4448] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#3F4448] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로가기
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
            href="https://www.figma.com/design/ThTdy4bAI2dDMxaRcDPFAW/4%EB%94%B8%EB%9D%BC---%EB%B0%94%EB%A1%9C%ED%8C%9C(Farm)?node-id=0-1&p=f&t=O2YRQAev0xPoQLzn-0"
            className="hover:scale-110 ml-[20px]"
          >
            <div className="border w-fit p-3 inline-block group bg-[#fe2c54] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#fe2c54] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로가기
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
  {
    intro: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          멋쟁이 사자처럼 팀 프로젝트 바로Farm을 개선 및 타입스크립트로 변환한
          개인 프로젝트
        </li>
        <br />
        <li>진행 기간: 25.01.31 - 25.02.24</li>
        <br />
        <li>
          세부 디자인을 변경하였으며, 기존 프로젝트에서 담당했던 기능 외에도
          다른 팀원들이 구현했던 기능 중 일부 개선 및 더미 코드 삭제를 진행
        </li>
        <br />
        <li>
          또, 기존에는 navigate나 상태 관리 라이브러리에 따른 동적 렌더링으로
          구현한 예외 처리를 Protected Route 기법으로 변경해 일부 접근 방식을
          막아야 하는 예외처리를 구현
        </li>
      </ul>
    ),
    purpose: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          Typescript를 학습하고, 이를 실습하기 위해 전체적인 프로젝트를
          Typescript로 변환
        </li>
        <br />
        <li>
          기존 프로젝트를 구현하면서 아쉬웠던 점들을 개선하기 위해 리팩토링을
          진행
        </li>
        <br />
        <li>
          Infinite scroll 방식, Protected Route 등, 미흡한 예외 처리와 모바일
          친화적이지 않은 UI / UX를 개선하기 위해 일부 기능을 추가
        </li>
        <br />
      </ul>
    ),
    role: <></>,
    feature: (
      <ul className="font-light list-disc pl-5 break-keep">
        <li>
          페이지 양 옆의 여백을 초록색으로 칠해 웹 사이트를 이용기 눈이
          피로해지지 않게 하며, 전체적인 레이아웃을 더욱 뚜렷하게 개선
        </li>
        <br />
        <li>
          기존의 페이지 번호 형식의 페이지네이션에서 Infinite scroll
          페이지네이션 형식으로 변경하여 모바일 환경에서도 편하게 이용할 수
          있도록 사용자 경험을 개선
        </li>
        <br />
        <li>
          Protected Route를 생성하여 회원 가입 후 뒤로가기를 통해 다시 회원 가입
          폼으로 넘어가거나 게시글 수정 이후 뒤로가기를 통해 수정 이전의
          게시글이 노출되는 등의 미흡한 예외처리 해결
        </li>
        <br />
        <li>
          Typescript로 변환시 장바구니 페이지에서 체크박스 컴포넌트가 오류를
          발생한 문제 해결
        </li>
        <br />
      </ul>
    ),
    techStack: (
      <>
        <span className="font-bold">
          * 기존 프로젝트에서 사용된 기술 스택 외에 본 프로젝트에서 사용된 기술
          스택을 나열합니다.
        </span>
        <div className="flex flex-wrap gap-3 justify-start mt-5 mb-3">
          <span>사용된 스크립트 언어 : </span>
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
          />
        </div>
        <ul className="font-light list-disc pl-10 break-keep mb-3">
          <li>
            타입스크립트 학습을 목적으로 한 프로젝트였으므로 모든 Javascript에
            타입을 명시하기 위해 필수
          </li>
        </ul>
        <div className="flex flex-wrap gap-3 justify-start">
          <span>개발 도구 : </span>
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"
          />
          <img
            className="transition-transform duration-300 hover:scale-110"
            src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
          />
        </div>
        <ul className="font-light list-disc pl-10 break-keep mb-3">
          <li>
            기존 프로젝트와 리팩토링 버전의 프로젝트 모두 React 기반의
            프로젝트였으므로 Netlify의 넉넉한 배포 제한을 활용해해 여러 차례
            배포테스트를 진행함함
          </li>
          <li>Github를 활용해 프로젝트를 관리하며 경과를 기록함</li>
        </ul>
      </>
    ),
    link: (
      <div className="font-light text-lg w-full overflow-">
        <div className="flex flex-col items-center sm:flex-row">
          웹페이지 배포 주소:
          <a
            target="_blank"
            href="https://barofarm-refactoredtk.netlify.app/"
            className="hover:underline hover:underline-offset-4 ml-[20px] sm:ml-3"
          >
            <div className="border w-fit p-3 inline-block  bg-[#95d89a] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#95d89a] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all whitespace-nowrap">
              바로 가기
              <img
                src="/BaroFarmLogo.png"
                alt="BaroFarmLogo icon"
                className="box-border h-[28px] inline ml-2 rounded-md border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:mt-3">
          Github 주소:
          <a
            target="_blank"
            href="https://github.com/Taiho1998/baroFarm"
            className="hover:underline hover:underline-offset-4 ml-[20px] sm:ml-3"
          >
            <div className="border w-fit p-3 inline-block group bg-[#2b3137] text-[#F5F5F5] xl:bg-transparent xl:text-black hover:bg-[#2b3137] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all">
              바로 가기
              <img
                src="/icons/github.png"
                alt="github icon"
                className="box-border h-[28px] inline ml-2 rounded-md  border border-white bg-white xl:border-0 xl:bg-transparent group-hover:border group-hover:border-white  group-hover:bg-white"
              />
            </div>
          </a>
        </div>
      </div>
    ),
  },
];

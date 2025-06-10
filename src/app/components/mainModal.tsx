"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainModal() {
  const path: string = usePathname();
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((item: IntersectionObserverEntry) => {
        if (item.isIntersecting) {
          item.target.classList.remove("opacity-0");
          item.target.classList.add("opacity-100");
        } else {
          item.target.classList.remove("opacity-100");
          item.target.classList.add("opacity-0");
        }
      });
    });

    let divOb: HTMLCollectionOf<Element> =
      document.getElementsByClassName("modal");
    let count: number = 1;
    // 아래로 스크롤 해보세요 부분을 제외한 div 태그들을 관찰
    for (let div of divOb) {
      if (count === 1) {
        count--;
      } else {
        observer.observe(div);
      }
    }
  }, [path]);

  return (
    <div className="hidden xl:block">
      {path === "/" && (
        <>
          <div className="modal my-[400px] text-center">
            <span className="text-2xl font-medium text-gray-dark hover:text-[#EE6533] transition-colors animate-pulse">
              아래로 스크롤 해보세요!
            </span>
            <img
              src="/icons/ScrollArrow.svg"
              alt="ScrollImage"
              className="rotate-90 size-6 mx-auto animate-bounce"
            />
          </div>

          <div className="modal mt-[600px] text-center opacity-0 transition-[opacity, transform] duration-500">
            <h1 className="text-4xl font-bold text-gray-dark mb-2">
              안녕하세요!
            </h1>
            <h1 className="text-3xl font-medium text-gray">Hello!</h1>
          </div>
          <div className="modal mt-[1000px] text-center opacity-0 transition-[opacity, transform] duration-500">
            <h1 className="text-3xl font-bold text-gray-dark mb-3">
              항상 새로운 것을 배워나가는 프론트엔드 웹 개발자, 고태호입니다.
            </h1>
            <h1 className="text-2xl font-medium text-gray">
              My name is Taiho Koh, a Front-end web developer never stop
              learning new skills!
            </h1>
          </div>
          <div className="modal mt-[1000px] mb-[300px] text-center opacity-0 transition-[opacity, transform] duration-500">
            <h1 className="text-3xl font-bold text-gray-dark mb-3">
              저의 웹 포트폴리오에 방문해주셔서 진심으로 감사드립니다!
            </h1>
            <h1 className="text-2xl font-medium text-gray">
              Thank you for visiting my Web Portfolio
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

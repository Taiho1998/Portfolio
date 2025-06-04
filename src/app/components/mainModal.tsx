"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainModal() {
  const path = usePathname();
  useEffect(() => {
    let observer = new IntersectionObserver((e) => {
      e.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.remove("opacity-0");
          item.target.classList.add("opacity-100");
        } else {
          item.target.classList.add("opacity-0");
          item.target.classList.remove("opacity-100");
        }
      });
    });

    let divOb = document.querySelectorAll("div");
    observer.observe(divOb[0]);
    observer.observe(divOb[1]);
    observer.observe(divOb[2]);
  }, [path]);

  return (
    <>
      {path === "/" && (
        <>
          <div className="mt-[1000px] text-center opacity-0 transition-opacity duration-1000">
            <h1>안녕하세요!</h1>
            <h1>Hello!</h1>
          </div>
          <div className="mt-[1000px] text-center opacity-0 transition-opacity duration-1000">
            <h1>
              항상 새로운 것을 배워나가는 프론트엔드 웹 개발자, 고태호입니다.
            </h1>
            <h1>
              My name is Taiho Koh, a Front-end web developer never stop
              learning new skills!
            </h1>
          </div>
          <div className="mt-[1000px] text-center opacity-0 transition-opacity duration-1000">
            <h1>저의 웹 포트폴리오에 방문해주셔서 진심으로 감사드립니다!</h1>
            <h1>Thank you for visiting my Web Portfolio</h1>
          </div>
        </>
      )}
    </>
  );
}

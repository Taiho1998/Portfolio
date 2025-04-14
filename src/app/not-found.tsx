export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="text-center">
      <span className="text-9xl block mb-5">&#x1F914;</span>
      <h1>잘못된 페이지입니다. 페이지 주소를 다시 확인해주십시오.</h1>
      <a href="/" className="hover:cursor-pointer hover:underline">
        메인 페이지로 돌아가기
      </a>
    </div>
  );
}

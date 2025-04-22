"use client";
import seedrandom from "seedrandom";
import { useState } from "react";

interface MusicData {
  title: string;
  author: string;
  idValue: string;
}

//  const musicSelections: MusicData[] = [
//   {
//     id: 1,
//     title: "Just the Two of Us",
//     author: "Bill Grover Washington, Jr. · Bill Withers",
//     idValue: "6POZlJAZsok",
//   },
//   {
//     id: 2,
//     title: "Lovely Day",
//     author: "Bill Withers",
//     idValue: "bEeaS6fuUoA",
//   },
//   {
//     id: 3,
//     title: "Disco Yes (feat. Poppy Ajudha)",
//     author: "Tom Misch",
//     idValue: "EXWOJvlDwbU",
//   },
//   {
//     id: 4,
//     title: "Lost In Paris (feat. GoldLink)",
//     author: "Tom Misch",
//     idValue: "QBL2m1PNqJM",
//   },
//   {
//     id: 5,
//     title: "Movie",
//     author: "Tom Misch ",
//     idValue: "hwKZxdhu95E",
//   },
//   {
//     id: 6,
//     title: "【鏡音リン】10年後の月光ステージ【セルフカバー】",
//     author: "GYARI",
//     idValue: "6gIXh0-e2R0",
//   },
//   {
//     id: 7,
//     title: "Capella",
//     author: "Meine Meinung",
//     idValue: "wabps4ruZ5w",
//   },
//   {
//     id: 8,
//     title: "ニライカナイ",
//     author: "Meine Meinung",
//     idValue: "sONoBSu6DJs",
//   },
//   {
//     id: 9,
//     title: "What's Going On",
//     author: "Marvin Gaye",
//     idValue: "ApthDWoPMFQ",
//   },
//   {
//     id: 10,
//     title: "Still A Friend Of Mine",
//     author: "Incognito",
//     idValue: "Wt2sWPIsKOY",
//   },
//   {
//     id: 11,
//     title: "Ain't No Mountain High Enough",
//     author: "Marvin Gaye",
//     idValue: "ABfQuZqq8wg",
//   },
//   {
//     id: 12,
//     title: "Got to Be Real",
//     author: "Cheryl Lynn",
//     idValue: "GLUCCewe_4c",
//   },
//   {
//     id: 13,
//     title: "Machi No Dorufin",
//     author: "Hamada Kingo",
//     idValue: "VDuDQNkSC6g",
//   },
//   {
//     id: 14,
//     title: "SHYNESS BOY",
//     author: "ANRI",
//     idValue: "50qu96dvhH8",
//   },
// ];

const today = new Date().toISOString().split("T")[0];
let scores: number;

export default function MusicSelection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [buttonText, setButtonText] = useState("오늘의 추천 음악은?");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");
  //   const [scores, setScores] = useState<number | null>(null);

  //   //dailyMusicScore 초기화 및 date 체크 후 날이 바뀌었으면 value 값을 변경
  //   useEffect(() => {
  //     const storedData = localStorage.getItem("dailyMusicScore");

  //     if (storedData) {
  //       const parsedData = JSON.parse(storedData);
  //       if (parsedData.date === today) {
  //         setScores(parsedData.value);
  //         //이미 존재하는 Date가 오늘 날짜와 동일할 경우 그대로 return
  //         return;
  //       }
  //     }
  //     //Data와 오늘 날짜가 다를 경우 랜덤 숫자 생성
  //     const newScore = Math.floor(Math.random() * musicSelections.length);
  //     localStorage.setItem(
  //       "dailyMusicScore",
  //       JSON.stringify({ date: today, value: newScore })
  //     );
  //     setScores(newScore);
  //   }, []);

  // const {data} = useQuery

  const clickHandler = async () => {
    setIsShow(!isShow);
    setButtonText(isShow ? "오늘의 추천 음악 열기" : "닫기");
    try {
      const res = await fetch("/api/useGoogleSheets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("API 호출 실패");

      const list = await res.json();
      const rng = seedrandom(today);
      scores = Math.floor(rng() * list.rowsLength);
      setTitle(list.data[scores].title);
      setAuthor(list.data[scores].author);
      setId(list.data[scores].idValue);
      setIsLoaded(true);
      return list;
    } catch (error) {
      console.error("Client fetch error:", error);
      throw new Error("몬가 문제가 생겨벌임....");
    }
  };

  if (!isLoaded && isShow) {
    return (
      <>
        <div className="w-fit mx-auto mt-20 text-center">
          <div className="loader"></div>
        </div>
        <p className="text-center mt-10">로딩 중입니다. 잠시만 기다려주세요!</p>
      </>
    );
  }

  return (
    <div
      id="MusicRecommend"
      className="mt-5 w-fit text-center mx-auto object-cover"
    >
      <button
        onClick={clickHandler}
        className="cursor-pointer border rounded-lg w-fit p-3 inline-block group hover:bg-[#EE6533] hover:text-[#F5F5F5] hover:scale-110 hover:transition-all not-hover:transition-all"
      >
        {buttonText}
      </button>
      {isShow && typeof scores === "number" && (
        <>
          <h3 className="font-semibold text-3xl">오늘의 추천 음악</h3>
          <a
            target="__blank"
            href={`https://www.youtube.com/watch?v=${id}`}
            className="block w-fit text-center"
          >
            <img
              src={`https://img.youtube.com/vi/${id}/0.jpg`}
              alt={`${title}`}
            />
            <h4>{title}</h4>
            <p>{author}</p>
          </a>
        </>
      )}
    </div>
  );
}

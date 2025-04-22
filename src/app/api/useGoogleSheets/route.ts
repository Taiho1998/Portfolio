import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import credential from "../../../../key.json";
import { NextResponse } from "next/server";

interface MusicData {
  title: string;
  author: string;
  idValue: string;
}
class Music implements MusicData {
  title: string;
  author: string;
  idValue: string;
  constructor(title: string, author: string, idValue: string) {
    this.title = title;
    this.author = author;
    this.idValue = idValue;
  }
}

async function loadGoogleDoc() {
  try {
    const Auth = new JWT({
      key: credential.private_key,
      email: credential.client_email,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    // Google Doc의 SheetId를 입력해주세요.
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || "", Auth);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.log(error);
  }
}

// 공통 : 해당하는 행(Row) 불러오기
export async function findRows() {
  try {
    const doc = await loadGoogleDoc(); // 문서 불러오기
    const sheet = doc!.sheetsByTitle["music_selection"]; // 문서에서 시트 이름에 해당하는 시트 선택하기
    await sheet.loadHeaderRow(1); // 헤더에 해당하는 INDEX 번호를 설정함
    const rows = await sheet.getRows(); // 해당 시트의 모든 rows를 불러옴
    const rowsLength = rows.length; // 총 Rows의 개수
    return { rowsLength, rows }; // 총 Rows 수, 현재 row의 Index 값, 현재 Sheet의 값을 전달함
  } catch (error) {
    console.error("Sheet find row Error:", error);
    throw new Error("Failed to find Row data.");
  }
}

export async function GET() {
  try {
    const { rowsLength, rows } = await findRows();
    const data = [];
    for (let i = 0; i < rowsLength; i++) {
      data.push(
        new Music(
          rows[i].get("title"),
          rows[i].get("author"),
          rows[i].get("idValue")
        )
      );
    }
    return NextResponse.json({ rowsLength, data });
  } catch (error) {
    console.error(error);
    throw new Error("몬가 문제가 생겨벌임....");
  }
}

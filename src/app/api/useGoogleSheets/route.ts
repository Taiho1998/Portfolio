import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import credential from "C:/Users/millk/Downloads/newKey.json";
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
    const doc = new GoogleSpreadsheet(
      "1zj8Vj5CTEGImXBUvpVxjouZ1bRoyT4FXlQAsUmrJbaw",
      Auth
    );
    console.log(doc);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.log(error);
  }
}

// 공통 : 해당하는 행(Row) 불러오기
async function findRows() {
  try {
    const doc = await loadGoogleDoc(); // 문서 불러오기
    if (!doc) throw new Error("몬가 문제가 생겼으니 해결하셈....");
    const sheet = doc.sheetsByTitle["music_selection"];
    await sheet.loadHeaderRow(1);
    const rows = await sheet.getRows();
    const rowsLength = rows.length;
    return { rowsLength, rows };
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

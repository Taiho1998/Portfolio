import Bass from "@/app/components/Bass";
import MusicSelection, { musicSelections } from "@/app/components/MusicSelect";
import Navigate from "@/app/components/Navigate";
import Piano from "@/app/components/Piano";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "기타",
};

export default function extraPage() {
  const { Client } = require("spotify-api.js");
  const client = new Client({
    token: {
      clientID: "2ddd7ae72a264184986e56626ca2e79a",
      clientSecret: "9f1e5ff3ffb04185908927edfdcbf0b1",
    },
    async onReady() {
      console.log(await client.tracks.get("id"));
    },
  });

  console.log(client.token);
  return (
    <>
      <Navigate />
      <div className="mt-[60px] overflow-hidden">
        {/* <h3 className="font-semibold text-3xl">저에 대해 더 알고 싶다면?</h3> */}
        <Piano />
        <MusicSelection />
      </div>
      <br />
      <br />
    </>
  );
}

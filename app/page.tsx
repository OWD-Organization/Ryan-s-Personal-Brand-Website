import fs from "fs";
import path from "path";
import HomeHeader from "@/components/HomeHeader";

export default function Home() {
  const filePath = path.join(process.cwd(), "content/pages/home.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <main>
      <HomeHeader headerText={data.headerText} />
    </main>
  );
}

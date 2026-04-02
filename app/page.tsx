import { promises as fs } from "fs";
import path from "path";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  if (process.env.NODE_ENV === "development") {
    const { client } = await import("@/tina/__generated__/client");
    const data = await client.queries.page(
      { relativePath: "home.json" },
      { fetchOptions: { cache: "no-store" } }
    );
    return <HomeClient {...data} />;
  }

  // Production: read JSON directly from filesystem
  const filePath = path.join(process.cwd(), "content/pages/home.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const pageData = JSON.parse(fileContent);

  return <HomeClient data={{ page: pageData }} query="" variables={{}} />;
}

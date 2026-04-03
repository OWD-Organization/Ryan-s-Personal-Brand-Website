import { client } from "@/tina/__generated__/client";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await client.queries.page(
    { relativePath: "home.json" },
    { fetchOptions: { cache: "no-store" } }
  );
  return <HomeClient {...data} />;
}

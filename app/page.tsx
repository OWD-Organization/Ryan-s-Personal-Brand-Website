import { promises as fs } from "fs";
import path from "path";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

const pageQuery = `
  query page($relativePath: String!) {
    page(relativePath: $relativePath) {
      ... on Document {
        _sys {
          filename
          basename
          hasReferences
          breadcrumbs
          path
          relativePath
          extension
        }
        id
      }
      ...PageParts
    }
  }
  fragment PageParts on Page {
    __typename
    hero { __typename tagline headline ctaText ctaSecondaryText }
    about { __typename eyebrow heading sub }
    perspective { __typename heading items { __typename text } ctaText }
    mystory { __typename heading timeline { __typename label text } bannerBody bannerCtaText }
    foryou { __typename heading items { __typename text } contrastText ctaText }
    howwork { __typename heading steps { __typename title text } ctaText }
    philosophy { __typename heading col1p1 pullquote col1p2 col2p1 col2p2 }
    finalcta { __typename eyebrow heading body ctaText }
  }
`;

export default async function Home() {
  if (process.env.NODE_ENV === "development") {
    const { client } = await import("@/tina/__generated__/client");
    const data = await client.queries.page(
      { relativePath: "home.json" },
      { fetchOptions: { cache: "no-store" } }
    );
    return <HomeClient {...data} />;
  }

  const filePath = path.join(process.cwd(), "content/pages/home.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const pageData = JSON.parse(fileContent);

  return (
    <HomeClient
      data={{ page: pageData }}
      query={pageQuery}
      variables={{ relativePath: "home.json" }}
    />
  );
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { env } from "../../env.mjs";

builder.init(env.NEXT_PUBLIC_BUILDERIO_API_KEY);

export const revalidate = 2;

interface PageProps {
  params: {
    page: string[];
  };
}

async function getPageContent(props: PageProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (props.params?.page?.join("/") || ""),
      },
    })
    .toPromise();
}

export async function generateStaticParams() {
  const pages = await builder.getAll("page", {
    fields: "data.url",
    options: { noTargeting: true },
  });

  return pages.map((page) => page.data?.url as string);
}

export default async function Page(props: PageProps) {
  const content = await getPageContent(props);

  return (
    <>
      <RenderBuilderContent content={content} />
    </>
  );
}

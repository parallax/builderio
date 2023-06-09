// Example file structure, app/[[...page]]/page.tsx
// You could alternatively use src/app/[[...page]]/page.tsx
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "../../components/builder";
import { env } from "../../env.mjs";

// Replace with your Public API Key
builder.init(env.NEXT_PUBLIC_BUILDERIO_API_KEY);

// Define the expected shape of the props
// object passed to the Page function
interface PageProps {
  params: {
    page: string[];
  };
}

// Async function called Page takes a single
// argument called props of type PageProps
export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to prevent infinite rendering loops
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  console.log("content", content);
  return (
    <>
      <Head>
        <title>{content?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} />
    </>
  );
}

"use client";

import { Builder, BuilderComponent, useIsPreviewing } from "@builder.io/react";
import dynamic from "next/dynamic";
import DefaultErrorPage from "next/error";

interface BuilderPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}

Builder.registerComponent(
  dynamic(() => import("./Header")),
  {
    name: "Header",
    inputs: [
      { name: "title", type: "text" },
      { name: "logo", type: "file", allowedFileTypes: ["jpeg", "png"] },
    ],
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
  }
);

export function RenderBuilderContent({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return <BuilderComponent content={content} model="page" />;
  }

  return <DefaultErrorPage statusCode={404} />;
}

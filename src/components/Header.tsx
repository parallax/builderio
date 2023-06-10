"use client";

import Image from "next/image";

export default function Header(props: { title: string; logo: string }) {
  return (
    <div className="bg-white flex w-full justify-center shadow-lg">
      <div className="flex w-full max-w-7xl items-center px-8">
        <div className="relative mr-3 h-[40px] w-[40px] my-2 rounded-lg overflow-hidden">
          <Image alt="header-image" fill src={props?.logo} />
        </div>
        <div className="flex-1 font-bold font-lg">{props?.title}</div>
      </div>
    </div>
  );
}

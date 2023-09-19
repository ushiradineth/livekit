import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-2 bg-zinc-900">
      <Link className="flex px-4 py-2 cursor-pointer items-center justify-center border bg-white outline-none no-underline rounded-2xl font-semibold text-sm text-black disabled:cursor-not-allowed disabled:bg-[#a1a1aa] hover:bg-[#a1a1a2]" href={"/livekit"}>
        Livekit
      </Link>
      <Link className="flex px-4 py-2 cursor-pointer items-center justify-center border bg-white outline-none no-underline rounded-2xl font-semibold text-sm text-black disabled:cursor-not-allowed disabled:bg-[#a1a1aa] hover:bg-[#a1a1a2]" href={"/jitsi"}>
        Jitsi
      </Link>
    </div>
  );
}

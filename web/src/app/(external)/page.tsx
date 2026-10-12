"use client";

import { useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);
  return (
    <main className="flex min-h-dvh items-center justify-center">
      <Link href="/dashboard">进入 ARTEX 在线演示</Link>
    </main>
  );
}

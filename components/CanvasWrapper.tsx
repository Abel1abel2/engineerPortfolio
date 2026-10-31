'use client';

import dynamic from "next/dynamic";

// Safely turn off Server-Side Rendering inside a Client Component file
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function CanvasWrapper() {
  return <Scene />;
}

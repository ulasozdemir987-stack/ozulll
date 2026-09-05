"use client";

import { TopBar } from "@/components/layout/TopBar";
import { CanlıBrowser } from "@/components/catalog/CanlıBrowser";

export default function CanlıPage() {
  return (
    <>
      <TopBar title="Canlı TV" />
      <CanlıBrowser />
    </>
  );
}

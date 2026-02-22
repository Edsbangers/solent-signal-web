"use client";

import dynamic from "next/dynamic";

const TheBeacon = dynamic(() => import("./TheBeacon"), { ssr: false });

export default function BeaconWrapper() {
  return <TheBeacon />;
}

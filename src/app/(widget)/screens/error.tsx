"use client";

import { useAtomValue } from "jotai";
import { AlertTriangleIcon } from "lucide-react";
import { errorMessageAtom } from "@/modules/widget/atoms/widget-atoms";

export default function WidgetErrorScreen() {
  const errorMessage = useAtomValue(errorMessageAtom);

  return (
    <>
      <header>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-2 font-semibold">
          <p className="text-3xl text-white">Hi there!</p>
          <p className="text-lg text-white">Let&apos;s get you started</p>
        </div>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-38 text-muted-foreground">
        <AlertTriangleIcon />
        <p className="text-sm">
          {errorMessage || "Invalid configuration"}
        </p>
      </div>
    </>
  );
}
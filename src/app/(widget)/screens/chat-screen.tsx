"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import { useSetAtom } from "jotai";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";

export default function WidgetChatScreen() {
   const setScreen = useSetAtom(screenAtom);

   const handleBack = () => {
    setScreen("selection");
  };
  return (
    <>
      <nav className="flex items-center justify-between">
        <Button
         onClick={handleBack}
          className="flex items-center gap-x-2 cursor-pointer"
          variant="transparent"
        >
          <ArrowLeftIcon />
          <p>Chat</p>
        </Button>
         <div>
          <Button 
          className="cursor-pointer"
          size="icon"
          variant="transparent"
          >
            <MenuIcon />
          </Button>
        </div>
      </nav>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-38 text-muted-foreground">
        <p className="text-sm">
          Chat Screen!
        </p>
      </div>
    </>
  );
}
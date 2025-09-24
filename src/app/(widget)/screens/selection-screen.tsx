/*
"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MessageSquareTextIcon } from "lucide-react";


export default function WidgetSelectionScreen() {

  return (
    <>
      <div className="flex flex-1 flex-col gap-y-4 p-4 overflow-y-auto">
        <Button 
        className="h-16 w-full justify-between"
        variant="outline"
        onClick={() => {}}
        >
          <div className="flex items-center gap-2">
            <MessageSquareTextIcon />
           <span>Start chat</span>
          </div>  
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  );
}
  */

"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, MessageSquareTextIcon } from "lucide-react";
import {
  errorMessageAtom,
  loadingMessageAtom,
  screenAtom,
  organizationIdAtom,
  conversationsAtom, // <-- Import this!
} from "@/modules/widget/atoms/widget-atoms";
import { useState } from "react";

async function createConversationAPI(organizationId: string) {
  const res = await fetch("/api/conversations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ organizationId }),
  });
  if (!res.ok) throw new Error("Failed to create conversation");
  return await res.json();
}

export default function WidgetSelectionScreen() {
  const setScreen = useSetAtom(screenAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setConversationId = useSetAtom(conversationsAtom)

  const organizationId = useAtomValue(organizationIdAtom); 
  const [isPending, setIsPending] = useState(false);

  const handleNewConversation = async () => {
    if (!organizationId) {
      setScreen("error");
      setErrorMessage("Missing Organization ID");
      return;
    }

    setIsPending(true);
    try {
      const conversation = await createConversationAPI(organizationId);
      setScreen("chat");
    } catch (error) {
      setScreen("error");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-y-4 p-4 overflow-y-auto">
        <Button
          className="h-16 w-full justify-between"
          variant="outline"
          onClick={handleNewConversation}
          disabled={isPending}
        >
          <div className="flex items-center gap-2">
            <MessageSquareTextIcon />
            <span>Start chat</span>
          </div>
          <ChevronRightIcon />
        </Button>
      </div>
    </>
  );
}
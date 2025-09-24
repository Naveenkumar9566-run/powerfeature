
"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { LoaderIcon } from "lucide-react";
import {
  errorMessageAtom,
  loadingMessageAtom,
  screenAtom,
} from "@/modules/widget/atoms/widget-atoms";
import { useEffect } from "react";

export default function WidgetLoadingScreen() {
  const loadingMessage = useAtomValue(loadingMessageAtom);
  const setLoadingMessage = useSetAtom(loadingMessageAtom);
  const setScreen = useSetAtom(screenAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);

  useEffect(() => {
    setLoadingMessage("Loading...");
    
    setScreen("selection");

    setErrorMessage("");
  }, [setLoadingMessage, setScreen, setErrorMessage]);

  return (
    <>
      <header>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-2 font-semibold">
          <p className="text-3xl text-white">Hi there!</p>
          <p className="text-lg text-white">Let&apos;s get you started</p>
        </div>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-38 text-muted-foreground">
        <LoaderIcon className="animate-spin" />
        <p className="text-sm">
          {loadingMessage || "Loading..."}
        </p>
      </div>
    </>
  );
}
  

////////////////////////////
/*

"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { LoaderIcon } from "lucide-react";
import {
  contactSessionIdAtomFamily,
  errorMessageAtom,
  loadingMessageAtom,
  screenAtom,
} from "@/modules/widget/atoms/widget-atoms";
import { useEffect, useState } from "react";

// Fake API validator type
type ValidContactSessionFn = (id: string) => Promise<{ valid: boolean }>;

interface WidgetLoadingScreenProps {
  contactId: string; // whatever uniquely identifies contact session atom
  validContactSession: ValidContactSessionFn;
}

export default function WidgetLoadingScreen({
  contactId,
  validContactSession,
}: WidgetLoadingScreenProps) {
  const loadingMessage = useAtomValue(loadingMessageAtom);
  const setLoadingMessage = useSetAtom(loadingMessageAtom);
  const setScreen = useSetAtom(screenAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const contactSessionId = useAtomValue(contactSessionIdAtomFamily(contactId));

  // Step state machine
  type InitStep = "session" | "done";
  const [step, setStep] = useState<InitStep>("session");
  const [sessionValid, setSessionValid] = useState<boolean | null>(null);

  // Step 1: validate session
  useEffect(() => {
    if (step !== "session") return;

    setLoadingMessage("finding contact session ID...");

    if (!contactSessionId) {
      setSessionValid(false);
      setStep("done");
      return;
    }

    setLoadingMessage("validating session...");

    validContactSession(contactSessionId)
      .then((result) => {
        setSessionValid(result.valid);
        setStep("done");
      })
      .catch(() => {
        setSessionValid(false);
        setStep("done");
      });
  }, [step, contactSessionId, validContactSession, setLoadingMessage]);

  // Step 2: decide next screen
  useEffect(() => {
    if (step !== "done") return;

    const hasValidSession = !!contactSessionId && sessionValid;

    if (hasValidSession) {
      setScreen("selection");
    } else {
      setErrorMessage("Invalid or expired session");
      setScreen("auth");
    }
  }, [step, contactSessionId, sessionValid, setScreen, setErrorMessage]);

  return (
    <>
      <header>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-2 font-semibold">
          <p className="text-3xl text-white">Hi there!</p>
          <p className="text-lg text-white">Let&apos;s get you started</p>
        </div>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-38 text-muted-foreground">
        <LoaderIcon className="animate-spin" />
        <p className="text-sm">{loadingMessage || "Loading..."}</p>
      </div>
    </>
  );
}
*/
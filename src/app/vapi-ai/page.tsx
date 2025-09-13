"use client";

import { Button } from "@/components/ui/button";
import { useVapi } from "@/modules/widget/hooks/use-vapi";

export default function Page(){
  const {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex items-center justify-center min-h-svh flex-col">
      <Button onClick={() => startCall()}>
        Start Call 
      </Button>
      <Button onClick={() => endCall()} variant="destructive">
        Start Call 
      </Button>
      <p>isConnected: {`${isConnected}`}</p>
      <p>isConnecting: {`${isConnecting}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <p>{JSON.stringify(transcript, null, 2)}</p>
    </div>
  )
}
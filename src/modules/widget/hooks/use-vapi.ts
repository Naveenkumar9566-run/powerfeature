import Vapi from "@vapi-ai/web";
import { useEffect, useState } from "react";

interface TranscriptMessage {
  role: "user" | "assistant";
  text: string;
};

export const useVapi = () => {
  const [vapi, setVapi] = useState<Vapi | null> (null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  useEffect(() => {
    //only for testing the Vapi API, otherwise customers will provide their own API keys
    const vapiInstance = new Vapi("95e68d1e-15f1-4830-bfc4-d76c96be856a");
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsConnected(true);
      setIsConnecting(false);
      setTranscript([])
    });

    vapiInstance.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });

    vapiInstance.on("speech-end", () => {
      setIsSpeaking(false);
    });

     vapiInstance.on("error", (error) => {
      console.log(error, "VAPI_ERROR");
      setIsConnecting(false);
    });

    vapiInstance.on("message", (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setTranscript((prev) => [
          ...prev,
          {
            role: message.role === "user" ? "user" : "assistant",
            text: message.transcript,
          }
        ])
      }
    });

    return () => {
      vapiInstance?.stop();
    }
  },[]);

  const startCall =  () => {
    setIsConnecting(true);

    if (vapi) {
       //only for testing the Vapi API, otherwise customers will provide their own Assistant IDs
      vapi.start("ff0554b9-3f7c-4940-b10d-6a8da608b7d3");
    }
  };

  const endCall = () => {
    if (vapi) {
       vapi.stop();
    }
  };

  return {
    isSpeaking,
    isConnecting,
    isConnected,
    transcript,
    startCall,
    endCall,
  }
}
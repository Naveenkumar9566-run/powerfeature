"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
 
  const handleScreen = () => {
    router.push("/screens");
  }

  const handleClick = () => {
    router.push("/conversation");
  };

  return (
    <div className="flex items-center justify-center min-h-screen gap-5">
      <Button onClick={handleClick}>Get Started</Button>
      <div>
        <Button onClick={handleScreen}>Get Start Screen</Button>
      </div>
    </div>
  );
}

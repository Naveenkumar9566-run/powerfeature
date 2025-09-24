"use client";
import React from "react";
import { useUser } from "@clerk/nextjs"
import { BarLoader} from "react-spinners";
import { usePathname } from "next/navigation";
import { useAtomValue, useSetAtom } from "jotai";
import { screenAtom, organizationIdAtom } from "@/modules/widget/atoms/widget-atoms";
import WidgetErrorScreen from "./screens/error";
import WidgetScreen from "./screens/page";
import WidgetLoadingScreen from "./screens/loading-screen";
import WidgetSelectionScreen from "./screens/selection-screen";
import { useOrganization } from "@clerk/nextjs";
import WidgetChatScreen from "./screens/chat-screen";


const navItems = [
  {href: "/screens",  label: ""},
]


const Layout = ({children} : {children: React.ReactNode}) => {
  const {isLoaded} = useUser();
  const pathname = usePathname();
  const screen = useAtomValue(screenAtom);

  const setOrganizationId = useSetAtom(organizationIdAtom);

  
  React.useEffect(() => {
    setOrganizationId("org_32zr4NPma78c6ZGi6mT5pthXOsT"); 
  }, [setOrganizationId]);


    const screenComponents = {
      //loading: <WidgetLoadingScreen contactId={contactId} validContactSession={validContactSession} />,
      loading: <WidgetLoadingScreen />,
      error: <WidgetErrorScreen />,
      auth: <WidgetScreen />,
      voice: <p>TODO: Voice</p>,
      inbox: <p>TODO: Inbox</p>,
      selection: <WidgetSelectionScreen />,
      chat: <WidgetChatScreen />,
      contact: <p>TODO: Contact</p>,
    }

  return (
   <>
   {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}
      <div>
      <main className="flex-1 overflow-y-auto p-o md:p-2">
        <header className="flex justify-center items-center mb-0">
          <h2 className="text-xl md:text-xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">
             {navItems.find((item) => item.href === pathname)?.label || ""}
          </h2>
        </header>
         
        {screenComponents[screen]}
      </main> 
      </div>
   </>
  )
}

export default Layout;

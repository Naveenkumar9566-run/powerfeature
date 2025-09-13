"use client"

import { useUser } from "@clerk/nextjs"
import { BarLoader} from "react-spinners";
import {
  CreditCardIcon,
  InboxIcon,
  LayoutDashboardIcon,
  LibraryBigIcon,
  Mic,
  PaletteIcon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {href: "/conversation", label: "Conversation", icon: InboxIcon},
  {href: "/knowledge-base", label: "Knowledge Base", icon: LibraryBigIcon},
  {href: "/widget-customization", label: "Widget Customization", icon: PaletteIcon},
  {href: "/integration", label: "Integration", icon: LayoutDashboardIcon},
  {href: "/vice-assistant", label: "Vice Assistant", icon: Mic},
  {href: "/plans-billing", label: "Plans & Billing", icon: CreditCardIcon},
]

const AppLayout = ({children} : {children:React.ReactNode}) => {
  const {isLoaded} = useUser();
  const pathname = usePathname();

  return (
    <>
    {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}
    <div className="flex flex-col h-screen bg-blue-50 md:flex-row">
      <aside className="hidden md:block w-64 bg-white">
        <nav className="mt-8">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                 href={item.href}
                 className={`flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 
                  ${pathname === item.href ? "bg-blue-100" : ""}`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">
            {navItems.find((item) => item.href === pathname)?.label || "Conversation"}
          </h2>
        </header>
        {children} 
      </main> 

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
         <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                 href={item.href}
                 className={`flex flex-col items-center py-2 px-4 ${pathname === item.href ? "text-blue-600" : "text-gray-600"}`}
                >
                  <item.icon className="w-5 h-5" />
                {item.label}
                </Link>
              </li>
            ))}
          </ul>
      </nav>       
    </div>
    </>
  )
}

export default AppLayout
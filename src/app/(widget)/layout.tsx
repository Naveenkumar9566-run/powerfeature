"use client";

import { useUser } from "@clerk/nextjs"
import { BarLoader} from "react-spinners";
import { usePathname } from "next/navigation";

const navItems = [
  {href: "/screens",  label: ""},
]


const Layout = ({children} : {children: React.ReactNode}) => {
  const {isLoaded} = useUser();
  const pathname = usePathname();

  return (
   <>
   {!isLoaded && <BarLoader width={"100%"} color="#36d7b7" />}
      <div>
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex justify-center items-center mb-8">
          <h2 className="text-3xl md:text-6xl gradient-title pt-2 md:pt-0 text-center md:text-left w-full">
             {navItems.find((item) => item.href === pathname)?.label || ""}
          </h2>
        </header>
        {children} 
      </main> 
      </div>
   </>
  )
}

export default Layout;

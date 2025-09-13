import Image from "next/image";
import Link from "next/link";
import { checkUser } from "@/lib/checkUser";
import OrganizationGuard from "./organization-guard";

const Header = async () => {
  await checkUser();

  
  return ( 
    <nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2 border-blue-600 "> 
      <Link href={"/"} className="flex items-center">
      <Image src="/logo.png" alt="" width="40" height="40" className="h-16 w-auto" />
      </Link>
      <div className="flex items-center gap-4">
        <OrganizationGuard />
      </div>
    </nav>
  )
}

export default Header;
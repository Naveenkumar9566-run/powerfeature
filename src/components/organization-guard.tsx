import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const OrganizationGuard = () => {
  return (
    <div>
      <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton> 
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
  )
}

export default OrganizationGuard
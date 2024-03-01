import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <div>
                <div>
                    <p>Clerk + React + React Router App</p>
                </div>
                <SignedIn>
                    <UserButton afterSignOutUrl="/auth/sign-in" />
                </SignedIn>
                <SignedOut>
                    <NavLink to="/auth/sign-in">Sign In</NavLink>
                </SignedOut>
            </div>
        </header>
    );
};

export default Navbar;

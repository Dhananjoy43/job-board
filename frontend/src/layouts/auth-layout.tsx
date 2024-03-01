import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayout() {
    const { userId, isLoaded } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!userId) {
            navigate("/auth/sign-in");
        }
    }, []);

    if (!isLoaded) return "Loading...";

    return (
        <section className="flex items-center justify-center h-screen w-full">
            <Outlet />;
        </section>
    );
}

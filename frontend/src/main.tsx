import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Import the layouts
import RootLayout from "./layouts/root-layout";
import AuthLayout from "./layouts/auth-layout";
import DashboardLayout from "./layouts/dashboard-layout";

// Import the components
import IndexPage from "./routes";
import ContactPage from "./routes/contact";
import SignInPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import DashboardPage from "./routes/dashboard.invoices";
import InvoicesPage from "./routes/dashboard.invoices";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/", element: <IndexPage /> },
            { path: "/contact", element: <ContactPage /> },
            {
                element: <AuthLayout />,
                path: "auth",
                children: [
                    { path: "/auth/sign-in", element: <SignInPage /> },
                    { path: "/auth/sign-up", element: <SignUpPage /> },
                ],
            },
            {
                element: <DashboardLayout />,
                path: "dashboard",
                children: [
                    { path: "/dashboard", element: <DashboardPage /> },
                    { path: "/dashboard/invoices", element: <InvoicesPage /> },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

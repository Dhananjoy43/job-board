import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
    return (
        <div>
            <h1>This is the index page</h1>
            <Button>Click Me</Button>
            <div>
                <ul>
                    <li>
                        <Link to="/auth/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/auth/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

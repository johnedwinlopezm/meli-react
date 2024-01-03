import HomeLayout from "./layout";
import { Outlet } from "react-router-dom";

export default function Home() {

    
    return (
        <HomeLayout >
            <Outlet />
        </HomeLayout>
    );
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}

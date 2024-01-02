import { useState, useTransition } from "react";
import HomeLayout from "./layout";
import List from "../list/page";
import Description from "../description/page";

export default function Home() {

    const [page, setPage] = useState('/');
    const [isPending, startTransition] = useTransition();

    function navigate(url:string) {
        startTransition(() => {
            setPage(url);
        });
    }

    let content;
    if (page === '/items') {
        content = (
            <div/>
        );
    } else if (page === '/items/description/:idProduct') {
        content = (
        <Description/>
        );
    }
    return (
        <HomeLayout isPending={isPending}>
            {content}
        </HomeLayout>
    );
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}

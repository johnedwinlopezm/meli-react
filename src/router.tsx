import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/page";
import List from "./list/page";
import './App.sass';
import { Suspense } from "react";
import Description from "./description/page";

export default function Router() {
    return (
        <Suspense fallback={<BigSpinner />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="items" element={<List />} />
                        <Route path="items/:id" element={<Description />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}



import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/page";
import './App.sass';
import React, { Suspense } from "react";

const List = React.lazy(() => import('./list/page'));
const Description = React.lazy(() => import('./description/page'));


export default function Router() {
    return (
        <Suspense fallback={<BigSpinner />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="items" element={
                            <Suspense fallback={<BigSpinner />}>
                                <List />
                            </Suspense>
                        } />
                        <Route path="items/:id" element={
                            <Suspense fallback={<BigSpinner />}>
                                <Description />
                            </Suspense>
                        }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}



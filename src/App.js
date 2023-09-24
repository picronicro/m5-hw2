import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import PostCreationPage from "./pages/PostCreationPage";
import PostsPage from "./pages/PostsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PostCreationPage />} />
                <Route path="posts" element={<PostsPage />} />
            </Route>
        </Routes>
    );
}

export default App;

import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";

function PostsPage(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get("https://dummyjson.com/posts")
                .then(resp => setPosts(resp.data.posts))
                .catch(err => console.error("bruh. an error occured " + err))
        }

        getPosts()
    }, [])

    return (
        <div>
            {posts.map(p => <div key={p.id}>
                <h2>{p.title}</h2>
                <p>{p.body}</p>
            </div>)}
        </div>
    );
}

export default PostsPage;
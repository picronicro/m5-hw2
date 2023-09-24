import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function PostCreationPage(props) {
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        e.target[2].disabled = true
        e.target[2].innerHTML = "submitting"
        await axios.post("https://dummyjson.com/posts/add", {
            title: e.target.title.value,
            body: e.target.body.value,
            userId: 69
        })
            .then(resp => {
                console.log(resp)
                navigate("/posts")
            })
            .catch(err => {
                console.error("bruh. an error occured " + err)
                e.target[2].disabled = false
                e.target[2].innerHTML = "check logs"
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="title" />
                <textarea name="body" placeholder="message" />
                <button type="submit" >submit</button>
            </form>
        </div>
    );
}

export default PostCreationPage;
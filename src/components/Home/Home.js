import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <div>
            {
                posts.map(post => <Posts post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Home;
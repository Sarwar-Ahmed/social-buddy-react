import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Header from '../Header/Header';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    return (
        <Container maxWidth="sm">
            <Header />
            {
                posts.map(post => <Posts post={post} key={post.id}/>)
            }
        </Container>
    );
};

export default Home;
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postDetails} = useParams;
    return (
        <div>
            <h2>This is post details</h2>
        </div>
    );
};

export default PostDetails;
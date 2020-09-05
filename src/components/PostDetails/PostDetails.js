import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Container } from '@material-ui/core';
import Header from '../Header/Header';

const useStyles = makeStyles({
  root: {
    maxWidth: 768,
  },
});

const PostDetails = () => {
    const {postDetails} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, []);
    

    const {userId, id, title, body} = post;
    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Header />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            User Id No : {userId}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h6">
                            Post No: {id}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div>
                <Comments postId={post}/>
            </div>
        </Container>
    );
};

export default PostDetails;
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import fakeData from '../../fakeData/fakeData';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 768,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
      minWidth: 200,
  }
});
const Comments = (props) => {
    const classes = useStyles();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, []);
    const postComments = comments.filter(cmt => cmt.postId === props.postId.id );
    const fakeDataImage = fakeData.slice(0, postComments.length);
    // console.log(fakeDataImage)
    return (
        <div>
            <h3>Comments</h3>
            <Card className={classes.root}>
            
            {
                postComments.map(comnt =>
                        <CardContent>
                            {/* <CardMedia className={classes.media} image="/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile"/>  */}
                            <div>
                                <Typography variant="h5" component="h2">
                                    {comnt.name}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {comnt.email}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {comnt.body}
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </div>
                    </CardContent>
                )
            }
            
            </Card>
        </div>
    );
};

export default Comments;
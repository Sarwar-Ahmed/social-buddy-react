import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 768,
  },
});

const Posts = (props) => {
    const {title, body} = props.post;
    const classes = useStyles();
    // const history = useHistory;

    // const showPostDetailAndComment = () =>{
    //     history.push(`/post/:postDetails`);
    // }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                /> */}
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/post/:postDetails`}>
                    <Button size="small" color="primary">
                    Read More
                    </Button>
                </Link>
                <Link to={`/post/:postDetails`}>
                    <Button size="small" color="primary">
                    Comments
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Posts;
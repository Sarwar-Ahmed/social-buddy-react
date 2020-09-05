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
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles({
  grow: {
    flexGrow: 0.5,
  },
});

const Posts = (props) => {
    const {title, body, id} = props.post;
    const classes = useStyles();

    const history = useHistory();

    const showPostDetailAndComment = () =>{
        history.push(`/post/${id}`);
    }

    return (
        <div>
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
                            <Button size="small" color="primary" onClick={showPostDetailAndComment}>
                            ... See More
                            </Button>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    <ThumbUpIcon />
                    </Button>
                    
                    <div className={classes.grow} />
                    <Button size="small" color="primary" onClick={showPostDetailAndComment}>
                    Comments
                    </Button>
                    <div className={classes.grow}/>
                    
                    <Button size="small" color="primary">
                    <ShareIcon />
                    </Button>
                    
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;

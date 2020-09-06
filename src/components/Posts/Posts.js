import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, Link } from 'react-router-dom';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


const useStyles = makeStyles({
  grow: {
    flexGrow: 0.5,
  },
  root: {
    display: 'flex',
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
            <Card>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.root}>
                            <div>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.0-9/80964197_2306642596101934_4455259405381795840_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeEAMTw_IBwN_W0_B_ua5YbFTnqAe4bxA0xOeoB7hvEDTC-kr3Q0vlk-mGeDSL5bcAiaI-_Wt0E7JfSNtrm36ZkM&_nc_ohc=3diih486VGAAX_4iLKy&_nc_ht=scontent.fdac2-1.fna&oh=5c849f7566dc761db9f056a8be6bd9e0&oe=5F7B394E" />
                                </StyledBadge>
                            </div>
                            <div>
                                <Typography gutterBottom variant="h5" component="h2">
                                {title}
                                </Typography>
                            </div>
                        </div>
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
                    <ThumbUpIcon />Like
                    </Button>
                    
                    <div className={classes.grow} />
                    <Button size="small" color="primary" onClick={showPostDetailAndComment}>
                    <ChatBubbleOutlineIcon />Comment
                    </Button>
                    <div className={classes.grow}/>
                    
                    <Button size="small" color="primary">
                    <ShareIcon />Share
                    </Button>
                    
                </CardActions>
            </Card>
        </div>
    );
};

export default Posts;

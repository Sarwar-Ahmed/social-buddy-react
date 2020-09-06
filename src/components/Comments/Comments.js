import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import fakeData from '../../fakeData/fakeData';
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
  root: {
    display: 'flex',
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
    return (
        <div>
            <h3>Comments</h3>
            <Card>
            
            {
                postComments.map(comnt =>
                        <CardContent>
                            
                            <div>
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
                                        {
                                            fakeData.map(fakeImage =>
                                                fakeImage.id === comnt.id && <Avatar alt="Remy Sharp" src={fakeImage.img} />
                                                )
                                        }
                                        </StyledBadge>
                                    </div>
                                   <div>
                                        <Typography variant="h5" component="h2">
                                            {comnt.name}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {comnt.email}
                                        </Typography>
                                   </div>
                                </div>
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
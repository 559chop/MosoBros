import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../image-container/ImageContainer';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    }
}));

const Dashboard = props => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <ImageContainer />
        </div>
    )
}


export default Dashboard

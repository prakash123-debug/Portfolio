import React from 'react'
import Typed from 'react-typed';
import {
    Typography,Avatar,Grid,Box
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
import avatar from '../avatar.png'


const useStyles=makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1)
    },
    title:{
        color:"tomato"
    },
    subTitle:{
        color:"tan",
        marginBottom:"3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zindex:1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify = "center">
            <Avatar className={classes.avatar} src={avatar} alt="Russel"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={[
                    "prakash acharya"
                ]} typeSpeed={40} ></Typed>
            </Typography>
    
            <Typography className={classes.subTitle}  variant="h5">
                <Typed strings={[
                    "web design" ,"web development","Mern Stack"
                ]} 
                typeSpeed={40}
                backSpeed={60}
                loop
                
                ></Typed>
            </Typography>
         
        </Box>
    )
}

export default Header

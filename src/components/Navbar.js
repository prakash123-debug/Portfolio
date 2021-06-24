import React,{useState} from 'react'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import avatar from '../avatar.png';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail


} from '@material-ui/icons'

import Footer from './Footer'; 



//css styles
const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avtar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem : {
        color: "tan"
    }

}));

const menuItems = [
    {
        listIcon: <Home />,
        ListText: "Home",
        ListPath:"/"
    },
    {
        listIcon: <AssignmentInd />,
        ListText: "Resume",
        ListPath:"resume"
    },
    {
        listIcon: <Apps />,
        ListText: "Portfolio",
        ListPath:"portfolio"

    }
]

function Navbar() {
    const classes = useStyles();

    const [state,setState]=useState({
        right:false
    });
    const toggleSlider = (slider,open)=>()=>{
        setState({...state,[slider]:open})
    }



    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick = {toggleSlider("right",true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}></Typography>
                        <MobilRightMenuSlider anchor="right" open={state.right} onClose = {toggleSlider("right",false)}>
                            <Box onClick ={toggleSlider("right",false)} className={classes.menuSliderContainer} component="div">
                                    <Avatar className={classes.avtar} src={avatar} alt="Russel Crowe" />
                                    <Divider />
                                    <List>
                                        {menuItems.map((LsItem, key) => {
                                            return (
                                                <>
                                                    <ListItem button key={key} component={Link} to={LsItem.ListPath}>
                                                        <ListItemIcon className={classes.listItem}>
                                                            {LsItem.listIcon}
                                                        </ListItemIcon>
                                                        <ListItemText className={classes.listItem} primary={LsItem.ListText} />
                                                    </ListItem>
                                                </>
                                            )
                                        })}
                                    </List>
                                </Box>
                                <Footer/>

                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}

export default Navbar

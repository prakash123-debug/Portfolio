import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import {Code} from '@material-ui/icons'
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: '#233'
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    expirence: {
        color: "tomato"
    }
}))

const TimelineDatas = [
    {
        title:"HTML & CSS",
        date:"2018",
        icon:<Code/>,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        shortName:"Company name where designed"
    },
    {
        title:"JAVASCRIPT & SQL QUERY",
        date:"2019",
        icon:<Code/>,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        shortName:"Company name where designed"
    },
    {
        title:"LARAVEL",
        date:"2020",
        icon:<Code/>,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        shortName:"Company name where designed"
    },
    {
        title:"NODEJS AND REACTJS",
        date:"2021",
        icon:<Code/>,
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        shortName:"Company name where designed"
    },

]
const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar></Navbar>
            <Box component="header"  className={classes.mainContainer}>
                <Typography className={classes.expirence} variant="h4" align="center">
                    working Expirence
                </Typography>
                <Box component="div">
                    <Timeline align="alternate">
                        {
                            TimelineDatas.map((timelineData,index)=>{
                                return(
                                    <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography style={{color:"tomato"}}>
                                            {timelineData.date}
                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>
                                            {timelineData.icon}
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">
                                                {timelineData.title}
                                            </Typography>
                                            <Typography style={{ color: "tomato" }} component="p">
                                              {timelineData.shortName}
                                            </Typography>
                                            <Typography>
                                                {timelineData.description}
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                )
                            })
                        }
                      
                    </Timeline>
                </Box>
            </Box>


        </>
    )
}

export default Resume

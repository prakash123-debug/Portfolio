import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Box,Grid,Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import Navbar from './Navbar';
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";

const useStyles = makeStyles({
    mainContainer:{
        background:"#233",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto"
    }
})

const PortfolioData =[
    {
        images:project1,
        title:"Project1",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        images:project2,
        title:"Project2",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        images:project3,
        title:"Project3",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        images:project4,
        title:"Project4",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        images:project5,
        title:"Project5",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    }
]
const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
        <Box component="div" className={classes.mainContainer}>
        <Navbar/>
        <Grid container justify="center" alignItems="center">
            {
                PortfolioData.map((PortfolioDatas,index)=>{
                    return(
                        <Grid item xs={12} sm = {8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="project1"
                                height="140"
                                image={PortfolioDatas.images}
                                / >
                          <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {PortfolioDatas.title}
                                    </Typography> 
                                    <Typography  variant="body2"  color="textSecondary" component="p">
                                        {PortfolioDatas.description}
                                    </Typography> 
                            </CardContent>
        
                            </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                  </CardActions>
                        </Card>
                      </Grid>

                    )
                })

            }
          
        </Grid>
        </Box>
        </>
    )
}

export default Portfolio

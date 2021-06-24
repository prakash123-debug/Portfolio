import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import { BottomNavigation,BottomNavigationAction } from '@material-ui/core';

const useStyle = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:250
        },
        "& .MuiSvgIcon-root":{
            fill:"tan",
            "&:hover":{
                fill:"tomato",
                fontSize:"1.8rem"
                 
            }
        }

    }

})

const Footer = () => {
    const classes =useStyle()
    return (
      <BottomNavigation width="auto" style={{background:"#222"}}>
          <BottomNavigationAction 
            className={classes.root}
          style={{padding:0}}
          icon={<Facebook/>}
          
          />
            <BottomNavigationAction 
            className={classes.root}
          style={{padding:0}}
          icon={<Instagram/>}
          
          />
            <BottomNavigationAction 
            className={classes.root}
          style={{padding:0}}
          icon={<Twitter/>}
          
          />
      </BottomNavigation>
    )
}

export default Footer

import React from "react";
import { Card, CardContent, Grid, Typography, Button, Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import uk from "./img/ukflag.png";
import bell from "./img/bell.png";
import profile from "./img/profile.png";
import { Height } from "@mui/icons-material";

function Nav() {



    return(

        <div>
            <Box style={{borderRadius:'0.2px',borderColor:'grey', backgroundColor:'#fff', height:'70px'}} >
                <CardContent  >
                <Grid container justifyContent="flex-end">
                    <Button><img src={bell} style={{width:'20px'}} /></Button>
                    <Button><img src={uk} style={{width:'25px',borderRadius:'10px',marginRight:'6px'}}/><Typography style={{fontSize:'15px'}}>English</Typography><ArrowDropDownIcon /></Button>
                    <Button><img src={profile} style={{width:'25px',marginRight:'6px'}}/><Typography style={{fontSize:'15px'}}>Joy Tailors</Typography></Button>
                </Grid>
                </CardContent>
            </Box>
        </div>

    );
};

export default Nav;
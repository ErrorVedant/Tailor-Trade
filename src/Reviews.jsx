import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import SideBarNav from "./SideBarNav";
import reviews from "./data/reviews.json";
import stars from "./img/stars.png";
import Nav from "./Nav";

function Reviews() {


    return(

        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{padding:'0px'}}>
            <Grid container>
                <Card style={{width:'20%',height:'1000px'}}>
                <Grid item >
                    <SideBarNav />
                </Grid>
                </Card>
                <Card style={{width:'80%',height:'100%', backgroundColor:'#F5F6FA'}}>
                <Grid item>
                <Nav />
                <Typography style={{fontSize:'210%',fontWeight:700,marginTop:'20px',textAlign:'left',marginLeft:'30px', marginBottom:'30px'}}>Reviews</Typography>

                {reviews.map((review) => (
                <Card key={review.id} style={{marginBottom:'30px', padding:'20px', marginLeft:'40px',marginRight:'40px',borderRadius:'15px',height:'100%'}}>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div>
                    <Typography style={{textAlign:'left',fontSize:'120%',fontWeight:600, marginBottom:'20px'}}>{review.name}</Typography>
                    </div>
                    <div>
                        <img src={stars} style={{marginRight:'20px',width:'100px',marginTop:'0px'}}/>
                    </div>
                    </div>
                    <Typography style={{paddingLeft:'20%',paddingRight:'20%',marginBottom:'20px'}}>{review.description}</Typography>
                    <Typography style={{textAlign:'left'}}>{review.date}</Typography>
                </Card>
                ))}
                </Grid>
                </Card>
            </Grid>
            </CardContent>
        </div>
    );

};

export default Reviews;
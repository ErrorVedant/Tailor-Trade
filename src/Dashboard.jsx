import React from "react";
import fontcolorTheme from "./fontcolorTheme";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import SideBarNav from "./SideBarNav";
import increase from "./img/increase.png";
import decrease from "./img/decrease.png";
import users from "./img/users.png";
import sales from "./img/sales.png";
import order from "./img/order.png";
import pending from "./img/pending.png";
import LinePlot from "./LinePlot";
import DealsDetails from "./DealsDetails";
import graph from "./img/graph.png";
import Nav from "./Nav";

function Dashboard() {


    return(
        <div style={{ overflowY: 'auto' }}>
            <CardContent style={{padding:'0px'}}>
            <Grid container>
                <Card style={{width:'18%',height:'1600px'}}>
                <Grid item >
                    <SideBarNav />
                </Grid>
                </Card>
                <Card style={{width:'82%',height:'100%', backgroundColor:'#f5f8fe'}}>
                <Grid item>
                    <Nav />
                    <Typography style={{fontSize:'210%',fontWeight:700,marginTop:'20px',textAlign:'left',marginLeft:'30px', marginBottom:'30px'}}>Dashboard</Typography>
                    
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <Card style={{width:'22%',borderRadius:'15px', marginLeft:'2.4%'}}>
                        <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Users</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>409</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={users} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={decrease} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'red',fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:'#00B69B',fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                   <Card style={{width:'22%',borderRadius:'15px', marginLeft:'2.4%'}}>
                        <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Orders</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>1029</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={sales} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:fontcolorTheme.palette.greeen.main ,fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:fontcolorTheme.palette.greeen.main ,fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                   <Card style={{width:'22%',borderRadius:'15px', marginLeft:'2.4%'}}>
                        <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Sales</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>$9000</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={order} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:fontcolorTheme.palette.greeen.main ,fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:fontcolorTheme.palette.greeen.main ,fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card style={{width:'22%',borderRadius:'15px', marginLeft:'2.4%'}}>
                        <CardContent>
                            <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between'}}>
                            <div>
                                <div style={{display:"flex", flexDirection:'column'}}>
                                <Typography style={{textAlign:'left',marginBottom:'20px',fontWeight:400,fontSize:'105%'}}>Total Users</Typography>
                                <Typography style={{textAlign:'left', fontSize:'160%',fontWeight:600,marginBottom:'40px'}}>24</Typography>
                                </div>
                            </div>
                            <div>
                                <img src={pending} style={{width:'60px',marginTop:'10px'}} />
                            </div>
                            </div>
                            {/* <div style={{display:'flex',alignContent:'start',justifyContent:'space-between',marginBottom:'-15px'}}>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:fontcolorTheme.palette.greeen.main ,fontWeight:500,fontSize:'95%'}}>Monthly</Typography></div>
                                </div>
                                <div style={{display:'flex'}}>
                                <div><img src={increase} style={{width:'25px', marginRight:'5px'}} /></div>
                                <div><Typography style={{color:fontcolorTheme.palette.greeen.main ,fontWeight:500,fontSize:'95%'}}>Yearly</Typography></div>
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                    </div>
                

                {/*sales details */}
                <Card style={{width:'95%',borderRadius:'15px', marginLeft:'2.4%', marginTop:'35px'}}>
                    <CardContent>
                    <Typography style={{textAlign:'left', fontSize:'145%',fontWeight:600,marginTop:'5px', marginLeft:'10px'}}>Sales Details</Typography>
                        <img src={graph}  style={{width:'90%'}}/>
                    </CardContent>
                </Card>

                {/*deals details */}
                <Card style={{width:'95%',borderRadius:'15px', marginLeft:'2.4%', marginTop:'35px', marginBottom:'40px'}}>
                    <CardContent>
                    <Typography style={{textAlign:'left', fontSize:'145%',fontWeight:600,marginTop:'5px', marginLeft:'10px',marginBottom:'20px'}}>Deals Details</Typography>
                    <DealsDetails />
                    </CardContent>
                </Card>

                </Grid>
                </Card>
            </Grid>
            </CardContent>
        </div>
    );
};

export default Dashboard;


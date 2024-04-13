import React , {useState} from "react";
import { Card, Grid, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation} from "react-router-dom";
import logo from "./img/logo.png";
import dashboard from "./img/dashboard.png";
import review from "./img/reviews.png";
import client from "./img/clients.png";
import track from "./img/checklist.png";
import order from "./img/orders.png";
import fontcolorTheme from "./fontcolorTheme";

function SideBarNav() {

    const [selectedButton, setSelectedButton] = useState('dashboard');
    const navigate = useNavigate();
    

    const handleButtonClick = (buttonname, path) => {
        if (selectedButton !== buttonname){
        setSelectedButton(buttonname);
        navigate(path);
        }
    }

    return (
        <div style={{ textAlign: 'left' }}>
            <img src={logo} style={{ width: '180px', marginLeft: '50px', marginBottom: '10px', marginTop: '25px' }} />
            <hr />
            <nav>
                <ul style={{ listStyle: 'none', marginTop: '40px' }}>
                    <li>
                        <Button onClick={() => handleButtonClick('dashboard',"/")} style={{ backgroundColor: selectedButton === 'dashboard' ? "#C3E0EA" : '#fff', color: '#000', width: '80%',padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'13px' }}>
                                 <img src={dashboard} style={{ width: '20px' }} />
                                <Typography style={{ fontSize: '112%', marginLeft: '15px',textTransform: 'none' }}>Dashboard</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('addneworders',"/addneworders")} style={{ backgroundColor: selectedButton === 'addneworders' ? "#C3E0EA" : '#fff', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'13px' }}>
                                <img src={order} style={{ width: '20px', marginTop: '3px' }} />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px',textTransform: 'none' }}>Add New Orders</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('reviews',"/reviews")} style={{ backgroundColor: selectedButton === 'reviews' ? "#C3E0EA" : '#fff', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'13px' }}>
                                <img src={review} style={{ width: '20px', marginTop: '3px' }} alt="Review Icon" />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px', textAlign: 'left',textTransform: 'none' }}>Reviews</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('clients',"/clients")} style={{ backgroundColor: selectedButton === 'clients' ? "#C3E0EA" : '#fff', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px' ,justifyContent:'flex-start',paddingLeft:'13px'}}>
                                <img src={client} style={{ width: '20px', marginTop: '3px' }} />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px',textTransform: 'none' }}>Clients</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('trackorders',"/trackorders")} style={{ backgroundColor: selectedButton === 'trackorders' ? "#C3E0EA" : '#fff', color: '#000', width: '80%', padding: '5px', textAlign: 'left', marginLeft: '1px' ,justifyContent:'flex-start',paddingLeft:'13px'}}>
                                <img src={track} style={{ width: '20px', marginTop: '3px' }} />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px',textTransform: 'none' }}>Track Orders</Typography>
                       </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBarNav;

import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FormControl, FormLabel, Input, Link } from "@mui/material";
import axios from 'axios';


const steps = [
    {
        label: 'Personal Information:',
        description:
            <Box
            sx={{display: 'flex',
            flexDirection: 'column'}}>
                <FormControl sx={{ mb: '20px' }}>
                    <FormLabel sx={{ textAlign: "left" }}>Name</FormLabel>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Vedant"
                    />
                </FormControl>

                <FormControl sx={{ mb: '20px' }}>
                    <FormLabel sx={{ textAlign: "left" }}>Email</FormLabel>
                    <Input
                        name="email"
                        type="email"
                        placeholder="vedantk065@gmail.com"
                    />
                </FormControl>

                <FormControl sx={{ mb: '10px' }} >
                    <FormLabel sx={{ textAlign: "left" }}>Passsword</FormLabel>
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </FormControl>
            </Box>
    },
    {
        label: 'Store Details:',
        description:
        <Box
        sx={{display: 'flex',
        flexDirection: 'column'}}>
            <FormControl sx={{ mb: '20px' }}>
                <FormLabel sx={{ textAlign: "left" }}></FormLabel>
                <Input
                    name="name"
                    type="text"
                    placeholder="Vedant"
                />
            </FormControl>

            <FormControl sx={{ mb: '20px' }}>
                <FormLabel sx={{ textAlign: "left" }}>Email</FormLabel>
                <Input
                    name="email"
                    type="email"
                    placeholder="vedantk065@gmail.com"
                />
            </FormControl>

            <FormControl sx={{ mb: '10px' }} >
                <FormLabel sx={{ textAlign: "left" }}>Passsword</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </FormControl>
        </Box>
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                {steps[activeStep].description}
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

const postData = async () => {
    try {
      const response = await axios.post('https://projectphase-uc.onrender.com/tailor/signup', {
        username: 'value1',
        password: 'value2',
        // email: ,
        // mobileno: ,

      });
  
      console.log('Response:', response.data);
      // Handle response data here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };
  
  postData();
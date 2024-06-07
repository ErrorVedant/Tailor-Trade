import './App.css';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import fontcolorTheme from './fontcolorTheme';
import Dashboard from './Dashboard';
import Reviews from './Reviews';
import Home from './Home';

import LoginTailor from './LoginTailor';
import SignUpTailor from './SignUpTailor';
import LoginUser from './LoginUser';
import SignUpUser from './SignUpUser';
<<<<<<< HEAD
import TextMobileStepper from './Carousel';
import AddNewOrders from './AddNewOrder';
=======

>>>>>>> 28ae565dd1a6b1bdc19c1062ecab888c05b0822f
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={fontcolorTheme}>
        <Router> {/* Use BrowserRouter as Router */}
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/AddNewOrders" element={<AddNewOrders />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/example" element={<Example/>} />
            <Route path="/loginTailor" element={<LoginTailor/>} />
            <Route path="/signupTailor" element={<SignUpTailor/>} />
            <Route path="/loginUser" element={<LoginUser/>} />
            <Route path="/signupUser" element={<SignUpUser/>} />
            <Route path="/corousel" element={<TextMobileStepper/>} />
=======
            <Route path="/" element={<Home/>} />
            <Route path="/tailor/reviews" element={<Reviews />} />
            <Route path="/tailor/Dashboard" element={<Dashboard />} />
            {/* <Route path="/example" element={<Example/>} /> */}
            <Route path="/tailor/login" element={<LoginTailor/>} />
            <Route path="/tailor/signup" element={<SignUpTailor/>} />
            <Route path="/user/login" element={<LoginUser/>} />
            <Route path="/user/signup" element={<SignUpUser/>} />
            {/* <Route path="/corousel" element={<TextMobileStepper/>} /> */}
>>>>>>> 28ae565dd1a6b1bdc19c1062ecab888c05b0822f
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

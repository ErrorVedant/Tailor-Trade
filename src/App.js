import './App.css';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import fontcolorTheme from './fontcolorTheme';
import Dashboard from './Dashboard';
import Reviews from './Reviews';
import Home from './Home';
import Example from './Example';
import LoginTailor from './LoginTailor';
import SignUpTailor from './SignUpTailor';
import LoginUser from './LoginUser';
import SignUpUser from './SignUpUser';
import TextMobileStepper from './Carousel';
import AddNewOrders from './AddNewOrder';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={fontcolorTheme}>
        <Router> {/* Use BrowserRouter as Router */}
          <Routes>
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
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

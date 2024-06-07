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

import AddNewOrders from './AddNewOrder';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={fontcolorTheme}>
        <Router> {/* Use BrowserRouter as Router */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tailor/AddNewOrders" element={<AddNewOrders />} />
            <Route path="/tailor/reviews" element={<Reviews />} />
            <Route path="/tailor/Dashboard" element={<Dashboard />} />
            {/* <Route path="/example" element={<Example/>} /> */}
            <Route path="/tailor/login" element={<LoginTailor/>} />
            <Route path="/tailor/signup" element={<SignUpTailor/>} />
            <Route path="/user/login" element={<LoginUser/>} />
            <Route path="/user/signup" element={<SignUpUser/>} />
            {/* <Route path="/corousel" element={<TextMobileStepper/>} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
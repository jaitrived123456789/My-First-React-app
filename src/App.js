import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
//import { Router } from 'react-router-dom';
import About from './components/About';

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// Whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {

      setAlert(null);
    }, 3000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }

  return (
    <>
     
    
      {/* <Router> */}
        <Navbar title="Devil" About="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes>
            <Route path="/about" element={<About/>}>
              
            </Route>
            
            <Route path="/Home" element={<TextForm heading="Enter the text to analyze" mode={mode} />}>
           
           </Route>
        </Routes>        */}
        <TextForm heading="Enter the text to analyze" mode={mode} /> 
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;

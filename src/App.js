import React, { useState } from 'react'
import './App.css';
import Navbar from './companents/Navbar';
import TextForm from './companents/TextForm';
import Alert from './companents/Alert';
import About from './companents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const alertNull = () => {
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      setAlert({ type: "success", msg: "Dark Mode Enabled" });
      alertNull();
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
      setAlert({ type: "success", msg: "Ligth Mode Enabled" });
      alertNull();
    }
  }

  return (
    <Router>
        <>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path='/about' element={<About mode={mode} setAlert={setAlert} alertNull={alertNull}/>}/>
              <Route exact path="/" element={<TextForm setAlert={setAlert} alertNull={alertNull} heading="Enter the text to analyze" mode={mode} />} />            </Routes>
          </div>
        </>
    </Router>
  );
}

export default App;

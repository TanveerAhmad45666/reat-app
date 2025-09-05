import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// for routing add this 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Messagess from "./Message";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dard Mode");
  type AlertType = { msg: string; type: string } | null;
  const [alert, setAlert] = useState<AlertType>(null);


  const showAlert = (message: string, type: string) =>{
    setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      setModeText("Enable Light Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title= "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }

  }
  return (
    <div>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
        {/* <Navbar /> */}
        {/* <Alert alert="This is alert"/> */}
        <Alert alert={alert}/>
       <Routes>
    
          <Route path="/" element={ <section className="container text-form-container">
                <TextForm showAlert={showAlert} formlabel="Please Enter Your" mode={mode} />
              </section>
            }
          />
         
          <Route
            path="/about"
            element={
              <section className="container about-container">
                <About title="FAQS" />
              </section>
            }
          />
          {/* OR */}  
          {/* <Route path="/about" element={<About mode={mode} />} /> */}

        </Routes>
        {/* <Messagess /> */}
      </Router>  
    </div>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



import Messagess from "./Message";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable Dard Mode");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) =>{
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
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      {/* <Navbar /> */}
      {/* <Alert alert="This is alert"/> */}
      <Alert alert={alert}/>
      <section className="container text-form-container">
        <TextForm showAlert={showAlert} formlabel="Please Enter Your" mode={mode}/>
      </section>
      <section className ="container about-container">
        {/* <About title ="FAQS" /> */}
      </section>


      {/* <Messagess /> */}
    </div>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



import Messagess from "./Message";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" />
      {/* <Navbar /> */}
      <section className="container text-form-container">
        <TextForm formlabel="Please Enter Your" />
      </section>
      {/* <Messagess /> */}
    </div>
  );
}

export default App;

import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
 import TextForm from "./component/TextForm";
 import Alert from "./component/Alert";
 import React, { useState } from "react";
 
 import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode ,setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert(" Dark mode has been enabaled","success")
    }
     else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabaled","success")
      }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" AboutText="About us"  mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={ alert}/>
      <div className="container my-3">
      <Switch>
          <Route   path="/about">
            <About  mode={mode} />
          </Route>
          <Route  path="/">
          <TextForm showAlert={showAlert} heading="Enter Text to Analyze below " mode={mode}  />
          </Route>
        </Switch>
   
      </div>
        </Router>
 

         
        
     
    </>
  );
}

export default App;

import './App.css'; // Add CSS
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";

// JSX = HTML FOR REACTJS
function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }

  const toggleMode =()=>{
     if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode Enabled'
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode Enabled'
     }

  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* /users --> Component 1 Path
              /users/home --> --> Component 2 Exact Path */}
          {/* <Switch> */}
            {/* <Route exact path="/about" component={About} /> */}
            <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} />
            {/* <Route exact path="/" component={() =><TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} />} /> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
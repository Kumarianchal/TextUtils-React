import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  // const[cmode,setcMode]=useState({
  //   textColor:'black',
  //   bgColor:'white',
  //   btnColor:'blue'
  // });
  
  // const setColorMode=(textColor,bgColor,btnColor)=>{
  //   setcMode({
  //     textColor:textColor,
  //     bgColor:bgColor,
  //     btnColor:btnColor
  //   })

  // }


  const showAlert=(message,type)=>{
    setAlert({                        // creating an object and setting the state variable alert equal to that object
      msg :message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null)
      },1500
    )
  }

  const toggleMode=()=>{               //function to toggle mode
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled!","success");
      document.title='TextUtils-Light mode';
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor='grey';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled!","success");
      document.title='TextUtils-Dark mode';

    }
  }
  
  
  
  return (
     <>
   
        {/* we are sending mode state and toggleMode function as props */}

        {/* <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Routes>
                <Route exact path="/" element={<TextForm heading="Enter Your Text to Analyze below" showAlert={showAlert} mode={mode} />}></Route> */}
                {/* <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          
                <TextForm heading="Enter Your Text to Analyze below" showAlert={showAlert} mode={mode} />
        </div>
     </>
  );
}

export default App;

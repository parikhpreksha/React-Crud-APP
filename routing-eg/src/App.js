import React from "react";
import {Route,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
const App=()=>{
  return(
  <>
     <Routes>
           <Route path="/" Component={About}/>
           <Route path="Contact" Component={Contact}/>
      </Routes>


  {/* <About/>
  <Contact/> */}
  </>
  );
}




export default App;
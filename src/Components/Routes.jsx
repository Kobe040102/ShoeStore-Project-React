import {BrowserRouter as Router, Routes, Route} from 'react';
import Home from "../WebPages/Home.jsx"
function Pathing(){
    return(
        <Router>
        <Routes>
          <Route path="/" element= {<Home/>}/>
        </Routes>
      </Router>
    );
}
export default Routes;
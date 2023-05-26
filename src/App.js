import { Button, Container, Row ,Col} from 'reactstrap';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import UpdateInsurance from './component/UpdateInsurance';
import AddInsurance from './component/AddInsurance';
import AllInsurance from './component/AllInsurance';
import Menus from './component/Menus';
import Contact from './component/Contact';
import About from './component/About';



function App() {
  const btnHandle=()=>{
      toast.success("done",{
        position:"top-center",
      });
  };
  return (
    <div>
        
        <ToastContainer/>
          <Header/>
                <Container>
                    <div className="row">
                        <div className="col-4 col-md-4"><Menus/></div>
                        <div className="col-8 col-md-8">
                          <Router>
                              <Routes>
                                  <Route path="/" element={<Home />} exact/>
                      
                                  <Route path="/add-Insurance" element={<AddInsurance />} exact/> 
                        
                                  <Route path="/view-Insurance"element={<AllInsurance />} exact/>

                                  <Route path="/update-Insurance"element={<UpdateInsurance />} exact/>

                                  <Route path="/Contact"element={<Contact />} exact/>
                                  <Route path="/About"element={<About />} exact/>
                        
                              </Routes>
                          </Router>
                          
                           
                            
                        </div>
                    </div>
                </Container>

        
      
    </div>
   
  );
}

export default App;

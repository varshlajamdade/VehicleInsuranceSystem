import React, { useState,useEffect } from "react";
import Insurance from "./Insurance";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import UpdateInsurance from "./UpdateInsurance";

    const AllInsurance =() => {

    useEffect(() => {
            document.title="All Insurance || Admin module";
    });

    //Function to call servers
    const getAllInsuranceFromServer = () => {
        axios.get(`${base_url}/insurance`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Insurance has been loaded",{position:"bottom-center"});
                setinsurance(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    
    useEffect(()=>{
        getAllInsuranceFromServer();
        },[]);

    const [insurance,setinsurance]=useState([]);

    const UpdateInsurance=(id)=>{
        setinsurance(insurance.filter((c)=>c.id!==id));
    };
    
 

    //const[courses,setcourses]=useState([
      //  {item:101,title:"Java Course",description:"This is demo course"},
        //{item:102,title:"React Course",description:"This is React course"},
        //{item:103,title:"NodeJS Course",description:"This is NodeJS course"},
    //])
    return(
        <div>
            <h1>All Insurances</h1>
            <p>list of Insurance as follows</p>
           {insurance.length > 0 
            ? insurance.map((item) => <Insurance key={item.id} insurance={item}/>) 
            :"No Insurance"}
       </div>

    );
};

export default AllInsurance;

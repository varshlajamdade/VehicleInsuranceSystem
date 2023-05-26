import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddInsurance=()=>{
    useEffect(()=>{
        document.title="Add Insurance";
},[]);

    const [insurance,setinsurance]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(insurance);
        postDatatoServer(insurance);
        e.preventDefault();

    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/insurance`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("insurance added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-6">Add Insurance Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="insuranceId">Insurance Id</label>
                <Input
                        Type="text"
                        placeholder="Enter insuranceID here"
                        name="insuranceId"
                        Id="insuranceId"
                        onChange={(e)=>{
                            setinsurance({...insurance,id:e.target.value});
                        }}
                />
            </FormGroup>
                
               

                  <FormGroup>
                <label for="insurance_type">Insurance Type </label>
                <Input
                        Type="text"
                        placeholder="Enter insurance_type here(Comprehensive/Third-party insurance) "
                        name="insurance_type"
                        Id="insurance_type"
                        onChange={(e)=>{
                            setinsurance({...insurance,insuranceType:e.target.value});
                        }}
                />
                 </FormGroup>

                 <FormGroup>
                <label for="insurance_option">Insurance Option</label>
                <Input
                        Type="text"
                        placeholder="Enter Insurance plan Option (Pro-Rata,Yearly,Monthly)"
                        name="insurance_option"
                        Id="insurance_option"
                        onChange={(e)=>{
                            setinsurance({...insurance,planOption:e.target.value});
                        }}
                />
                </FormGroup>

                 <FormGroup>
                <label for="Premium">Premium</label>
                <Input
                        Type="text"
                        placeholder="Enter Premium here "
                        name="Premium"
                        Id="Premium"
                        onChange={(e)=>{
                            setinsurance({...insurance,premium:e.target.value});
                        }}
                />
          </FormGroup>


               <FormGroup>
                <label for="user_name">User Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Insurer here "
                        name="user_name"
                        Id="user_name"
                        onChange={(e)=>{
                            setinsurance({...insurance,userName:e.target.value});
                        }}
                />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add insurance</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddInsurance;
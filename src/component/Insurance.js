import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Insurance=({insurance,update})=>{


  const deleteinsurance = (id) => {
    axios.delete(`${base_url}/insurance/${id}`)
      .then(() => {
        
        // Handle successful response
        toast.success("Insurance deleted successfully");
        update(id);
      })
      .catch((error) => {
        // Handle error
       // toast.error("Insurance not deleted");
        console.error(error);
      });
  };
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
        toast.success("insurance deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">{insurance.insuranceType}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">{insurance.planOption}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">{insurance.premium}</CardSubtitle>
          <CardSubtitle className="font-weight-bold">{insurance.userName}</CardSubtitle>
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteinsurance(insurance.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-Insurance">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
};
export default Insurance;
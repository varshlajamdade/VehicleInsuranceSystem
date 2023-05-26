import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Admin Module";
},[]);
    return(
        
    <div >
        <div>
            <img src="InsuranceSystem.jpg" alt="Insurance System " height="450" width='800'/>
       
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>Insurance System</CardTitle>
            
            <p> 
                    This is simple Insurance application for the admin 
            </p>
            <Container className="text-center">
                
            </Container>
        </CardBody>
        </Card>  
        </div>
     </div>
    );
};
export default Home;
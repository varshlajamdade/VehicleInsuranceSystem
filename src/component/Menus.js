import React from "react";
import { Link } from "react-router-dom";
import {ListGroup,ListGroupItem} from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
          <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-Insurance">Add Insurance</ListGroupItem>
            <ListGroupItem tag="a" href="/view-Insurance">View Insurance</ListGroupItem>
            <ListGroupItem tag="a" href="/update-Insurance">Update Insurance</ListGroupItem>
            <ListGroupItem tag="a" href="/About">About</ListGroupItem>
            <ListGroupItem tag="a" href="/Contact">Contact</ListGroupItem>

        </ListGroup>
    );
    
}
export default Menus;
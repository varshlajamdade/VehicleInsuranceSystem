import { CardBody ,Card,CardTitle, Button, Container} from "reactstrap"

const Contact=() => {

    return(
        <div className="contact">

            <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>EmailId : snehaagale9@gmail.com</CardTitle>
            <CardTitle>Cutomer Care No:234-7926-3343</CardTitle>
            <Container className="text-center">
                <Button color="primary" outline>Thank You</Button>
            </Container>
            </CardBody>
            </Card>
        </div>

    )

};
export default Contact;
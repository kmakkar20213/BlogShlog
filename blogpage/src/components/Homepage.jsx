import Feed from "./Feed";
import Category from "./Category";
import "./Homepage.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

function Homepage() {
    return (
        <Container className="body w-75 app-main">
            <Col sm={9} className="feed">
            <Feed></Feed>
            </Col>
            <Col sm={3} className="stick">
                <Form className="d-flex mb-4 ">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className="srch"
                    />
                </Form>
                <Category></Category>
            </Col>
        </Container>
    );
}

export default Homepage;


{/* <Container className="body w-75">
            <Feed></Feed>
            <div>
                <Form className="d-flex mb-4">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>
                <Category></Category>
            </div>
        </Container> */}

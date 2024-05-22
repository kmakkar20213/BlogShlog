import Post from "./Post";
import { useState, useEffect } from "react";
import "./Feed.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import BLOGS from "./data";

function Feed() {
    const PAGES = ((BLOGS.length / 6) | 0) + 1;
    const [pageNo, setPageNo] = useState(1);
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [pageNo])

    let pagez = [];
    for (let number = 1; number <= PAGES; number++) {
        pagez.push(
            <Pagination.Item
                key={number}
                active={number === pageNo}
                onClick={() => setPageNo(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    const Posts = () => (
        <Row className="pb-0">
            {BLOGS.slice((pageNo - 1) * 6, pageNo * 6).map((item, index) => (
                <Col md={12} lg={6} key={item.id}>
                    <Post {...item}></Post>
                </Col>
            ))}
        </Row>
    );

    return (
        <Container>
            <Container>
                <Posts />
            </Container>
            <Pagination className="justify-content-center mt-2">
                {pagez}
            </Pagination>
        </Container>
    );
}

export default Feed;

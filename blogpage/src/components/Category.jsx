import ListGroup from "react-bootstrap/ListGroup";

function Category() {
    return (
        <ListGroup >
            <ListGroup.Item variant="dark">Categories</ListGroup.Item>
            <ListGroup.Item action> Food</ListGroup.Item>
            <ListGroup.Item action>Creativity</ListGroup.Item>
            <ListGroup.Item action>Travel</ListGroup.Item>
            <ListGroup.Item action>Music</ListGroup.Item>
            <ListGroup.Item action>Sports</ListGroup.Item>
            <ListGroup.Item action>Movies</ListGroup.Item>
            <ListGroup.Item action>Dev</ListGroup.Item>
            <ListGroup.Item action>Party</ListGroup.Item>     
        </ListGroup>
    );
}

export default Category;
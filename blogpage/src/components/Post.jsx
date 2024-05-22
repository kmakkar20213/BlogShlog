import Card from "react-bootstrap/Card";
import "./Post.css"

function Post(props) {
    return (
        <Card className="crd-bdy">
            <Card.Img
                className="object-fit-cover crd-img"
                variant="top"
                src={props.img}
                
            />
            <Card.Body>
                <Card.Text>{props.cat}</Card.Text>
                <Card.Title className="crd-ttl">{props.title}</Card.Title>
                <Card.Text className="crd-txt">{props.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post; 

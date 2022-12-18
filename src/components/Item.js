import ListGroup from 'react-bootstrap/ListGroup';

function Item(props) {
    return(
        <>
            <ListGroup.Item as="li">{props.item}</ListGroup.Item>
        </>
    )
}

export default Item;
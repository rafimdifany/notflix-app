import { Card, Button } from "react-bootstrap"
import ImageAtom from "../../atoms/image";


const CardManga = (props) => {
  return(
    <Card 
    style={{ height: '30rem'}}
    gap={3}

    className="mb-3"
    >
      <ImageAtom src={props.imgSrc} width={props.width} height={props.height}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Author :  {props.author}
        </Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  )
} 

export default CardManga;
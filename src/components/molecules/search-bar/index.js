import { Button, Container, Form, Row } from "react-bootstrap"


const SearchBar = (props) => {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
        type="text"
        id="search"
        aria-describedby="searchBar"
        />  
        <Button variant={props.variantButton} margin className="ms-1">{props.content}</Button>
      </Form>
    </div>
  )
}

export default SearchBar;
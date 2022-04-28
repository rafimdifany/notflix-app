import { Fragment } from "react";
import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import SearchBar from "../../molecules/search-bar";



class Header extends React.Component {
  render() {
    return(
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">
                Notflix
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <SearchBar content="Search" variantButton="success"/>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}


export default Header;
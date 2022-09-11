import { Button, Container, Form, Navbar } from "react-bootstrap";
import { SearchIcon } from "./icons/SearchIcon";

const SearchBar = () => {
    return (
        <Navbar>
            <Container>
                <Form className="justify-content-end">
                    <Form.Control/>
                    <Button>
                        <SearchIcon/>
                    </Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export { 
    SearchBar
};
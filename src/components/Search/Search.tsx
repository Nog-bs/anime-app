import * as React from "react";
import { Button, Container, Searchbar } from "./Search.elements";

const Search: React.FC = () => {
    return (
        <Container>
            <Button>Search</Button>
            <Searchbar placeholder="Search an anime" />
        </Container>
    );
};

export default Search;

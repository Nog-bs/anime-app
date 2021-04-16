import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Button, Container, Form, Searchbar } from "./Search.elements";

const Search: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [data, setData] = useState<[]>([]);

    const searchData = async (input: string) => {
        const API_ENDPOINT = `https://api.jikan.moe/v3/search/anime?q=${input}`;
        const response = await axios
            .get(API_ENDPOINT)
            .then((res) => {
                setData(res.data.results);
                console.log(data);
            })
            .catch((err) => {
                setError(
                    "Baka! You either didn't search anything or it does't exist!"
                );
            });
        return response;
    };

    const handleChange = (e: any) => setInput(e.target.value);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // lock button & reset error message
        setLoading(true);
        setError("");

        // perform search query
        searchData(input);

        // unlock button
        setLoading(false);
    };

    return (
        <Container>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Button disabled={loading} type="submit">
                    Search
                </Button>
                <Searchbar
                    onChange={(e) => handleChange(e)}
                    type="name"
                    placeholder="Search an anime..."
                />
            </Form>
            {error && <p>{error}</p>}
        </Container>
    );
};

export default Search;

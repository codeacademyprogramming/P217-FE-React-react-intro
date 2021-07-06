import React, { useEffect, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


export const CountrySearch = () => {
    const [countries, setCountries] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all').then((res) => {
            if (res.status === 200) {
                res.json().then((countriesData) => setCountries(countriesData));
            } else {
                setIsError(true);
            }
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    const filteredCountries = useMemo(
        () => countries.filter(country => country.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())),
        [searchText, countries]
    );

    return (
        <div style={{ marginTop: '1rem' }}>
            <Form>
                <Form.Label>Country name:</Form.Label>
                <FormControl
                    type="text"
                    placeholder="Enter a country name to search"
                    className="mr-sm-2"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                />
            </Form>
            <ListGroup>
                {isLoading && (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                        <Spinner variant="primary" animation="border" />
                    </div>
                )}
                {isError && (
                    <div style={{ marginTop: '1rem' }}>
                        <Alert variant="danger">Oops something went wrong! Please try again later</Alert>
                    </div>
                )}
                {/* {filteredCountries && filteredCountries.map(country => (
                    <ListGroup.Item key={country.name}>
                        {country.name}
                    </ListGroup.Item>
                ))} */}
            </ListGroup>
        </div>
    )
};
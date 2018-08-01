import React, { Component } from 'react';
import SearchButton from './components/SearchButton';
import SearchInput from './components/SearchInput';

import { Container, Row, Col } from 'react-grid-system';

import './styles.scss';

class SearchBar extends Component {
    render() {
        return (
            <Container className="search-bar">
                <Row nogutter>
                        <Col xs={9} md={10}>
                            <SearchInput />
                        </Col>
                        <Col xs={3} md={2}  >
                            <SearchButton />
                        </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchBar;
import React, { Component } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import { Container, Row, Col} from 'react-grid-system';

class SearchBar extends Component {
    render() {
        return (
            <Container>
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
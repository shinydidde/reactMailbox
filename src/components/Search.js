import React, {Component} from 'react';
import search from '../images/icon_search.svg';
import calender from '../images/icon_calender.svg';
import '../App.scss';
import { Row, Col, FormControl, InputGroup, } from 'react-bootstrap';

class Search extends Component {
    render() {
        const { value, handleChange } = this.props;
        return (
        <Row>
          <Col xs={false} lg={3} md={3}>
          <br/><br/>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text className="search"><img alt="search" src={calender}/></InputGroup.Text>
                </InputGroup.Prepend>
              <FormControl
                className="inputField"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={value} onChange={handleChange}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2"><img alt="search" src={search}/></InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
    )
    }
}
export default Search;

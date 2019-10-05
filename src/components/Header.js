import React from 'react';
import arrow01 from '../images/icon_arrow01.svg';
import '../App.scss';
import { Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <Row className="table-header">
            <Col xs={3}>From <img className="mobile" src={arrow01} alt=""/></Col>
            <Col xs={3}>To</Col>
            <Col xs={3}>Subject</Col>
            <Col xs={3}>Date <img className="desktop" src={arrow01} alt=""/></Col>
        </Row>
    )
}
export default Header;
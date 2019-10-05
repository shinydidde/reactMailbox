import React, {Component} from 'react';
import arrow02 from '../images/icon_arrow02.svg';
import mail from '../images/icon_mail_sp.svg';
import clip from '../images/icon_clip.svg';
import logo from '../images/logo.png';
import '../App.scss';
import FilterResults from 'react-filter-search';
import Header from './Header';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

class Results extends Component {
    render() {
        const { value, data } = this.props;
        return (
            <FilterResults value={value} data={data} renderResults={(results, index) => ( results.length ? 
              <div key={index}>
                <Header/>
                <div>
                {results.map((el, index) => (
                  <Row key={index}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
                        <Row className="mobile">
                            <Col xs={1}><img src={mail} className="mail" alt=""/></Col>
                            <Col xs={10} className="desc"><Row>
                                <Col xs={12}>
                                  <Row><Col xs={12}><b>{el.from}</b><span className="date">{el.attachment ? <img alt="" src={clip}/> : null}{el.date} <img className="arrow" alt="" src={arrow02}/></span></Col> </Row>
                                  <Row><Col>{el.to} {el.total > 0 ? <span className="date total">+{el.total}</span> : null}</Col></Row>
                                </Col>
                              </Row></Col>
                            <Col xs={12}>{el.subject}</Col>
                          </Row>
                          <Row className="desktop">
                            <Col md={3}>{el.from}</Col>
                            <Col md={3}>{el.to} {el.total > 0 ? <span className="total">+{el.total}</span> : null}</Col>
                            <Col md={3}>{el.subject} {el.attachment ? <img className="float-right" alt="" src={clip}/> : null}</Col>
                            <Col md={3}>{el.date}</Col>
                          </Row>
                      </Accordion.Toggle>
                      <Accordion.Collapse className="table-body" eventKey={index}>
                        <Row>
                          <Col><p>{el.snippet}</p></Col>
                        </Row>
                      </Accordion.Collapse>
                    </Accordion>
                  </Row>
                  ))}
                </div>
              </div> : 
              <div className="text-center"><hr/><img src={logo} className="logo" alt="no results"/></div>
              )}
            />
    )
    }
}
export default Results;


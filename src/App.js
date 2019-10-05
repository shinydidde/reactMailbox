import React, { Component } from 'react';
import './App.scss';
import { Container, Row, Col} from 'react-bootstrap';
import Search from './components/Search';
import Results from './components/Results';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
    };
  }
  componentWillMount() {
    fetch('https://raw.githubusercontent.com/shinydidde/reactMailbox/master/data.json')
      .then(response => response.json())
      .then(json => this.setState({ data: json.mails }));
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <Container fluid="true">
        <Search value={value} handleChange={this.handleChange}/>
        <h5>Results: {data.length} mail(s)</h5>
        <Row>
          <Col xs={12}>
              <Results data={data} value={value}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import Beers from './Beers';

// import { Link } from 'react-router-dom';

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { oneBeer: {} };
  }

  getBeerDetail = () => {
    axios
      .get(`http://localhost:4000/api/beers/:beerId`)
      .then((responseFromApi) => {
        this.setState({
          oneBeer: responseFromApi.data,
        }).catch((err) => {
          console.log(err);
        });
      });
  };

  componentDidMount() {
    this.getBeerDetail();
  }

  render() {
    return (
      <div>
        <Beers getData={() => this.getBeerDetail()} />
      </div>
    );
  }
}

export default BeerDetail;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((responseFromApi) => {
        this.setState({
          listOfBeers: responseFromApi.data,
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </header>
        {this.state.listOfBeers.map((beers) => {
          return (
            <div className="container-beers">
              <div key={beers._id}>
                <div className="container">
                  <img className="beer-picture" src={beers.image_url} alt="" />
                  <div className="beer-details">
                    <h4>{beers.name}</h4>
                    <h5>{beers.tagline}</h5>
                    <p>Created by:{beers.contributed_by}</p>
                    <Link to={`/beers/${beers._id}`}>
                      {' '}
                      <p>{beers.name}</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;

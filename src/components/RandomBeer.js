import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = { oneRandom: {} };
  }

  componentDidMount() {
    this.addRandomBeer();
  }

  addRandomBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((responseFromApi) => {
        this.setState({
          oneRandom: responseFromApi.data,
        });
      });
  };

  // this.setState(theBeer[Math.floor(Math.random() * theBeer.length)]);

  // responseFromApi.data[
  //   Math.floor(Math.random() * responseFromApi.data.length)
  // ],

  render() {
    return (
      <div>
        {this.state.oneRandom[
          Math.floor(Math.random() * this.state.oneRandom.length)
        ]((oneBeer) => {
          return (
            <div key={oneBeer._id}>
              <img src={oneBeer.image_url} alt="" />
              <div>
                <h4>{oneBeer.name}</h4>
                <h5>{oneBeer.tagline}</h5>
                <p>Created by:{oneBeer.contributed_by}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RandomBeer;

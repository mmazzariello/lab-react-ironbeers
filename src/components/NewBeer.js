import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewer_tips: '',
      contributed_by: '',
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewer_tips = this.state.brewer_tips;
    const contributed_by = this.state.contributed_by;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        first_brewed,
        brewer_tips,
        contributed_by,
      })
      .then(() => {
        this.props.getData();
        this.setState = {
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewer_tips: '',
          contributed_by: '',
        };
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h3>Add a new beer here:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <label>First Brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Brewers Tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Attenuation:</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Contributed:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={(e) => this.handleChange(e)}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBeer;

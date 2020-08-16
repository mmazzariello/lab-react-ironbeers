import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="nav-style">
      <div className="container-allbeers">
        {/* <img src="/images/beers.jpeg" alt="" /> */}
        <Link to="/beers" style={{ textDecoration: 'none' }}>
          All Beers
        </Link>
      </div>
      <div className="container-random">
        {/* <img src="/images/beer-1024x682jpg" alt="" /> */}
        <Link to="/randombeer" style={{ textDecoration: 'none' }}>
          Random Beer
        </Link>
      </div>
      <div className="container-newbeer">
        {/* <img src="/images/craft-beer2.jpg" alt="" /> */}
        <Link to="/newbeer" style={{ textDecoration: 'none' }}>
          New Beer
        </Link>
      </div>
    </div>
  );
};

export default Home;

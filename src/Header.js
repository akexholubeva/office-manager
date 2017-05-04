import React, { Component } from 'react';

class Header extends Component {
  render() {
    return ( 
      <div className="App-header">
        <h1>Office-manager </h1>
        <img className="manager"  alt="manager" src={'https://image.freepik.com/free-icon/business-person-silhouette-wearing-tie_318-49988.jpg'} />
      </div>
    );
  }
}

export default Header;

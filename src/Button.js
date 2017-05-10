import React, { Component } from 'react';
import Questions from './Questions';
import { Route,Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>
          <button className="back-button">Назад</button>
        </Link>
      </div>
    );
  } 
}

export default Button;

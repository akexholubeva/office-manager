import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Questions from './Questions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Answer from './Answer';
import QuestionData from './Questions.json'
import Button from './Button';

class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="Content">
          <Header />
          <h2>Manager is ready to help you!</h2>
          <Route exact path="/" component={Questions} />
          <Route exact path="/question/:questionId" render={ ({match}) => (
          <Answer data={QuestionData.find(item => item.id.toString() === match.params.questionId)} /> 
          )}/>
          <Route exact path="/question/:questionId" component={Button} />
        </div>
      </Router>
    );
  }
}

export default App;

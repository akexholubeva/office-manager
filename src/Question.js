import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Answer from './Answer';

class Question extends Component {
  render() {
    return (
      <div>
        <Link to={`/answer/${this.props.data.id}`}>
          {this.props.data.question}
        </Link>
        <Route path="/answer/:answerId" render={ () => (
          <Answer data={this.props.data} /> 
        )}/>
      </div>
    );
  }
}

Question.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default Question;

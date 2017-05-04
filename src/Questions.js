import React, { Component } from 'react';
import Question from './Question';

class Questions extends Component {
  render() {
    return (
      <div className="Content">
        {this.props.data.map(item => (
          <Question key={item.id} data={item} />
        ))}
      </div>
    );  
  }
}

Questions.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default Questions;

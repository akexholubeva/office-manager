import React, { Component } from 'react';

class Answer extends Component {
  render() {
    return (
      <div>
        {this.props.data.answer}
      </div>
    );
  } 
} 

Answer.propTypes = {
  data: React.PropTypes.object.isRequired,
}

export default Answer; 

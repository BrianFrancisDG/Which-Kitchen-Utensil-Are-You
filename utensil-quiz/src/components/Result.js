import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      You are a <strong>{props.quizResult}</strong>!
      <p>{props.description}</p>
      <p><strong>TLDR:</strong> {props.tldr}</p>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Result;
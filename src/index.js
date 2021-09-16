import React from 'react'
import reactDom from 'react-dom';

const Hello = () => {
  return <h4>Testing, Testing</h4>;
}

reactDom.render(<Hello />, document.getElementById('root'));
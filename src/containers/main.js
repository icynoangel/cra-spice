import React from 'react';
import { Link } from 'react-router-dom';

import ExampleClassComponent from '../components/exampleClassComponent';
import ExampleFunctionComponent from '../components/exampleFunctionComponent';

const Main = () => {
  const handleClick = (counterValue) => {
    console.log(counterValue);
  };

  return (
    <div className="main">
      <Link to="/admin">Admin</Link>
      <ExampleClassComponent
        onClick={handleClick}
        initialCounter={10}
        key="example-class-component"
      />
      <ExampleFunctionComponent value={100} key="example-function-component" />
    </div>
  );
};

export default Main;

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ThemeHandler from '../components/themeHandler';
import ThemeSwitcher from './themeSwitcher';

import ExampleClassComponent from '../components/exampleClassComponent';
import ExampleFunctionComponent from '../components/exampleFunctionComponent';

const Main = ({theme}) => {
  const handleClick = (counterValue) => {
    console.log(counterValue);
  };

  return (
    <div className="main">
      <Link to="/admin">Admin</Link>
      <ThemeHandler key="theme-handler" theme={theme} />
      <ExampleClassComponent
        onClick={handleClick}
        initialCounter={10}
        key="example-class-component"
      />
      <ExampleFunctionComponent value={100} key="example-function-component" />
      <ThemeSwitcher key="theme-switcher" theme={theme} />
    </div>
  );
};

Main.propTypes = {
  theme: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Main);

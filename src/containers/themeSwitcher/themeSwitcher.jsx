import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTheme } from '../../actions/theme';
import ThemeSwitcher from '../../components/themeSwitcher';
import themesObj from '../../styles/themes.scss'; // eslint-disable-line import/no-webpack-loader-syntax

const THEMES = themesObj && themesObj.themes 
  ? themesObj.themes.split(',').map(theme => theme.trim())
  : ['default'];

const ThemeSwitcherContainer = ({ theme, setTheme }) => (
  <ThemeSwitcher
    theme={theme}
    themes={THEMES}
    setTheme={setTheme}
  />
);

ThemeSwitcherContainer.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired
};

ThemeSwitcherContainer.defaultProps = {
  theme: 'default'
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => {
      dispatch(setTheme(theme));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcherContainer);
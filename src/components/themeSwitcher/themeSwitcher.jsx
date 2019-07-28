import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTheme } from '../../actions/theme';
import themesObj from '../../styles/themes.scss'; // eslint-disable-line import/no-webpack-loader-syntax

const THEMES = themesObj && themesObj.themes 
  ? themesObj.themes.split(',').map(theme => theme.trim())
  : ['default'];

class ThemeSwitcher extends Component {
  static propTypes = {
    theme: PropTypes.string
  };
  static defaultProps = {
    theme: 'default'
  };

  changeTheme = (event) => {
    this.props.setTheme(event.target.value);
  }

  render () {
    const { theme } = this.props;
    return ( 
      <div className="theme-switcher">
        <select value={theme} onChange={this.changeTheme}>
          {THEMES.map(theme => (
            <option key={`theme-${theme}`} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
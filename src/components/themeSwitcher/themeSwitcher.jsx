import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

class ThemeSwitcher extends Component {
  static propTypes = {
    theme: PropTypes.string.isRequired,
    themes: PropTypes.array.isRequired,
    setTheme: PropTypes.func.isRequired,
    intl: PropTypes.object
  };

  changeTheme = (event) => {
    this.props.setTheme(event.target.value);
  }

  render () {
    const { theme, themes, intl } = this.props;
    return ( 
      <div className="theme-switcher">
        <select value={theme} onChange={this.changeTheme}>
          {themes.map(theme => (
            <option key={`theme-${theme}`} value={theme}>
              {intl.formatMessage({
                id: `${theme}theme`,
                defaultMessage: theme
              })}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default injectIntl(ThemeSwitcher);
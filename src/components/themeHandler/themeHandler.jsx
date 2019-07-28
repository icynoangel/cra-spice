import { Component } from 'react';
import PropTypes from 'prop-types';

class ThemeHandler extends Component {
  static propTypes = {
    theme: PropTypes.string
  };
  static defaultProps = {
    theme: 'default'
  };

  render () {
    return null;
  }

  setTheme = () => {
    const { theme } = this.props;
    const appRoot = document.getElementById('root');
    appRoot.className = `theme-${theme}`;
  }

  componentDidMount () {
    this.setTheme();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setTheme();
    }
  }
}

export default ThemeHandler;
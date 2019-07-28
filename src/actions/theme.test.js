import {SET_THEME} from '../constants/actionTypes';
import {setTheme} from './theme';

describe('Actions - theme', function() {
  it('should set theme', () => {
    const theme = 'dark';
    expect(setTheme(theme)).toEqual({
      type: SET_THEME,
      theme
    });
  });
});

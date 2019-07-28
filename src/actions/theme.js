import {SET_THEME} from '../constants/actionTypes';

export function setTheme(theme) {
  return {
    type: SET_THEME,
    theme
  };
}

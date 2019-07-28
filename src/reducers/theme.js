import {SET_THEME} from '../constants/actionTypes';

export const initialState = 'default';

const theme = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return action.theme;
    default: {
      return state;
    }
  }
};

export default theme;

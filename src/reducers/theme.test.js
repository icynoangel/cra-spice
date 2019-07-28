import {SET_THEME} from '../constants/actionTypes';
import theme, {initialState} from './theme';

describe('Reducers - theme', function() {
  beforeEach(() => {
    this.state = initialState;
  });

  it('should return initial state', () => {
    expect(theme(this.state, {type: 'unhandled'})).toEqual(this.state);
  });

  it('should handle SET_THEME', () => {
    const action = {
      type: SET_THEME,
      theme: 'dark'
    };
    expect(theme(this.state, action)).toEqual(action.theme);
  });
});

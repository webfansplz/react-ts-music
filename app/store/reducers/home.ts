import { handleActions } from 'redux-actions';
const state = {
  text: 'webfansplz'
};
const home = handleActions(
  {
    ['ADD_TODO2'](state, { payload }) {
      return Object.assign({}, state, { text: payload });
    }
  },
  state
);
export default home;

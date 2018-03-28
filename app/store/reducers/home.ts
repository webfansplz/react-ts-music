import { handleActions } from 'redux-actions';
const state = {
  text: 'webfansplz'
};
const home = handleActions(
  {
    ['HOME'](state, { payload }) {
      return Object.assign({}, state, { text: payload });
    }
  },
  state
);
export default home;

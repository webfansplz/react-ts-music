import { handleActions } from 'redux-actions';
const state = {
  text: 'webfansplz',
  text2: ''
};
const home = handleActions(
  {
    ['HOME'](state, { payload }) {
      return Object.assign({}, state, { text: payload });
    },
    ['HOME2'](state, { payload }) {
      console.log(payload);
      return Object.assign({}, state, { text2: payload });
    }
  },
  state
);
export default home;

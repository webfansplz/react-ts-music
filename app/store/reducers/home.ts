export default function todos(state = { txt: '', count: 0 }, action: any): any {
  switch (action.type) {
    case 'home_req':
      return Object.assign({}, state, { txt: action.txt });
    default:
      return state;
  }
}

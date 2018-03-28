import { createActions } from 'redux-actions';
export const HOME = 'HOME';
export const HOME2 = 'HOME2';
export const { home, home2 } = createActions('HOME', 'HOME2');

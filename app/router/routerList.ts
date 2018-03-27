import asyncComponent from './asyncComponent';
const home = asyncComponent(() => import('../page/Home/Home'));
const routes = [
  {
    path: '/home',
    component: home
  }
];

export default routes;

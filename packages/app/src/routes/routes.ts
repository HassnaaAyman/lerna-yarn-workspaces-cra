/** @format */

import { lazy } from 'react';
const Dashboard = lazy(() => import('../pages/Dashboard'));

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
];

export default routes;

/** @format */

import { lazy } from 'react';

const OrderDetails = lazy(() => import('../ordersDetails'));
const Orders = lazy(() => import('../orders'));

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/orders/:id',
    name: 'OrdersDetails',
    component: OrderDetails,
  },
];

export default routes;

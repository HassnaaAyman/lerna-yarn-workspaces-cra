/** @format */

import { lazy } from 'react';

const OrderDetails = lazy(() => import('../ordersDetails'));

const routes = [
  {
    path: '/orders/:id',
    name: 'OrdersDetails',
    component: OrderDetails,
  },
];

export default routes;

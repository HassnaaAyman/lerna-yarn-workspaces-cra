/** @format */

import { Routes, Route } from 'react-router-dom';
import Orders from './orders';
import OrderDetails from './ordersDetails';

function App() {
  return (
    <Routes>
      <Route path='orders' element={<Orders />} />
      <Route path='orders/:id' element={<OrderDetails />} />
    </Routes>
  );
}

export default App;

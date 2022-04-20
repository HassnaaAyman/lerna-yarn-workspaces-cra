/** @format */
import protectedRoutes from './routes/routes';
import Protected from './routes/protected';
import NotFound from '@lucifer/components/src/common/NotFound';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/User/Login';
import orderRoutes from '@lucifer/orders/src/routes';

function App() {
  const allRoutes = protectedRoutes.concat(orderRoutes);
  const routes = allRoutes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Protected
            name={route.name}
            path={route.path}
            component={route.component}
          />
        }
      />
    );
  });

  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      {routes}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

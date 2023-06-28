import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Users />} />
        <Route path="places">
          <Route path="new" element={<NewPlace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

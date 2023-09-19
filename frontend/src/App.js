import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

// create HOC for MainNavigation
const withMainNavigation = (Component) => (props) =>
  (
    <>
      <MainNavigation />
      <main>
        <Component {...props} />
      </main>
    </>
  );

// wrap Users and NewPlace with MainNavigation
const UsersLayout = withMainNavigation(Users);
const NewPlaceLayout = withMainNavigation(NewPlace);

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<UsersLayout />} />
        <Route path="places">
          <Route path="new" element={<NewPlaceLayout />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

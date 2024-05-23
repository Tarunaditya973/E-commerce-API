import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
const routes = [
  {
    path: "/login",
    Element: <Login />,
    title: "Login",
    id: "Login",
  },
];

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.Element} />
      ))}
    </Routes>
  </BrowserRouter>
);
export default AppRouter;

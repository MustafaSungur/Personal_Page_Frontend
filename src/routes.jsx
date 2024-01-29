import Home from "./pages/Home";
import Projects from "./pages/Projects";

// name utilsteki eşleştirme için kullandık
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
];

export default routes;

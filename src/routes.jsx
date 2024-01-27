import Blog from "./pages/Blog";
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
  {
    path: "/blog",
    element: <Blog />,
  },
];

export default routes;

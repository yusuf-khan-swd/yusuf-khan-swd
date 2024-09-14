import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Others/Blog/Blog";
import ProjectDetails from "../../Pages/Projects/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://yusuf-khan-swd-server.vercel.app/projects/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default routes;

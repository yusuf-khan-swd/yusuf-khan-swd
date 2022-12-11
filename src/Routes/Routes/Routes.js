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
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => fetch(`https://yusuf-khan-swd-server.vercel.app/projects/${params.id}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ]
  }
]);

export default routes;
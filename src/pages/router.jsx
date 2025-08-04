import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { ErrorPage } from "./Error";
import { MainPages } from './MainPages';
import { MoviesPages } from './MoviesPages';
import { Movie } from './Movie';
import { fetchMovieDetails } from "./Fetch";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true,
        element: <MainPages /> 
      },
      {
        path: "/movies",
        element: <MoviesPages />,
      },
      {
        path: "/movie/:movieId",
        element:<Movie/>,
        loader: fetchMovieDetails
      }
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MoviesPage } from "./pages/MoviesPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
  {
    path: '/movies',
    element: <MoviesPage/>
  }
])



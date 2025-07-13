import { NavLink } from "react-router-dom";

export const Index = () => (
  <><main className="main">
    <h1>Index page</h1>
    <p>
      Головна сторінка сайту
    </p>
  </main>
  <footer>
      <NavLink to="/">Home</NavLink> <NavLink to="/movies">Movies</NavLink>
    </footer>
  </>
);

/* <footer>
      <NavLink to="/">Home</NavLink> <NavLink to="/movies">Movies</NavLink>
    </footer> */

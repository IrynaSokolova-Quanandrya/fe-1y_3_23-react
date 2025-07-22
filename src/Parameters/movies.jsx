import { NavLink } from "react-router-dom";

export const Movies = () => {
  return (
    <ul>
      <li>
        <NavLink to="/movie/1">Harry Potter and the Philosopher's Stone</NavLink>
      </li>
      <li>
        <NavLink to="/movie/1">Harry Potter and the Chamber of Secrets</NavLink>
      </li>
      <li>
        <NavLink to="/movie/1">Harry Potter and the Prisoner of Azkaban</NavLink>
      </li>
    </ul>
  );
};

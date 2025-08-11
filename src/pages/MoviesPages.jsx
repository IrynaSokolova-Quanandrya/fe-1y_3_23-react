import { Link, useSearchParams } from "react-router-dom";

export const MoviesPages = () => {
  const [searchParams, setSearchParams] = useSearchParams()
 
  const handleChange = (e) => {
    setSearchParams({sort: e.target.value})
  } 

  return (
    <>
      <input type="text" value={ searchParams.get('sort') ?? ''} onChange={handleChange} />
      <ul>
        <li>
          <Link to="/movie/1">
            Harry Potter and the Philosopher's Stone
          </Link>
        </li>
        <li>
          <Link to="/movie/2">
            Harry Potter and the Chamber of Secrets
          </Link>
        </li>
        <li>
          <Link to="/movie/3">
            Harry Potter and the Prisoner of Azkaban
          </Link>
        </li>
      </ul>
    </>
  );
};

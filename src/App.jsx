import { useDispatch } from "react-redux";
import { addTasks } from "./redux/store";


export const App = () => {
  const dispatch = useDispatch()

  const handleClik = () => {
    dispatch(addTasks({
      id: 5,
      text: 'My new task',
      completed: false
    }))
    
  }

  return <>
    <h1>Redux</h1>
    <button onClick={handleClik}>додати завдання</button>
  </>
  
  
};

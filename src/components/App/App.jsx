import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import initialTodos from '../../todos.json';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import { TodoList } from '../TodoList/TodoList';
import { Modal } from '../Modal/Modal';
import { Btn } from "../Button/Button";
import { GlobalStyle } from '../../GlobalStyle.styled';
import { Container } from './App.styled';


export class App extends Component {  
  state={
    todos: initialTodos,
  }

  addTodo = (text)=>{
    const newTodo = {
      id: nanoid(),
      text,
      completed: false
    }
    
  this.setState((prevState)=>{
    return {
      todos: [newTodo, ...prevState.todos]
    }
  })
  }

  deleteTodo = (todoId) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter(todo=>todo.id !== todoId)
      }
    })
  }

  toggleCompleted = (todoId) => {
    this.setState(prevState => (
      {
        todos: prevState.todos.map(todo =>
          todo.id === todoId
            ? { ...todo, completed: !todo.completed }
            : todo
      )}
    ))
  }

  

  render() {
    return (
      <Container>
        {/* <Btn type="button" onClick={this.toggleModal}><FaPlus size={30}/></Btn> */}
       
        {/* {this.state.showModal && <Modal onClose={this.toggleModal}>
          <Btn type="button" onClick={this.toggleModal}><IoMdClose /></Btn> */}
                  <TodoEditor addTodo={this.addTodo}/>
        {/* </Modal>} */}
      
        {this.state.todos.length > 0 && <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />}
      <GlobalStyle/>
      </Container>
    );
  }
};
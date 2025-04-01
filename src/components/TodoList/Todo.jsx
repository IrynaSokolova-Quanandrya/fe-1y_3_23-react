import { Item, Text } from './TodoList.styled';
import { Button } from '../Button/Button.styled';
import { Component } from 'react';

export class Todo extends Component {

  componentWillUnmount() {
    console.log('Розмонтування');
  }
  
  
  handleDelete = () => {
    this.props.onDelete(this.props.todoId)
  }

   handleChange = () => {
    this.props.onToggleCompleted(this.props.todoId)
   }
  
  render() {
    const { todoId, text, completed, onDelete, onToggleCompleted } = this.props
  return(
      
        <Item>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleChange} />    
        <Text checked={completed}>{text}</Text>
        <Button onClick={this.handleDelete}>Delete</Button>
      </Item>
    )
  }
   
}
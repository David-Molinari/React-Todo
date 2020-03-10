import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
          input: '',
          todos: []
      }
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, {task: this.state.input, id: Date.now(), completed: ""} ]});
    }

  clickHandler1 = (event) => {
    event.preventDefault();
    const notCompleted = this.state.todos.filter(el => el.completed !== "completed");
    this.setState({ todos: notCompleted })
    }


  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: "completed"
          };
        } else {
          return item;
        }
      })
    })
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState({input: event.target.value});
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data = {this.state} toggleCompleted = {this.toggleCompleted} />
        <TodoForm clickHandler = {this.clickHandler} changeHandler = {this.changeHandler} clickHandler1 = {this.clickHandler1}/>
      </div>
    );
  }
}

export default App;


import './App.css';
import TodoList from './component/TodoList';
import {useState} from 'react'

function App() {
  const initial = [
    {
      id: 1,
      text: '할 일 1',
      createAt: '2023-04-12',
      isDone: false
    },
    {
      id: 2,
      text: '완료한 일 2',
      createAt: '2023-04-12',
      isDone: true
    },
    {
      id: 3,
      text: '할 일 3',
      createAt: '2023-04-12',
      isDone: false
    }
  ]
  const [todos, setTodos] = useState(initial);

  const addTodo = (text) => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const createAt = new Date().toLocaleDateString()
    const newTodo = {
      id: newId,
      text,
      createAt
    }
    setTodos([...todos, newTodo]);
  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    const text = event.target.elements.todoText.value;
    if (text.trim().length === 0) {
      return;
    }
    addTodo(text);
    event.target.elements.todoText.value = '';
  };
 

  return (
    <>
      <h1>간단한 Todo App 만들기</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Add todo" />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;

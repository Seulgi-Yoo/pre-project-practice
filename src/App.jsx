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
  return (
    <>
      <h1>간단한 Todo App 만들기</h1>
      <TodoList todos={todos}/>
    </>
  );
}

export default App;

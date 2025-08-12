import { useState } from 'react';
import {Topbar} from './components/Topbar';
import {Todos} from './components/Todos';
import {NewTodo} from './components/NewTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    if(todoText.trim() === ``) return;

    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  return (
    <>

      <Topbar pendingCount = {todos.length} />
      <Todos todos = {todos} />
      <NewTodo onAddTodo = {handleAddTodo} />

    </>
  );
}

export { App }

import { useState } from 'react';
import { Topbar } from './components/Topbar';
import { Todos } from './components/Todos';
import { NewTodo } from './components/NewTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    if (todoText.trim() === ``) return;

    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    }

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  const handleDeleteTodo = (todoID) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoID));
  }

  const toggleChecked = (todoID) => {
    setTodos(prevTodos => (prevTodos.map(todo => todo.id === todoID ? { ...todo, completed: !todo.completed } : todo))
    );
  }

  return (
    <>

      <Topbar pendingCount={todos.length} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={toggleChecked} />
      <NewTodo onAddTodo={handleAddTodo} />

    </>
  );
}

export { App }

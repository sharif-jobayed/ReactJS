
const Todos = ({ todos, onDeleteTodo, onToggleTodo }) => {
	if (todos.length === 0) {
		return (
			<>

				<p className="noTodosMessage">You have no todos yet. Add one below!</p>

			</>
		);
	} else {
		return (
			<>

				<ol className="todos">
					{todos.map(todo =>
					(<li key={todo.id} className="todo">
						<input type="checkbox" onClick={() => { onToggleTodo(todo.id) }} /*defaultChecked={false}*/ className="todoCheckbox" />
						<p className={`todoText ${todo.completed ? 'completed' : ''}`}>{todo.text}</p>
						<span onClick={() => { onDeleteTodo(todo.id) }} className="deleteTodo">X</span>
					</li>)
					)}
				</ol>

			</>
		);
	}
}

export { Todos }

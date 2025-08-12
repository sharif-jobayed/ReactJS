
const Todos = ({ todos, onDeleteTodo }) => {	
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
						<input type="checkbox" name="" id="" className="todoCheckbox" />
						<p className="todoText">{todo.text}</p>
						<span onClick={() => {onDeleteTodo(todo.id)}} className="deleteTodo">X</span>
					</li>)
					)}
				</ol>

			</>
		);
	}
}

export { Todos }


const Todos = ({ todos }) => {
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
							<span className="deleteTodo">X</span>
						</li>)
					)}
				</ol>

			</>
		);
	}
}

export { Todos }

import { useState } from "react";

const NewTodo = ({onAddTodo}) => {
	const [todoText, setTodoText] = useState(``);

	const handleInputChange = (e) => {
		setTodoText(e.target.value);
	}

	const handleSubmission = (e) => {
		e.preventDefault();
		onAddTodo(todoText);
		setTodoText(``);
	}

	return (
		<>

			<form action="" onSubmit={handleSubmission} className="newTodoForm">
				<input
					type="text"
					className="newTodoField"
					onChange={handleInputChange}
					value={todoText}
				/>
				<button
					type="submit"
					className="addTodoBtn"
				>
					Save
				</button>
			</form>

		</>
	);
}

export { NewTodo }

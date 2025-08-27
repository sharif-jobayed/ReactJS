import React, { useState, useEffect } from 'react';

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState(``);

	const handleInputChange = (event) => {
		setNewTask(event.target.value);
	}

	const addTask = () => {
		if (newTask.trim() === ``) return;

		setTasks(t => [...t, newTask]);
		setNewTask(``);
	}

	const deleteTask = (index) => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
	}

	const moveTaskUp = (index) => {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
			setTasks(updatedTasks);
		}
	}

	const moveTaskDown = (index) => {
		if (index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
			setTasks(updatedTasks);
		}
	}

	return (
		<>
			<div className="todoList">

				<h1>My Todos</h1>

				<div>
					<input
						type="text"
						placeholder="Enter your task..."
						value={newTask}
						onChange={handleInputChange}
					/>

					<button type="submit" onClick={addTask} className="addButton">Add</button>
				</div>

				<ol>
					{tasks.map((task, index) =>
						<li key={index}>
							<span className="text">{task}</span>

							<button type="button"
								className="deleteButton"
								onClick={() => deleteTask(index)}
							>
								X
							</button>

							<button type="button"
								className="moveButton"
								onClick={() => moveTaskUp(index)}

							>
								👆
							</button>

							<button type="button"
								className="moveButton"
								onClick={() => moveTaskDown(index)}

							>
								👇
							</button>
						</li>
					)}
				</ol>

			</div>
		</>
	);
}

export { TodoList }

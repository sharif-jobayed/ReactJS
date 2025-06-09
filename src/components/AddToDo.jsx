import { useState } from "react";

const AddToDo = (props) => {
	const [inputValue, setInputValue] = useState(``);
	const [error, setError] = useState(``);

	const handleAddClick = () => {
		const trimmedValue = inputValue.trim();
		if (trimmedValue === ``) {
			setError("Task cannot be empty. Please enter a task.");
			return;
		}
		props.clicked(trimmedValue);
		setInputValue(``); // Clear input after adding
		setError(``); // Clear error message
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		if (error) {
			setError(``); // Clear error when user starts typing
		}
	};

	return (
		<>
			<div className="grid grid-cols-[75%_25%] gap-1 align-items-center">
				<input type="text" value={inputValue} onChange={handleInputChange} className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-0 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Add a new task..." />
				<button className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddClick}>Add</button>
			</div>
			{error && <p className="text-red-500 text-xs mt-1 text-center">{error}</p>}
		</>
	);
}

export { AddToDo }

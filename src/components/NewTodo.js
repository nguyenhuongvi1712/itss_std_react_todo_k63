import React, { useState } from "react";
function NewTodo(props) {
	const [inputValue, setInputValue] = useState("");
	const handleOnChangeInputValue = (target) => {
		setInputValue(target.target.value);
	};
    const handleAddNewTodo = () => {
        if(inputValue !== ''){
            props.onAddNewTodo(inputValue)
        }
    }
	return (
		<div className="mb-4">
			<input
				className="input mb-4"
				type="text"
				placeholder="todo..."
				onChange={handleOnChangeInputValue}
			></input>
			<button className="button is-primary" onClick={handleAddNewTodo}>
				Add new todo
			</button>
		</div>
	);
}
export default NewTodo;

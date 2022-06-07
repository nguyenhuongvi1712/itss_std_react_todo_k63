import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input(props) {
  const [inputValue, setInputValue] = useState("");
	const handleOnChangeInputValue = (target) => {
		setInputValue(target.target.value);
	};
  const handleAddNewTodo = (event) => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
        props.onAddNewTodo(inputValue)
      }
    }
  }
  return (
    <div className="panel-block">
      <input
				className="input mb-4"
				type="text"
				placeholder="todo..."
        onChange={handleOnChangeInputValue}
        onKeyDown={handleAddNewTodo}
			></input>
    </div>
  );
}

export default Input;

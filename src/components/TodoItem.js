/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState } from "react";
function TodoItem(props) {
	const [customClass, setCustomClass] = useState("panel-block");
	const handleOnChange = (event) => {
		if(event.target.checked)
			setCustomClass("panel-block has-text-grey-light");
		else
			setCustomClass("panel-block")
	};
	return (
		<label className={customClass}>
			<input type="checkbox" onChange={handleOnChange}/>
			{props.item.text}
		</label>
	);
}

export default TodoItem;

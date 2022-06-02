/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState } from "react";
function TodoItem(props) {
	const [customClass, setCustomClass] = useState("panel-block");
	const handleOnclick = () => {
		setCustomClass("panel-block has-text-grey-light");
	};
	return (
		<label className={customClass} onClick={handleOnclick}>
			<input type="checkbox" />
			{props.item.text}
		</label>
	);
}

export default TodoItem;

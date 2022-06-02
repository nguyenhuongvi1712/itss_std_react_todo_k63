import React, { useState } from "react";

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

/* カスタムフック */
import useStorage from "../hooks/storage";

/* ライブラリ */
import { getKey } from "../lib/util";
import NewTodo from "./NewTodo";

function Todo(props) {
	const [items, putItems] = React.useState([
		/* テストコード 開始 */
		{ key: getKey(), text: "日本語の宿題", done: false },
		{ key: getKey(), text: "reactを勉強する", done: false },
		{ key: getKey(), text: "明日の準備をする", done: false },
		/* テストコード 終了 */
	]);
    const handleAddNewTodo = (inputValue) => {
        var items_var = items
        items_var.push({
			key: getKey(),
			text: inputValue,
			done: false,
		});
        putItems(items_var)
    }

	return (
		<div className="panel">
			<NewTodo onAddNewTodo={handleAddNewTodo}></NewTodo>
			<div className="panel-heading">ITSS ToDoアプリ</div>
			{items.map((item) => (
				// <label className="panel-block">
				//     <input type="checkbox" />
				//     {item.text}
				// </label>
				<TodoItem item={item} key={item.key} />
			))}
			<div className="panel-block">{items.length} items</div>
		</div>
	);
}

export default Todo;

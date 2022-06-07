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

function Todo(props) {
	const [items, putItems] = useState([
		/* テストコード 開始 */
		{ key: getKey(), text: "日本語の宿題", done: false },
		{ key: getKey(), text: "reactを勉強する", done: false },
		{ key: getKey(), text: "明日の準備をする", done: false },
		/* テストコード 終了 */
	]);
    const handleAddNewTodo = (inputValue) => {
        const new_items = [...items, {
			key: getKey(),
			text: inputValue,
			done: false,
		}]
		putItems(new_items)
    }

	return (
		<div className="panel">
			<Input onAddNewTodo={handleAddNewTodo}></Input>
			<Filter></Filter>
			<div className="panel-heading">ITSS ToDoアプリ</div>
			{items.map((item) => (
				<TodoItem item={item} key={item.key} />
			))}
			<div className="panel-block">{items.length} items</div>
		</div>
	);
}

export default Todo;

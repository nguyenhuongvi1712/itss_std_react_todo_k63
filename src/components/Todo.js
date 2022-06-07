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
	// const [items, putItems] = useState([
	// 	/* テストコード 開始 */
	// 	{ key: getKey(), text: "日本語の宿題", done: false },
	// 	{ key: getKey(), text: "reactを勉強する", done: false },
	// 	{ key: getKey(), text: "明日の準備をする", done: false },
	// 	/* テストコード 終了 */
	// ]);
	const [items, putItems, clearItems] = useStorage();
	const [filter, setFilter] = React.useState('ALL');

	const displayItems = items.filter(item => {
		if (filter === 'ALL') return true;
		if (filter === 'TODO') return !item.done;
		if (filter === 'DONE') return item.done;
	});
	const handleFilterChange = value => setFilter(value);
    const handleAddNewTodo = (inputValue) => {
        const new_items = [...items, {
			key: getKey(),
			text: inputValue,
			done: false,
		}]
		putItems(new_items)
	}
	const handleOnChangeStatus = (key) => {
		let update_item,update_items
		const existing_item_index = items.findIndex(e => e.key === key)
		const existing_item = items[existing_item_index]
		if (existing_item) {
			update_item = {
				...existing_item,
				done: !existing_item.done
			}
			update_items = [...items]
			update_items[existing_item_index] = update_item
			putItems(update_items)
		}
	} 

	return (
		<div className="panel">
			<Input onAddNewTodo={handleAddNewTodo}></Input>
			<Filter onChange={handleFilterChange} value={filter}></Filter>
			<div className="panel-heading">ITSS ToDoアプリ</div>
			{displayItems.map((item) => (
				<TodoItem item={item} key={item.key} onChangeStatus={handleOnChangeStatus}/>
			))}
			<div className="panel-block">{displayItems.length} items</div>
			<div className="panel-block">
				<button className="button is-light is-fullwidth" onClick={clearItems}>
					全てのToDoを削除
				</button>
			</div>
		</div>
	);
}

export default Todo;

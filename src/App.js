import React from "react";

/* スタイルシート */
import "./styles/main.css";

/* コンポーネント */
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import { getKey } from "./lib/util";

function App() {
	return (
		<div className="container is-fluid">
			<Todo />
		</div>
	);
}

export default App;

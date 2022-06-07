import { useState } from "react"

/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ value, onChange }) {
 const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <div className="tabs is-centered">
        <ul>
          <li>
            <a
              href="#"
              onClick={handleClick.bind(null, 'ALL')}
              className={value === 'ALL' ?  'is-active' : ''}
            >全て</a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleClick.bind(null, 'TODO')}
              className={value === 'TODO' ?  'is-active' : ''}
            >未完了</a>
          </li>
          <li>
            <a
              href="#"
              onClick={handleClick.bind(null, 'DONE')}
              className={value === 'DONE' ?  'is-active' : ''}
            >完了済み</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter(  ) {
  return (
    <div className="panel-tabs mb-4">
      <div class="tabs is-centered">
        <ul>
          <li class="is-active"><a>全て</a></li>
          <li><a>未完了</a></li>
          <li><a>完了済</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Filter
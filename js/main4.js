'use-strict';

{
  //要素を作って処理をする方法
  //1.要素の追加
  //2.中身の変更や追加
  //3.DOMツリーへ追加
  document.querySelector('button').addEventListener('click',() => {
    const item2 =document.createElement('li');
    item2.textContent = 'item 2';

    const ulNode = document.querySelector('ul');
    //ulという親要素から見たらliは子要素なのでchild
    ulNode.appendChild(item2);
  });
}

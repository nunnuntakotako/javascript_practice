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

{
  //要素の複製
  document.getElementById('copybutton').addEventListener('click',() => {
    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    ul.insertBefore(copy, item2);
  });

  //要素の削除
  //親Node.removeChiled(削除するNode);
  document.getElementById('remove').addEventListener('click',()=> {
    const item1 = document.querySelectorAll('li')[1];
    document.querySelector('ul').removeChild(item1);
  });
}

{
  //入力値の利用
  document.getElementById('post').addEventListener('click',() => {
    const p = document.createElement('p');
    const text =document.querySelector('input');

    p.textContent = text.value;
    //この書き方だとappendChile(p)はエラーとなる
    document.getElementById('container').appendChild(p);
    text.value = '';
    //入力が完了するたびにinput内が空になり、そしてカーソルが入力欄にあるとなおいいのでこちらを使う
    text.focus();
  });
}

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);

//     text.value = '';
//     text.focus();
//   });
// }
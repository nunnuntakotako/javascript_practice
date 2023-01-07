`use strict`;

{
  //DOM => Document Object Model
  //それぞれのhtmlの要素をnodeと呼ぶ
  //element node,parent/child nodeと呼ばれるものもある
  //兄弟関係(並列)にあるものはsibling node

  function update() {
      //文書内から特定のnodeを引き出す場合の記述
    document.querySelector('h1').textContent = '練習ページ';
    document.querySelectorAll(`p`).textContent = 'Change!';
  }

  setTimeout(update, 1000);

  document.getElementById(`target`).textContent = '2回目の変化';



  }

  {
      //querySelectorでは指定要素が複数ある場合は最初の一つを処理する
    //指定した要素全てを変更したい場合はquerySelectorAllで指定するが、ここで取得されるのはp要素のリストである、リストではtextContentを持っていないので一気に書き換えるのが困難となる。
    //実現する場合はforeach文を使うようにする。
    function update() {
    document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    }
    setTimeout(update, 1000);

    let num = document.querySelectorAll('p').length;
    console.log(num);
  }

  {
    //jsでhtml要素に動きをつける

    document.querySelector('button').addEventListener('click',() => {
      const targetNode = document.getElementById('target');

      targetNode.textContent = 'Changed!';
      targetNode.title = 'This is title';
      targetNode.style.color = 'red';
      targetNode.style.backgroundColor = 'lightgray';
    });
    //ClassName
    //classを操作することでデザインを変更することも可能
    //html内にあるstyle内部のクラス名を呼び出す
    // document.getElementById('colorbutton').addEventListener('click',() => {
    //   const targetNode = document.getElementById('target');

    //   targetNode.className = 'my-color';
    //   //すでに他のクラスやstyleが適用されていた場合は、並列してクラスを書かないと消えてしまう
    // });

    //第２引数にはアロー関数を入れてもOK
  }

{
  //classList
  document.getElementById('colorbutton').addEventListener('click',() => {
    const targetNode = document.getElementById('target2');

    if (targetNode.classList.contains('my-color') === true) {
      //デザインが外れる
      targetNode.classList.remove('my-color');
    } else {
      //クラスをつける処理
      targetNode.classList.add('change-color');
    }

    //上記のif処理はクラスをつけたり外したりするので次の1行でも同じ処理が可能 change-colorはつけてない
    //targetNode.classList.toggle('my-color');
  });
}

{
  //データ属性として管理する
  const targetNode = document.getElementById('target');

  // targetNode.textContent = 'Dotinstall';
  targetNode.textContent = targetNode.dataset.translation;
}
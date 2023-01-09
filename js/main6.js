'use strict';

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

  //eはこの処理で得られたデータ引数として使用できる
  document.addEventListener('mousemove', e => {
    // console.log('moved!');
    console.log(e.clientX,e.clientY);
  });

  //キーボードを押した時の出力
  document.addEventListener('keydown', e => {
    console.log(e.key);
  });
}
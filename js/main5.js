'use strict';

{
  //選択した値をli要素に出力
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.querySelector('ul').appendChild(li);
  });
}

{
  //ラジオボタンでも同様のことが可能

  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');
  //   let selectedColor;

  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColor = color.value;
  //     }
  //   });

  //   const li = document.createElement('li');
  //   li.textContent = selectedColor;
  //   document.querySelector('ul').appendChild(li);
  // });

  //チェックボックスのパターン

  // document.querySelector('button').addEventListener('click', () => {
  //   const colors = document.querySelectorAll('input');
  //   const selectedColors = [];

  //   colors.forEach(color => {
  //     if (color.checked === true) {
    //配列なのでpushが使われています。
  //       selectedColors.push(color.value);
  //     }
  //   });

  //   const li = document.createElement('li');
  //   li.textContent = selectedColors;
  //   document.querySelector('ul').appendChild(li);
  // });

}
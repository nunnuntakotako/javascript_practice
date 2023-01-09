'use strict';

{
  const text = document.querySelector('textarea');
  //textareaが選択される
  // text.addEventListener('focus', () => {
  //   console.log('focus');
  // });

  //textareaの選択が外れる
  // text.addEventListener('blur', () => {
  //   console.log('blur');
  // });

  //textareaに入力されているかのチェック
  //textareaの入力文字数のチェック
  text.addEventListener('input', () => {
    // console.log('input');
    console.log(text.value.length);
  });
  //選択モードが外れたかのチェック
  text.addEventListener('change', () => {
    console.log('change');
  });
}
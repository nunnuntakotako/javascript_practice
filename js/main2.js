`use strict`;

{
  const scores = [80,90,40];

  //要素の扱い
  //shift → 先頭消去
  //pop → 末尾消去
  //push → 末尾追加
  //unshift → 先頭追加
  //length → 配列長さを確認
  //.splice(変化が開始する時間、削除数)
  //.splice(変化が開始する時間、削除数、値を入れる場合ここに)

  scores[2] = 44; //特定の要素番号の値を変更
  console.log(scores.length);
  scores.push(70,50,60);
  scores.unshift(100);
  console.log(scores);
  //90と44を消して、30,85,20を要素番号2以降に追加
  scores.splice(2,2,30,85,20);
  console.log(scores);
  //要素番号3番以降に49,55を埋め込む
  scores.splice(3,0,49,55);
  console.log(scores);

  //配列を末尾に結合させたい場合
  scores2 = [98,37];
  scores3 = [50,60,40, ...scores2];
  console.log(scores3);
  //関数の引数としても、...scores2は使える

  //レスト構文
  const scores4 = [80, 90, 40, 70];
  const [a, b, ...others] = scores4;
  console.log(others);

  for(let i = 0; i < scores.length; i++){
    console.log(`Scores ${i}:${scores[i]}`);
  }
}

{
  //foreach構文
  const scores = [60,70,80,90];

  scores.forEach((score,index) => {
    console.log(`${index}番目は${score}点です`);
  });
}
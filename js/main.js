`use strict`;
const number = 50;
let price = 0.8;
let boxnumber = '11';

price *= 2;

console.log(number * price);
console.log(typeof '10');

console.log(typeof(parseInt(boxnumber)));

console.log(number > 90);

console.log(typeof(boxnumber))
console.log(Boolean(1));
console.log(Boolean(boxnumber));

// 条件式
if (number >= 80) {
  console.log('Excellent');
} else if (number >= 60) {
  console.log('good!');
} else {
  console.log('soso');
}

number >= 80 ? console.log('素晴らしい！') : console.log('次頑張りましょう');

// &&かつ
// ||または
// ! 違う

let signal = 'pink';

//switch

switch(signal) {
  case 'red':
    console.log('Stop');
    break;
  case 'yellow':
    console.log('Caution');
    break;
  case 'blue' :
  case 'green':
    console.log('Go');
    break;
  default:
    console.log('none');
}

// for構文
//for (初め ; 終わり ; 処理){}

for(let i = 1; i <= 10; i++){
  console.log('hello' + `${i}`);
}

// ループスキップはcontinue

for (let i = 1; i <= 100; i++){
  if ( i % 3 === 1){
    continue;
  }
  console.log(i);
}

//関数を作る function

function showAd(message){ //仮引数
  console.log(`${message}`);
}

showAd('hello world');

function sum(a, b, c){
  return a + b + c;
}

let total = sum(1,2,3) + sum(4,5,6);
console.log(total);

//無名関数
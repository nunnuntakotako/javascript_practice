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
  //foreach構文 配列の中身を順番に取り出す
  const scores = [60,70,80,90];

  scores.forEach((score,index) => {
    console.log(`${index}番目は${score}点です`);
  });

  //map構文 新たに配列を作り直す
  const updatescores = scores.map(score => score + 40);
  console.log(updatescores);
}

{
  //filter構文 配列の中で特定の条件に合うものを返す
  const numbers = [1,3,4,5,7,8];

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers);
}

{
  //オブジェクト記法 連想配列

  let point = {
    x: 10 ,
    y: 20 ,
    //これ以降の配列追加は 「...配列名」を記載すると結合される
  };

  console.log(point.x); //または文字列で['x']で渡す

  //キーの追加
  point.z = 90;

  //キーの削除
  delete point.y;

  console.log(point);

  //上記のオブジェクトはForEach文には使えないので、
  //①Object.keys()で指定し直すか
  //②二次元配列のように[{}]入れ込む必要がある

  //①
  const keys = Object.keys(point);
  keys.forEach(key => {
    console.log(`Key:${key} Value :${point[key]}`);
  });

  //②
  const points = [
    {x: 10 , y: 20 },
    {x: 10 , y: 50 },
    {x: 20 , y: 30 }
  ];

  console.log(points[1].y);

  //配列の挙動
  let x = [1,2];
  let y = [...x];
  //この書き方であると、yの値は[1,2]の値のみをコピーしている状態なので、xが変更されても変更を受けない
}

{
  //文字数の取得
  const str = 'hello';

  console.log(str.length);

  //何番目かの文字列を取得する
  console.log(str.substring(1,3));
  console.log(str[2]);

}

{
  //join 配列内の文字列に追加
  const d = [2022, 1, 5];
  console.log(d.join('/'));

  //split 文字列をどこかで分けて、配列にする
  const t = '13:01:24';
  console.log(typeof(t));
  console.log(t.split(':'));
  const changed_t = t.split(':')
  console.log(typeof(changed_t));

  //分割代入
  const [hour, minute, second] = t.split(':')
  console.log(hour);
  console.log(minute);
  console.log(second);
}

{
  //数値計算 切り捨てと切り上げ
  let numbers = [4,7,14];
  let sum = 0;

  numbers.forEach(number => {
    sum += number
  });

  let avg = sum / numbers.length;
  //floor 切り捨て
  console.log(Math.floor(avg));
  //ceil 切り上げ
  console.log(Math.ceil(avg));
  //round 四捨五入
  console.log(Math.round(avg));
  //指定した小数点以下まで表示
  console.log(avg.toFixed(2));

  //0~1未満のランダムな数値を表示
  console.log(Math.random());
  let r_num = Math.random() * 100;
  console.log(Math.floor(r_num));
}

{
  //日時を取得する
  const d = new Date();
  console.log(d);

  //月を取得する
  let day = d.getUTCDay();
  //曜日を取得
  function day_name(day){
    switch(day){
      case 0:
        return '日曜';
      case 1:
        return '月曜';
      case 2:
        return '火曜';
      case 3:
        return '水曜';
      case 4:
        return '木曜';
      case 5:
        return '金曜';
      case 6:
        return '土曜';
      default:
        return 'none';
    }
  };

  console.log(`${d.getMonth() + 1}月`);
  let today_data = [d.getFullYear(),d.getMonth()+1,d.getUTCDate(),day_name(day)];

  today_data.forEach(data => {
    console.log(data);
  });
  //日付指定などはd.setDate()
}

{
  //警告や確認のウィンドウを表示させる
  alert('hello');

  const answer = confirm('削除しますか？');
  if (answer){
    console.log('削除しました');
  }else{
    console.log('元の画面に戻ります');
  }
}

{
  //現在日時の取得
  //タイマー機能

  let i = 0;
  function showTime(){
    console.log(new Date());
    ++i;
    //3秒で止まる条件式
    if (i > 2){
      clearInterval(intervalId);
    }
  }
  //setInterval(,第二引数)はms単位で
  //インターバルごとに表示される
// let intervalId = setInterval(showTime, 1000);

}

{
  function showTime(){
    console.log(new Date());
  }
  //setTimeout(,第二引数) 指定時間後に処理をする
  //setTimeout( showTime,10000);
  //関数の中に上記を入れれば決まった時間間隔での繰り返し処理も可能となる。
}

{
  //文字列の編集
  //大文字に変換
  let name = `hiraoka`;
  console.log(name.toLocaleUpperCase()); //文字列しか対応していない

  //例外処理
  //対応していないオブジェクト型で処理が止まるなど、
  //その処理をスキップして進めたりする
  let number = 10; //数値を入れる
  try {
    console.log(number.toLocaleUpperCase());
  }catch (e){
    console.log(e);
  }
  console.log(`Finish`);
}

{
  //同じオブジェクト内のプロパティにアクセスする場合は
  //thisを使えばいい

  const posts = [
    {
      text:`hello`,
      likeCount:0,
      //下記のように関数をプロパティとして扱う場合はその関数を「メソッド」という
      // show: function(){
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      show(){
         console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text:`hi!`,
      likeCount:0,
      show: function(){
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];
  posts[0].show();
}

//オブジェクトをテンプレート化するクラスを作る
{
  //クラスから作られるオブジェクトをインスタンスという
  //クラス内で作られるオブジェクトはthisというキーワードをつける
  //new クラス名(引数) でインスタンスを作ることができる

  class Post{
    //constructor() 特殊なメソッドで初期化
    constructor(text){
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }

    like() {
      this.likeCount++;
    }
    //静的メソッドをつくる
    //インスタンスを介さずに直接クラスから呼び出す仕組みもある
    //個々のオブジェクトであるインスタンスとは直接関係ないけれど、機能を追加する場合に便利
    //静的メソッドではthisは使えない

    static showInfo(){
      console.log(`Post class ver1.0`);
    }
  }
  //ここまででクラスが完成した

  const posts = [
    new Post(`Jsの勉強中です`),
    new Post(`プログラミングが楽しい！`),
  ];
  posts[0].like();
  posts[0].show();
  posts[1].show();
  //like() のように何か処理を加えたい場合は、メソッドを介して繋ぐようにしていく。
  //posts[0].likeCount++;でもlike()と同様の処理となるが、同じ処理を他のプロパティにもつける場合、変更が生じると、全て書き換える必要があるのでこのようにする。

  Post.showInfo();
}

{
//クラスの継承について extends
  class Post { // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post { // 子クラス
    constructor(text, sponsor) {
      //子クラスのconstructor()でthisキーワードを使うには、connstructor()の最初でsuper()としてあげる必要がある。
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      //super.で繋げれば親クラスのメソッドを呼べる
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}

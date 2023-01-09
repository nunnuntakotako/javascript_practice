'use strict';
//APIの活用
//root => 指定している範囲 viewport
//target => 対象物
//Intersection Ratio => その二つの重なり
//ユーザーの視覚からタイミングを図りサイトに動きをつけるのに役立つ



//この状態であるとrootに0%で交差して出てくる
{
  const targets = document.querySelectorAll('img');

  function callback(entries,obs) {
    console.log(entries);

    // if(!entries[0].isIntersecting) {
    //   //スクロール後にターゲットを消さない処理
    //   return;
    // }
    // entries[0].target.classList.add('appear');
    // //監視を止める記述↓
    // obs.unobserve(entries[0].target);
    // // if (entries[0].inIntersecting) {
    // //   entries[0].target.classList.add('appear');
    // // } else {
    // //   entries[0].target.classList.remove('appear');
    // // }

    //複数要素に対して処理をする
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    //20~80%
    threshold: [0.2, 0.8],
    //rootをrootMarginで調整できる
    rootMargin:'0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}


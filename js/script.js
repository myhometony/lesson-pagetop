// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'block',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生（falseで自動再生なし）
  autoPlay : true,
  // 自動再生時のスライド切替間隔（ミリ秒）
  autoPlayDuration : 3000,
  // キーボードの矢印キーによるスライド送りの設定（trueで有効）
  keyboardOnAlways : true,
  // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
});

$(function() {
  $('#back a').on('click',function(event){
    // #back内のaタグがクリックされたときの処理
    // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定
    // eventという名前の引数に渡す
    $('body, html').animate({//jQueryの関数
      scrollTop:0//スクロール位置を取得できるメソッド
    }, 800);
    event.preventDefault();//aタグの機能を無効にするメソッド
  });
});
// $(function () {
//
//     $('.slideshow').each(function (i) {
//
//         var $slides = $(this).find('img'); // すべてのスライド
//         var slideCount = $slides.length; // スライドの点数
//         var currentIndex = 0; // 現在のスライドを示すインデックス
//
//         $slides.eq(currentIndex).fadeIn();
//
//         // xミリ秒ごとに showNextSlide 関数を実行
//         setInterval(showNextSlide, 2000);
//
//
//         function showNextSlide () {
//
//             // 次に表示するスライドのインデックス
//             var nextIndex = (currentIndex + 1) % slideCount;
//
//             // 現在のスライドをフェードアウト
//             $slides.eq(currentIndex).fadeOut();
//
//             // 次のスライドをフェードイン
//             $slides.eq(nextIndex).fadeIn();
//
//             // 現在のインデックスを更新
//             currentIndex = nextIndex;
//         }
//
//
//     });
// });


$(function () {
    $('.slideshow').each(function () {

        // 変数の準備
        var $container = $(this); // スライドショー全体のコンテナ
        var $slideGroup = $container.find('.slideshow__slides'); // 全スライドのまとまり
        var $slides = $slideGroup.find('.slide'); // 各スライド
        var $nav = $container.find('.slide-nav'); // ナビゲーション
        var $indicator = $container.find('.slide-indicator'); // インジケーター

        var slideCount = $slides.length; // スライドの点数
        var indicatorHTML = ''; // .slide-indicatorの中に入るHTML
        var currentIndex = 0; // 現在のスライドのインデックスを格納する。スライドショーが更新されるたびにこの変数も更新される
        var duration = 500; // アニメーションの所要時間
        var easing = 'linear'; // イージングの種類
        var interval = 2000; // 次のスライドに移るまでの時間
        var timer; // マウスがスライド上に乗ったときにオートプレイを一時停止するために使用する変数。定義のみ。


        // 要素の生成, 挿入
        $slides.each(function (i) {
            $(this).css({left: 100 * i + '%'}); // スライドの位置を設定
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>'; // インジケーターを追加
        });
        $indicator.html(indicatorHTML);



        // ↓ここからスライドショーを動かす機能を実装する
        // 必要な機能
        // - ナビゲーションをクリックしたら1つ前もしくは1つ後のスライドを表示する
        // - インジケーターをクリックしたら該当するスライドを表示する
        // - 一定時間が経過したら、現在のスライドの次のスライドを表示する


        function goToSlide() {
        }


        function updateNav() {

        }


        function startTimer () {

        }


        function stopTimer() {

        }
    });
});

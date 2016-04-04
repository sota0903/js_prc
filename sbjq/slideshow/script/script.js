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
// a
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
        var slideshow = {
            container: $(this),
            group: function () {
                return slideshow.container.find('.slideshow__slides');
            },
            slides: function () {
                return slideshow.group().find('.slide');
            },
            nav: function () {
                return slideshow.container.find('.slide-nav');
            },
            indicator: function () {
                return slideshow.container.find('.slide-indicator');
            }
        };

        var slideCount = slideshow.slides.length;
        var indicatorHTML = '';
        var currentIndex = 0;
        var duration = 500;
        var easing = 'easeInOutExpo';
        var interval = 2000;
        var timer;


        // 要素の生成, 挿入
        slideshow.slides().each(function (i) {
            $(this).css({left: 100 * i + '%'});
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        slideshow.indicator().html(indicatorHTML);


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

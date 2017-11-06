/**
 * Created by le-soft on 2017/6/30.
 */
$(function(){
    $("#banner").load('data/slide.php');;
})
var mySwiper = new Swiper('.swiper-container', {
    direction : 'vertical',
    //autoplay : 5000,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '"><i></i></span>';
    }
});
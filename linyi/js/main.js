/**
 * Created by le-soft on 2017/6/21.
 */
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
var mySwiper2 = new Swiper('.swiper-container_ban2', {
        direction : 'horizontal',
        //autoplay : 5000,
        loop: true,
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '"><i></i></span>';
        }
});
var mySwiper3= new Swiper('.swiper-container2', {
        direction : 'horizontal',
        //autoplay : 5000,
        loop: true,
        pagination: '.swiper-pagination1',
});
AOS.init({
        easing: 'ease-out-back',
        duration: 1000
});
//公共的头部和顶部和底部
$(function(){
        $('#top').load('data/header.php',function(){
                $(".modal .m_lf ul").on('click','a',function(){
                        $(this).addClass('white_line').parent().siblings().children('.white_line').removeClass('white_line');
                })
                $(".modal .m_lf ul").on('mouseover','a',function(){
                        $(this).addClass('white_line').parent().siblings().children('.white_line').removeClass('white_line');
                })
        });
        $(".fot_same").load('data/footer.php');
})





/**
 * Created by le-soft on 2017/7/3.
 */
$(function(){
    $('#top').load('data/header.php',function(){
        $(".modal .m_lf ul").on('click','a',function(){
            $(this).addClass('white_line').parent().siblings().children('.white_line').removeClass('white_line');
        })
        $(".modal .m_lf ul").on('mouseover','a',function(){
            $(this).addClass('white_line').parent().siblings().children('.white_line').removeClass('white_line');
        })
    });
    $("#banner").load('data/slide.php');
    $(".fot_same").load('data/footer.php');
})
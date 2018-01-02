function fitauto(){
    $('.bodywrap').height($(window).height()-80);
}
$(function(){
    fitauto();
    // $('.navgation li').click(function(){
    //     fitauto();
    // });
})
$(window).resize(function(){
    fitauto();
});
$(function(){
    if($('body').hasClass('portfolio')) {
        $(this).find('#portfolio').addClass('border-top');
        $('#home').removeClass('border-top');
    } else {
        $('#portfolio').removeClass('border-top');
        $('#home').addClass('border-top');
    }
    
});
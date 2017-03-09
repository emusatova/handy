$(function() {
    $('.accordion__title').click(function () {
        $(this).parent().children('.accordion__content').toggle('slow');
    });

    $('.mdl-chip').click(function () {
       $(this).toggleClass('active');
    });
});
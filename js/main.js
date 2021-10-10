$(document).ready(function () {

    $('.click').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header-right').toggleClass('active-mobile');
    });
    $('.content').click(function (e) { 
        e.preventDefault();
        $('.click').removeClass('active');
        $('.header-right').removeClass('active-mobile');
    });
   
});
//

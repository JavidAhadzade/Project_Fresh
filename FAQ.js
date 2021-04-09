$('#up-icon').click(function () {
    $('.text1').slideDown(700);
    $('#up-icon').hide(700);
    $('#down-icon').show(700);
});
$('#down-icon').click(function () {
    $('.text1').slideUp(700);
    $('#down-icon').hide(700);
    $('#up-icon').show(700);
});


$('#up-icon1').click(function () {
    $('.text2').slideDown(700);
    $('#up-icon1').hide(700);
    $('#down-icon1').show(700);
});
$('#down-icon1').click(function () {
    $('.text2').slideUp(700);
    $('#down-icon1').hide(700);
    $('#up-icon1').show(700);
});

$('#up-icon2').click(function () {
    $('.text3').slideDown(700);
    $('#up-icon2').hide(700);
    $('#down-icon2').show(700);
});
$('#down-icon2').click(function () {
    $('.text3').slideUp(700);
    $('#down-icon2').hide(700);
    $('#up-icon2').show(700);
});

$('#up-icon3').click(function () {
    $('.text4').slideDown(700);
    $('#up-icon3').hide(700);
    $('#down-icon3').show(700);
});
$('#down-icon3').click(function () {
    $('.text4').slideUp(700);
    $('#down-icon3').hide(700);
    $('#up-icon3').show(700);
});


$('.chat-logo').click(function () {
    $('.chat').show();
   
});



$('.close-chat').click(function () {
    $('.chat').hide();
   
});
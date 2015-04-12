$(function(){

    var load_url;

    function loadHackpad (hash) {
        var load_url = 'https://hackpad.com/ep/pad/static/' + hash;
        var hackpad_url = "https://hackpad.com/" + hash;
        $('.edit').attr('href', hackpad_url);
        $.ajax({
            url: load_url,
            type: 'GET',
            success: function(res) {
                var text = res.responseText;
                console.log(text);
                var find = new RegExp('<p><strong>', 'g');
                text = text.replace(find, "<p class='heading2'><strong>");
                $('article').html(text);
            },
            error:function(jqXHR, textStatus, errorThrown) {
                console.log("request failed" +textStatus);
                // var load_url = 'http://wentin.github.io/Hack-the-Hackpad/';
                // window.location.href = load_url;
                // window.location.reload();
            }
        });
    }

    var hash = window.location.hash?window.location.hash:'';
    hash = hash.replace("#", "");

    if (hash === '') hash = window.homepage_hash || '';
    $('body').removeClass('homepage');
    loadHackpad(hash);

    $('.hamburger').click(function(){
        var $header = $('header');
        if($header.hasClass('mobile-menu-open')){
            $header.removeClass('mobile-menu-open');
        } else {
            $header.addClass('mobile-menu-open');
        }
    });

    //var $inputinput = $('.input input');
    //
    //$inputinput.focus(function() {
    //   var inputvalue = $(this).val();
    //   // console.log(inputvalue);
    //   if (inputvalue == '') {
    //    $(this).parents('.linkbox').addClass('focused');
    //   }
    //});
    //
    //$inputinput.blur(function() {
    //   var inputvalue = $(this).val();
    //   if (inputvalue == '') {
    //    $(this).parents('.linkbox').removeClass('focused');
    //   }
    //});

    //$('.button').click(function(e){
    //    e.preventDefault();
    //    var inputvalue = $('.input input').val();
    //    if (inputvalue == '') {
    //        load_url = 'http://wentin.github.io/Hack-the-Hackpad/#' + 'dK2se3bCFHo';
    //        window.location.href = load_url;
    //        window.location.reload();
    //    } else {
    //        load_url = 'http://wentin.github.io/Hack-the-Hackpad/#' + inputvalue;
    //        window.location.href = load_url;
    //        window.location.reload();
    //    }
    //});

    //$('.question').click(function(e){
    //    e.preventDefault();
    //    load_url = 'http://wentin.github.io/Hack-the-Hackpad/#' + 'JVgfJHOyu6O';
    //    window.location.href = load_url;
    //    window.location.reload();
    //})

});


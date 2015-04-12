$(function(){

    function loadHackpad (hash) {
        var load_url = 'https://hackpad.com/ep/pad/static/' + hash;
        var hackpad_url = "https://hackpad.com/" + hash;
        $('.edit').attr('href', hackpad_url);
        $.ajax({
            url: load_url,
            type: 'GET',
            success: function(res) {
                var text = res.responseText;
                var find = new RegExp('<p><strong>', 'g');
                text = text.replace(find, "<p class='heading2'><strong>");
                $('article').html(text);
            },
            error:function(jqXHR, textStatus, errorThrown) {
                console.log("request failed" +textStatus);
            }
        });
    }

    function handleHashchange () {
        var hash = window.location.hash?window.location.hash:'';
        hash = hash.replace("#", "");

        if (hash === '') hash = window.homepage_hash || '';
        $('body').removeClass('homepage');
        loadHackpad(hash);
    }

    // Init
    handleHashchange();

    // Handle hashchange events
    $(window).bind('hashchange', handleHashchange);

    // Hamburger menu
    $('.hamburger').click(function(){
        var $header = $('header');
        if($header.hasClass('mobile-menu-open')){
            $header.removeClass('mobile-menu-open');
        } else {
            $header.addClass('mobile-menu-open');
        }
    });

});


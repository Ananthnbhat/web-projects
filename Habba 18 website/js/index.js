$('.rolldown-list li').each(function() {
    var delay = ($(this).index() / 4) + 's';
    $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay
    });
});
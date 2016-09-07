var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.ui = (function($){
    var ui = {
        init: function() {
        },
        hideDialog: function() {
            console.log("hiding tghe .dialog");
            $(".dialog").fadeOut(300);
        }
    };
    return ui;
})(jQuery);


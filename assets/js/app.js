
jQuery(document).ready(function($) {

    // var for width of screen
    var windowWidth = $(window).width();

    // write custom functions here
    function btn1() {

        var btn1 = $("#btn1");
        TweenLite.to(btn1, 0.3, {background: "#fff", color: "#2980B9", ease: Power3.easeOut});
    }

    function btn2() {

        var btn2 = $("#btn2"),
            windowWidth = $(window).width();

        if (windowWidth > 767) {
            $("#btn2").on("mouseenter", function() {
                TweenLite.to(btn2, 0.3, {scale: 1.05, ease: Power3.easeOut});
            });
            $("#btn2").on("mouseleave", function() {
                TweenLite.to(btn2, 0.3, {scale: 1.0, ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn2").on("click", function() {
                TweenLite.to(btn2, 0.3, {scale: 1.05, ease: Power3.easeOut});
            });
        }
    }

    function btn3() {

        var btn3 = $("#btn3");
        TweenLite.to(btn3, 0.3, {top: "10px", ease: Power3.easeOut});
    }

    function btn4() {

        var btn4 = $("#btn4");
        TweenLite.to(btn4, 0.3, {rotation: "360deg", ease: Power3.easeOut});
    }

    function btn5() {

        var btn5 = $("#btn5"),
            windowWidth = $(window).width();

        if (windowWidth > 767) {
            $("#btn5").on("mouseenter", function() {
                TweenLite.to(btn5, 0.3, {scale: 1.05, ease: Power3.easeOut});
            });
            $("#btn5").on("mouseleave", function() {
                TweenLite.to(btn2, 0.3, {scale: 1.0, ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn5").on("click", function() {
                TweenLite.to(btn5, 0.3, {scale: 1.05, ease: Power3.easeOut});
            });
        }
    }

    function btn6() {

        var btn6 = $("#btn6");
        TweenLite.to(btn6, 0.3, {left: "10px", ease: Power3.easeOut});
    }

    function btn7() {

        var iconBtn7 = $("#btn7 i");
        TweenLite.to(iconBtn7, 0.3, {left: "-100px", ease: Power4.easeIn});
    }

    function btn8() {

        var iconBtn8 = $("#btn8 i");
        TweenLite.to(iconBtn8, 0.3, {left: "100px", ease: Power4.easeIn});
    }

    function btn10Pulse() {

        var iconBtn10 = $("#btn10 .icon-first");
        TweenMax.to(iconBtn10, 1.5, {scale: 1.3, repeat: -1, yoyo: true, ease: Power4.easeInOut});
    }

    function btn10Click() {

        var iconBtn10 = $("#btn10 .icon-first");
        TweenLite.to(iconBtn10, 0.3, {scale: 5, opacity: 0, ease: Power3.easeOut});
        $("#btn10 .icon-last").css("opacity", 1);
    }

    function btn11() {

        var iconBtn11 = $("#btn11 i");
        TweenLite.to(iconBtn11, 0.3, {left: "100px", top: "-100px", ease: Power4.easeIn});
    }

    function btn12() {

        var iconBtn12 = $("#btn12 i");
        TweenLite.to(iconBtn12, 0.3, {left: "100px", ease: Power4.easeIn});
    }

    function btn13() {

        var btn13 = $("#btn13");
        TweenLite.to(btn13, 0.2, {background: "#0C9A4E", ease: Power4.easeIn});
        btn13.html('Thanks <i class="fa fa-smile-o icon-btn-right"></i>');
    }

    function btn14() {

        var btn14 = $("#btn14");
        TweenLite.to(btn14, 0.2, {background: "#E74C3C", ease: Power4.easeIn});
        btn14.html('Invalid <i class="fa fa-lock icon-btn-right"></i>');
        btn14.css("letter-spacing", "1px");
    }

    function btn15() {

        var btn15Left = $("#btn15 .left"),
            btn15Right = $("#btn15 .right");

        if (windowWidth > 767) {
            $("#btn15").on("mouseenter", function() {
                TweenLite.to(btn15Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn15Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
            $("#btn15").on("mouseleave", function() {
                TweenLite.to(btn15Left, 0.3, {left: "-100%", ease: Power3.easeOut});
                TweenLite.to(btn15Right, 0.3, {left: "0px", ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn15").on("click", function() {
                TweenLite.to(btn15Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn15Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
        }
    }

    function btn16() {

        var btn16Left = $("#btn16 .left"),
            btn16Right = $("#btn16 .right");

        if (windowWidth > 767) {
            $("#btn16").on("mouseenter", function() {
                TweenLite.to(btn16Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn16Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
            $("#btn16").on("mouseleave", function() {
                TweenLite.to(btn16Left, 0.3, {left: "-100%", ease: Power3.easeOut});
                TweenLite.to(btn16Right, 0.3, {left: "0px", ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn16").on("click", function() {
                TweenLite.to(btn16Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn16Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
        }
    }

    function btn17() {

        var btn17Left = $("#btn17 .left"),
            btn17Right = $("#btn17 .right");

        if (windowWidth > 767) {
            $("#btn17").on("mouseenter", function() {
                TweenLite.to(btn17Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn17Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
            $("#btn17").on("mouseleave", function() {
                TweenLite.to(btn17Left, 0.3, {left: "-100%", ease: Power3.easeOut});
                TweenLite.to(btn17Right, 0.3, {left: "0px", ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn17").on("click", function() {
                TweenLite.to(btn17Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn17Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
        }
    }

    function btn18() {

        var btn18Left = $("#btn18 .left"),
            btn18Right = $("#btn18 .right");

        if (windowWidth > 767) {
            $("#btn18").on("mouseenter", function() {
                TweenLite.to(btn18Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn18Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
            $("#btn18").on("mouseleave", function() {
                TweenLite.to(btn18Left, 0.3, {left: "-100%", ease: Power3.easeOut});
                TweenLite.to(btn18Right, 0.3, {left: "0px", ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn18").on("click", function() {
                TweenLite.to(btn18Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn18Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
        }
    }

    // vars for btn19 functions
    var btn19Left = $("#btn19 .left"),
        btn19Right = $("#btn19 .right"),
        iconFirstBtn19 = $("#btn19 .icon-first"),
        iconSecondBtn19 = $("#btn19 .icon-last");

    function btn19() {

        if (windowWidth > 767) {
            $("#btn19").on("mouseenter", function() {
                TweenLite.to(btn19Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn19Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
            $("#btn19").on("mouseleave", function() {
                TweenLite.to(btn19Left, 0.3, {left: "-100%", ease: Power3.easeOut});
                TweenLite.to(btn19Right, 0.3, {left: "0px", ease: Power3.easeOut});
            });
        }

        if (windowWidth < 768) {
            $("#btn19").on("click", function() {
                TweenLite.to(btn19Left, 0.3, {left: "0px", ease: Power3.easeOut});
                TweenLite.to(btn19Right, 0.3, {left: "110px", ease: Power3.easeOut});
            });
        }
    }

    function btn19Click() {

        TweenLite.to(btn19Left, 0.3, {left: "0px", ease: Power3.easeOut});
        TweenLite.to(btn19Right, 0.3, {left: "110px", ease: Power3.easeOut});
        TweenLite.to(iconFirstBtn19, 0.3, {scale: 5, opacity: 0, ease: Power3.easeOut});

        $("#btn19").on("mouseenter", function() {
            TweenLite.to(btn19Left, 0.3, {left: "0px", ease: Power3.easeOut});
            TweenLite.to(btn19Right, 0.3, {left: "110px", ease: Power3.easeOut});
        });
        $("#btn19").on("mouseleave", function() {
            TweenLite.to(btn19Left, 0.3, {left: "0", ease: Power3.easeOut});
            TweenLite.to(btn19Right, 0.3, {left: "110px", ease: Power3.easeOut});
        });
    }

    // call all custom functions
    function init() {

        //$("#btn1").on("click", btn1);
        btn2();
        $(window).resize(function() {
            btn2();
        });
        //$("#btn3").on("click", btn3);
        //$("#btn4").on("click", btn4);
        btn5();
        $(window).resize(function() {
            btn5();
        });
        //$("#btn6").on("click", btn6);
        $("#btn7").on("click", btn7);
        $("#btn8").on("click", btn8);
        btn10Pulse();
        $("#btn10").on("click", btn10Click);
        $("#btn11").on("click", btn11);
        $("#btn12").on("click", btn12);
        $("#btn13").on("click", btn13);
        $("#btn14").on("click", btn14);
        btn15();
        $(window).resize(function() {
            btn15();
        });
        btn16();
        $(window).resize(function() {
            btn16();
        });
        btn17();
        $(window).resize(function() {
            btn17();
        });
        btn18();
        $(window).resize(function() {
            btn18();
        });
        $("#btn19").on("click", function() {
            iconSecondBtn19.toggleClass("liked");
        });
        if ($("#btn19").hasClass("liked")) {
            // do nothing
        } else {
            btn19();
            $(window).resize(function() {
                btn19();
            });
            $("#btn19").on("click", btn19Click);
        }

        // negate default btn functionality
        $(".demo-btn").on("click", function(e) {
            e.preventDefault();
        });

        console.log("HOORAY INIT!");
    }

    init();

    console.log("app.js works!");
});

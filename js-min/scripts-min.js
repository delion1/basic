jQuery.noConflict();

jQuery(function(t) {
    t(window).scroll(function() {
        var e = window.pageYOffset, n = parseInt(jQuery(window).width()) >= 980;
        if (e >= 50 && n) {
            t(".header-wrapper").addClass("small");
            t("#block-menu-menu-menu-1, #block-menu-menu-menu-2").addClass("small");
        } else {
            t(".header-wrapper").removeClass("small");
            t("#block-menu-menu-menu-1, #block-menu-menu-menu-2").removeClass("small");
        }
    });
    t("a.toscroll").on("click", function(e) {
        var n = e.target.href;
        var a = n.substring(n.indexOf("#") + 1);
        t("html, body").animate({
            scrollTop: t("#" + a).offset().top
        }, 500);
        return false;
    });
    t(".mobile-nav").on("click", function() {
        t("#mainNav").toggleClass("active");
        console.log("clicked");
    });
    jQuery("#mainNav").on("click", function() {
        jQuery(this).removeClass("active");
    });
    if (t(".card.two").length > 0) {}
});

menu();

sidebar();

"use strict";

function intro() {
    var e = document.getElementById("intro");
}

function menu() {
    var a = document.getElementById("mainNav");
    var e = [ "What I Do", "The Platform", "Contact Me" ];
    e.forEach(function(e) {
        var n = document.createElement("li");
        n.innerHTML = "<a href='#''>" + e + "</a>";
        a.appendChild(n);
    });
}

function sidebar() {
    var e = document.getElementById("sidebar");
    var a = document.createElement("ul");
    a.setAttribute("class", "side-menu");
    var n = [ "About", "Resume", "Education" ];
    var t = [];
    n.forEach(function(e) {
        var n = document.createElement("li");
        n.setAttribute("class", "item");
        n.innerHTML = "<a href='#" + e + "'>" + e + "</a>";
        a.appendChild(n);
    });
    e.appendChild(a);
}
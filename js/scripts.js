jQuery.noConflict();
jQuery(function($) {
	console.log('being read');


	$(window).scroll(function() {
        //var scroll = $(window).scrollTop();
            var scroll = window.pageYOffset,
            width = parseInt(jQuery(window).width()) >= 980;

        if ((scroll >= 50) && (width)) {
            $(".header-wrapper").addClass("small");
            $("#block-menu-menu-menu-1, #block-menu-menu-menu-2").addClass("small");
        } else {
            $(".header-wrapper").removeClass("small");
            $("#block-menu-menu-menu-1, #block-menu-menu-menu-2").removeClass("small");
        }
    });

		$('a[href*=#]:not([href=#])').click(function() {
			 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				 var target = $(this.hash);
				 target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				 if (target.length) {
					 $('html,body').animate({
						 scrollTop: target.offset().top
					 }, 1000);
					 return false;
				 }
			 }
		 });


});

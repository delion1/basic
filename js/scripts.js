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

		$("a.toscroll").on('click',function(e) {
		    var url = e.target.href;
		    var hash = url.substring(url.indexOf("#")+1);
		    $('html, body').animate({
		        scrollTop: $('#'+hash).offset().top
		    }, 500);
		    return false;
		});

                
                $('.mobile-nav').on('click', function(){
                   $('#mainNav').toggleClass('active'); 
                });
		//if (parseInt(jQuery(window).width()) >= 1024) {
		  //moving background block
		//$('.main').parallax(['20%'], -0.2);

	  //}


});

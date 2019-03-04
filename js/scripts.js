jQuery.noConflict();
jQuery(function($) {

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
       console.log('clicked');
    });
    jQuery('#mainNav').on('click', function(){
        //console.log('clicked');
        jQuery(this).removeClass('active');
    });

    if($('.card.two').length > 0){
        //newsFeed();
    }

});

menu();

/*function newsFeed(){

    var url = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=a9e3fc2ec88c4d0488941ebf7750e740';

    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(data => {
            if (data.status == 'ok'){
                var articles = data.articles;
                articles.forEach(function (dataNews){
                    var title = dataNews.title;
                    var url = dataNews.url;
                    var imgURL = dataNews.urlToImage;
                    var img = document.createElement('img');
                    img.setAttribute('src', imgURL);
                    img.setAttribute('width', '100%');
                    var desc = dataNews.description;

                    if(desc.length > 120 ){
                      desc = desc.substring(0, 120)+"...";
                    }

                    desc = document.createTextNode(desc);
                    var article = document.createElement('div'),
                    col3 = document.createElement('div'),
                    col9 = document.createElement('div'),
                    col = document.createElement('div');
                    link = document.createElement('a');
                    article.classList.add('article');
                    col3.classList.add('col-3');
                    col9.classList.add('col-9');
                    link.setAttribute('href', url);
                    link.innerHTML = title;
                    col3.appendChild(img);
                    col9.appendChild(link);
                    col.appendChild(desc);
                    article.appendChild(col3);
                    article.appendChild(col9);
                    article.appendChild(col); 

                    var container = document.getElementsByClassName('news')[0];
                    container.appendChild(article);
                    //jQuery('.card.two .col3:first-child').append(article);
                });
            }
        })
        .catch(error => console.log('error is', error));
}*/

function intro(){
  var container = document.getElementById('intro');

}
function menu(){
  var menuNav = document.getElementById('mainNav');
  var menu = ['What I Do', 'The Platform', 'Contact Me'];

  menu.forEach(function (items){
    var li = document.createElement('li');
    li.innerHTML = "<a href='#''>"+items+"</a>";
    menuNav.appendChild(li);
  });
}


/*-------------------------------------------
	Browser Detection
-------------------------------------------*/

// For when you get desparate.

// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


/*-------------------------------------------
	General Functions
-------------------------------------------*/


(function($){


	/* On Page Ready */

	$(document).ready(function (){


		/*-------------------------------------------
			Title
		-------------------------------------------*/

		// Notes...


		/*-------------------------------------------
			Nav Toggle
		-------------------------------------------*/

		// Notes...


		$('#nav').find('.toggle').click(function() {

			$('body').toggleClass('nav-open');

		});


		/*-------------------------------------------
			Open External URLs in New Window
		-------------------------------------------*/

		// Notes...


		$('a').each(function() {

			var a = new RegExp('/' + window.location.host + '/');

			if(!a.test(this.href)) {

				$(this).click(function(event) {

					event.preventDefault();
					event.stopPropagation();
					window.open(this.href, '_blank');

				});

			}

		});


		/*-------------------------------------------
			Sample Smooth Scroll Structure
		-------------------------------------------*/

		// Notes...


		// $('.answers .top a').smoothScroll({

			// offset: -20

		// });


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/


		// Add class of "dev" to <body>


		$("body").addClass("dev");


		// Displays screen size on the fly.


		var windowWidth = $(window).width();

		var windowHeight = $(window).height();

		$("#footer").after('<div id="dev"></div>');

		$("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


	/* On Page Load */


	$(window).load(function() {


		/*-------------------------------------------
			Title
		-------------------------------------------*/

		// Notes...


		/*-------------------------------------------
			Hero Slider
		-------------------------------------------*/

		// Notes...


		$(".flexslider").flexslider({

			animation: "fade",
			slideshowSpeed: 9000,
			useCSS: false,
			controlNav: true,
			directionNav: false,
			start: function(slider){

				$("body").removeClass("loading");

			}

		});


	});


	/* On Window Resize */


	$(window).resize(function() {


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/


		// Displays screen size on the fly.


		var windowWidth = $(window).width();

		var windowHeight = $(window).height();

		$("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


})(window.jQuery);

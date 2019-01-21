(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$main = $('#main'),
			$header = $('#header.alt');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			(function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 350);
			});
		// Header animate
		setTimeout(function() {
			$header.addClass('header-show');
			}, 100);

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Nav.
			var $nav = $('#nav');

			if ($nav.length > 0) {

				// Shrink effect.
					$main
						.scrollex({
							mode: 'top',
							enter: function() {
								$nav.addClass('alt');
							},
							leave: function() {
								$nav.removeClass('alt');
							},
						});

				// Links.
					var $nav_a = $nav.find('a');

					$nav_a
						.scrolly({
							speed: 1000,
							offset: function() { return $nav.height(); }
						})
						.on('click', function() {

							var $this = $(this);

							// External link? Bail.
								if ($this.attr('href').charAt(0) != '#')
									return;

							// Deactivate all links.
								$nav_a
									.removeClass('active')
									.removeClass('active-locked');

							// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
								$this
									.addClass('active')
									.addClass('active-locked');

						})
						.each(function() {

							var	$this = $(this),
								id = $this.attr('href'),
								$section = $(id);

							// No section for this link? Bail.
								if ($section.length < 1)
									return;

							// Scrollex.
								$section.scrollex({
									mode: 'middle',
									initialize: function() {

										// Deactivate section.
											if (skel.canUse('transition'))
												$section.addClass('inactive');

									},
									enter: function() {

										// Activate section.
											$section.removeClass('inactive');

										// No locked links? Deactivate all links and activate this section's one.
											if ($nav_a.filter('.active-locked').length == 0) {

												$nav_a.removeClass('active');
												$this.addClass('active');

											}

										// Otherwise, if this section's link is the one that's locked, unlock it.
											else if ($this.hasClass('active-locked'))
												$this.removeClass('active-locked');

									}
								});

						});

			}

		// Scrolly.
			$('.scrolly').scrolly({
				speed: 100
			});
	});

    $('.event_shanghai').click(function() {
    	$('#modal_tour').css('display', 'block');
    });

})(jQuery);


function initialize() {

	$('.popup-img').magnificPopup({
		type:'image'
	});

    var modals = $('.modal');
    var spans = $('span.close');
    for (var i = 0; i < spans.length; i++) {
    	$(spans[i]).on('click', function() {
    		for(var j = 0; j < modals.length; j++) {
    			$(modals[j]).css('display', 'none');
    		}
    	});
    }

	var myModal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var modalEvent = document.getElementById("modal_tour");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    myModal.style.display = "block";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == myModal) {
	        myModal.style.display = "none";
	    } else if (event.target == modalEvent) {
	    	modalEvent.style.display = "none";
	    }
	}
}
window.onload = initialize;

/*
     FILE ARCHIVED ON 23:35:39 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:47:21 Jan 21, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 177.308 (3)
  esindex: 0.006
  captures_list: 197.751
  CDXLines.iter: 9.464 (3)
  PetaboxLoader3.datanode: 174.273 (5)
  exclusion.robots: 0.14
  exclusion.robots.policy: 0.132
  RedisCDXSource: 8.891
  PetaboxLoader3.resolve: 553.322 (3)
  load_resource: 633.735
*/
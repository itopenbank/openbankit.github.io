jQuery(document).ready(function() {
  function close_accordion_section() {
    jQuery('.accordion .accordion-section-title').removeClass('active');
    jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  jQuery('.accordion-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = jQuery(this).attr('href');

    if(jQuery(e.target).is('.active')) {
      close_accordion_section();
    }else {
      close_accordion_section();

      // Add active class to section title
      jQuery(this).addClass('active');
      // Open up the hidden content panel
      jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
    }

    e.preventDefault();
  });
});
/*
     FILE ARCHIVED ON 22:27:21 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:55:06 Jan 21, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 67.781 (3)
  esindex: 0.008
  captures_list: 81.9
  CDXLines.iter: 10.781 (3)
  PetaboxLoader3.datanode: 131.005 (5)
  exclusion.robots: 0.184
  exclusion.robots.policy: 0.17
  RedisCDXSource: 0.88
  PetaboxLoader3.resolve: 98.523 (2)
  load_resource: 231.328
*/
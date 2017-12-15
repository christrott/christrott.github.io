/**
 * @Author: chris
 * @Date:   2017-06-21T10:26:47+10:00
 * @Email:  chris@southbanksoftware.com
 * @Last modified by:   chris
 * @Last modified time: 2017-08-21T17:47:50+10:00
 */

 $(window).scroll(function() {
   if ($(document).scrollTop() > 50) {
     $('.main-nav').addClass('shrink');
     $('.back-to-top').removeClass('hidden');
   } else {
     $('nav').removeClass('shrink');
     $('.back-to-top').addClass('hidden');
   }
 });

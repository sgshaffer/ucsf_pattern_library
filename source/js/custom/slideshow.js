$(document).ready(function(){
  $('.slider').slick({
    // Settings
  });

  var $slickElement = $('.slider-hero');

  // On Hero 1 append pager to the main slider
  $('.hero-1').append("<div class='paging-info'></div>");

  // On Hero 2 append pager to the inner text wrapper
  $('.hero-2__text-wrapper').append("<div class='paging-info'></div>");

  var $status = $('.paging-info');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    var total = $('.hero:not(.slick-cloned)').length;
    $status.text(i + ' of ' + total);
  });

  $slickElement.slick({
    slide: '.hero',
    variableWidth: false,
    slidesToShow: 1,
    infinite: true,
    centerMode: false,
    arrows: true,
    dots: false,
    autoplay: false
  });


});

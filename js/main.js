$(document).ready(function(){ resizeDiv(); });
window.onresize = function(event) { resizeDiv(); };

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();

  // Code
  $('pre').css({'max-height': vph + 'px'});

  // Demos
  $('.demo').css({'width': vpw - 20 + 'px'});
  $('.demo').css({'height': vph - 20 + 'px'});
  $('.demo pre').css({'height': vph - 20 + 'px'});
  $('.demo iframe').css({'height': vph - 20 + 'px'});

}
$(document).ready(function(){ resizeDiv(); });
window.onresize = function(event) { resizeDiv(); };

function resizeDiv() {
  vpw = $(window).width();
  vph = $(window).height();

  $('.demo').css({'width': vpw + 'px'});
  $('.demo').css({'height': vph + 'px'});
  $('.demo pre').css({'height': vph + 'px'});
  $('.demo iframe').css({'height': vph + 'px'});

}
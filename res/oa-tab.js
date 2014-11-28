/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */
$(function () {

  var $firstRank = $('.ranks .ranks_container .rank').eq (0);
  var rankWidth = parseFloat ($firstRank.css ('width'));
  var rankMarginLeft = parseFloat ($firstRank.css ('margin-left'));
  var rankMarginRight = parseFloat ($firstRank.css ('margin-right'));
  $('.items .items_container .item').on ('mouseenter click',function () {
    var n = $(this).parent ().children ().removeClass ('active').index ($(this).addClass ('active'));
    var $r = $('.ranks .ranks_container .rank').eq (n);
    var nh = parseFloat ($r.css ('height')) + parseFloat ($r.css ('margin-top')) + parseFloat ($r.css ('margin-bottom'));
    $('.ranks .ranks_container').css ({'height': nh + 'px'});

    $('.ranks .ranks_container .rank').map (function (i) {
      $(this).css ({'left': (i - n) * (rankWidth + rankMarginLeft + rankMarginRight) + 'px'});
    })
  }).filter ('.active').click ();
});
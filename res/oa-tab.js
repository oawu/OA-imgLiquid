/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */

(function( factory ) {
  if ((typeof define === 'function') && define.amd) define (['jquery'], factory);
  else factory (jQuery);
}(function ($) {

  $.fn.extend ({
    OAtab: function (opt) {
      var d4Opt = {
        titleSelector: '.title',
        panelSelector: '.panel',
        defaultActive: 0,
      },
      init = function (opt) {
        var $title = $(this).children (opt.titleSelector).addClass ('oa-tab-title').clone (true, true),
            $panel = $(this).children (opt.panelSelector).addClass ('oa-tab-panel').clone (true, true);

        $(this).addClass ('oa-tab').empty ();

        $('<div />').addClass ('oa-tab-titles').append ($('<div />').addClass ('oa-tab-titles-container').addClass ('clearfix').append ($title)).appendTo ($(this));

        $('<div />').addClass ('oa-tab-shadow-line').appendTo ($(this));

        $('<div />').addClass ('oa-tab-panels').append ($('<div />').addClass ('oa-tab-panels-container').addClass ('clearfix').append ($panel)).appendTo ($(this));

        $title.on ('mouseenter click', function () {
            var n = $(this).parent ().children ().removeClass ('active').index ($(this).addClass ('active')),
            $rn = $panel.eq (n);
            $panel.parent ().css ({'height': parseFloat ($rn.css ('height')) + parseFloat ($rn.css ('margin-top')) + parseFloat ($rn.css ('margin-bottom')) + 'px'});

            $panel.map (function (i) {
              $(this).css ({'left': (i - n) * (parseFloat ($rn.css ('width')) + parseFloat ($rn.css ('margin-left')) + parseFloat ($rn.css ('margin-right'))) + 'px'});
            })
          }).eq (opt.defaultActive).click ()
      }

      opt = $.extend({}, d4Opt, opt);

      return $(this).each (function () { init.bind ($(this), opt).apply (); });
    }
  });
}));
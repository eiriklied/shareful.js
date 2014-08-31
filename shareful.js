(function($) {
  var state = 'closed';

  var Shareful = {
    defaults: {
      text: null,
      html: null,
      heading: null,
      template: [
      '<div class="sf-box">',
      '  <div class="sf-header sf-row">',
      '    <span class="sf-close">&times;</span>',
      '    <div class="sf-heading-text"></div>',
      '  </div>',
      '  <div class="sf-body sf-row">',
      '    <div class="sf-text">',
      '      <div id="sf-text" />',
      '    </div>',
      '  </div>',
      '</div>'].join('')
    },

    destroy: function(elements) {
      $(document).off('.shareful');

      $.each(elements, function(i, $e){
        $e.remove();
      });
    },

    share: function(params) {
      var opts = fromParams(params, this.defaults);
      var self = this;

      var $overlay = $('<div class="sf-overlay"/>').appendTo('body');
      var $box     = $(opts.template).appendTo('body').addClass('sf-focused');
      var $heading = $box.find('.sf-heading-text');
      var $textElement = $box.find('#sf-text');
      var $close   = $box.find('.sf-close');

      // set heading text
      opts.heading ? $heading.text(opts.heading) : $heading.hide();

      // set textbox text
      if(opts.text) {
        $textElement.text(opts.text);
      } else if (opts.html) {
        $textElement.html(opts.html);
      }

      selectText($textElement);

      // disable box when pressing close and overlay
      $overlay.on(   'click.shareful', function() { self.destroy([$box, $overlay]); });
      $close.on(     'click.shareful', function() { self.destroy([$box, $overlay]); });
      // or when pressing esc button
      $(document).on('keyup.shareful', function(e){
        if(e.keyCode == 27) { self.destroy([$box, $overlay]); }
      });
      // add zeroclipboard or similar
    }
  };

  window.Shareful = Shareful;


  function fromParams(params, defaults) {
    var opts = $.extend({}, defaults);
    if (typeof params === 'string') {
      opts.text = params;
    }
    else {
      opts = $.extend(opts, params);
    }
    return opts;
  }

  function selectText($element) {
    var doc = document
        , text = $element[0]
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
  }
})(jQuery);

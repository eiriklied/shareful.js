(function($) {
  var state = 'closed';

  var Shareful = {
    defaults: {
      text: null,
      label: null,
      template: [
      '<div class="sf-box">',
      '  <div class="sf-header sf-row"><span class="sf-close">&times;</span></div>',
      '  <div class="sf-body sf-row">',
      '    <div class="sf-label">',
      '      <label for="sf-text" id="sf-label"></label>',
      '    </div>',
      '    <div class="sf-text">',
      '      <textarea id="sf-text" type="text"></textarea>',
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
      var $label   = $box.find('#sf-label');
      var $textbox = $box.find('#sf-text');
      var $close   = $box.find('.sf-close');

      // set label text
      opts.label ? $label.text(opts.label) : $label.hide();
      // set textbox text
      $textbox.val(opts.text);
      // set focus on textbox text
      $textbox.select();
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
})(jQuery);
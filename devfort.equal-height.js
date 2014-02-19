// Naive jQuery Equal Height Children plugin
// Original by Art Discovery Ltd (https://github.com/artfinder/jquery-equal-height)

(function($) {
    // This is pretty grubby
    $.fn.set_minish_height = function(height) {
        return this.each( function() {
            var $this = $(this);
            if ($this.css('display') == 'table') {
                $this.css('height', height);
            } else {
                $this.css('min-height', height);
            }
        });
    }

    $.fn.make_children_equal_height = function () {
        var make_equal_height = function (element) {
            var $within     = $(element),
                selector    = $within.attr('data-equal-height'),
                $children   = $(selector, $within),
                tallest     = 0;
            
            $children.each( function() {
                var $this = $(this);

                $this.set_minish_height('');
                var h = $this.height();
                if ( h > tallest ) {
                    tallest = h;
                }
            });
            
            $children.each( function() {
                $(this).set_minish_height(tallest + 'px');
            });
        };
        
        return this.each( function () {
            make_equal_height(this);
        });
    };

    $.fn.make_children_disequal_height = function () {
        var make_disequal_height = function (element) {
            var $within     = $(element),
                selector    = $within.attr('data-equal-height'),
                $children   = $(selector, $within);

            $children.each( function() {
                $(this).set_minish_height('');
            });
        };
        return this.each( function () {
                make_disequal_height(this);
        });
    };
    
})( jQuery );

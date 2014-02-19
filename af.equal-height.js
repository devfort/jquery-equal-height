// Naive jQuery Equal Height Children plugin
// Original by Art Discovery Ltd (https://github.com/artfinder/jquery-equal-height)

(function($) {
    
    $.fn.make_children_equal_height = function () {
        var make_equal_height = function (element) {
            var $within     = $(element),
                selector    = $within.attr('data-equal-height'),
                $children   = $(selector, $within),
                tallest     = 0;
            
            $children.each( function() {
                var $this = $(this);
                
                $this.css('min-height', ''); 
                var h = $this.height();
                if ( h > tallest ) {
                    tallest = h;
                }
            });
            
            $children.each( function() {
                $(this).css('min-height', tallest + 'px'); 
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
                $(this).css('min-height', '');
            });
        };
        return this.each( function () {
                make_disequal_height(this);
        });
    };
    
})( jQuery );

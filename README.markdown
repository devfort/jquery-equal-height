Equal Height Children
=====================

A jQuery plugin to make elements equal height. There are many plugins out there
that do this, this one is ours.

Using the plugin
----------------

1.  Set the property `data-equal-height` on any element that is a parent
    of those you want to be equal, with a value that is the CSS selector
    of the elements that should be equal height
    
        <ul data-equal-height='li'>
          <li>Short<li>
          <li>Short<li>
          <li>Long, long, really long…<li>
        </ul>

1.  Include and invoke the plugin

        <script src='devfort.equal-height.js'></script>
        <script>
          $('[data-equal-height]').make_children_equal_height();
        </script>

1.  Revoke the plugin

        <script>
          $('[data-equal-height]').make_children_disequal_height();
        </script>

1.  Optionally call the function again if the heights are likely to have
    changed (eg. if the browser is resized, the font is resized, etc.)
    
        $('body').on(
            'resize',
            $('[data-equal-height]').make_children_equal_height()
        );

Notes
-----

 * Figures out height using `.height()`, ie all the elements matched by the
   selector should have the same margin and padding or things won't line up

 * For `display: table`, sets `height` not `min-height`; this is possibly
   fragile, but at least allows you to get stuff done without adding shim
   elements

Credits
-------

Initial version written by Mark Norman Francis at Art Discovery Ltd; subsequent
work by James Aylett at NSFWCORP and then re-adopted by James and Norm at /dev/fort.

<div id="scripts">
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="/js/vendor/jquery-1.8.0.min.js"><\/script>')</script>
  <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
  <script>window.jQuery || document.write('<script src="/js/libs/jquery-ui-1.8.23.min.custom.js"><\/script>')</script>
  <script src="/js/plugins.js"></script>
  <script src="/js/main.js"></script>

  <?php
  if (isset($calcJS)) {
    echo '  <script src="/js/calculator.js"></script>';
    echo '  <script src="/js/calcjs/' . $calcJS . '.js"></script>';
  }
  ?>

  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-34477056-1']);
    _gaq.push(['_trackPageview']);

    (function () {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
  </script>

</div>

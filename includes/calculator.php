<?php $calcJS = $pageData["PageID"]; ?>
<article id="calculator" class="transparent">

  <div class="calculator-no-js" id="no-js-warning">
    <h4>Sorry bro.</h4>

    <p>Javascript is either disabled or not supported by your browser. Re-enable JavaScript for this site or update to a
      modern browser to use this glorious AP score calculator.</p>
  </div>
  <script class="calculator-no-js">document.getElementById("no-js-warning").style.display = "none";</script>

  <header>
    <h4><?php echo $pageData["PageName"] ?> Score Calculator</h4>
  </header>

  <section id="calculator-input">
    <form>
      <fieldset id="sliderset">
        <legend>Enter your scores below</legend>
        <ul>
        </ul>
      </fieldset>
      <fieldset id="curveset">
        <legend>Choose an AP scaled score curve</legend>
      </fieldset>
      <section id="scoremeter">
      </section>
    </form>
  </section>

  <?php include "$root/includes/calculator-output.php"; ?>

  <footer class="clearfix">
    <?php
    if (!is_null($pageData["Note"])) {
      echo '<p id="note">' . $pageData["Note"] . '</p>';
    }
    ?>

  </footer>

</article>
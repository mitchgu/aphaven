<style type="text/css">
  * {
    visibility: hidden !important;
    position: fixed !important;
    left: -11111px !important;
    top: -11111px !important;
    width: 0 !important;
    height: 0 !important;
    opacity: 1 !important;
    }

  .overlay {
    width: 600px !important;
    position: fixed !important;
    left: 100px !important;
    top: 100px !important;
    z-index: 1 !important;
    border: 2px solid #AAA !important;
    padding: 20px !important;
    -webkit-border-radius: 20px !important;
    -moz-border-radius: 20px !important;
    border-radius: 20px !important;
    }

  .overlay, .overlay * {
    visibility: visible !important;
    display: block !important;
    height: auto !important;
    }

  .overlay * {
    position: relative !important;
    width: 100% !important;
    left: 0 !important;
    top: 0 !important;
    }

  h4 {
    color: #EE4455 !important;
    }

  #error-message {
    font-size: 12px;
    }
</style>>
<article class="overlay">
  <header>
    <h4>There was an error loading your page</h4>
  </header>
  <p>An internal error occurred and we are currently unable to load your page.</p>
  <code id="error-message"><?php if (!is_null($errorMessage)) {
    echo "Error Message: " . $errorMessage;
  } else {
    echo "No error message available";
  } ?></code>
</article>

<?php die(); ?>
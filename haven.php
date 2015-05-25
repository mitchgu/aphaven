<?php
$root = realpath($_SERVER["DOCUMENT_ROOT"]); // Save the root path for relative addresses
include "$root/includes/mysql.php"; // Sets up MySQL connection with PDO

// retrieve pagename from get parameter
try {
  if (empty($_GET["p"]) || getDB("SELECT * FROM pages WHERE PageID='" . $_GET["p"] . "'")->rowcount() == 0) { // If there isn't a p get parameter or it doesn't match the database, trigger 404 error
    header('HTTP/1.0 404 Not Found');
    include "$root/404.html";
    die();
  }
  $pageID = $_GET["p"];
} catch (Exception $e) {
  include "/includes/phperr.php";
  trigger_error('Regular error: ' . $e, E_USER_ERROR); // This time it's an ordinary php error
  die();
}

$pageData = getDB("SELECT * FROM pages WHERE PageID='" . $pageID . "';")->fetch();

$headInfo = '<link rel="stylesheet" href="/css/calculator-style.css">';
include "$root/includes/head.php";
?>

<div role="main" id="main" class="clearfix">

  <?php include "$root/includes/header.php" ?>

  <div id="main-content" class="clearfix">

    <?php include "$root/includes/calculator.php" ?>

  </div>

  <?php include "$root/includes/footer.php"; ?>

</div>

<?php include "$root/includes/scripts.php" ?>

</body>
</html>

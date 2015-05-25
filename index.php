<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
$root = realpath($_SERVER["DOCUMENT_ROOT"]); // Save the root path for relative addresses
$pageID = "home";
include "$root/includes/mysql.php"; // Sets up MySQL connection with PDO
$pageData = getDB("SELECT * FROM pages WHERE PageID='" . $pageID . "';")->fetch();
$headInfo = '<link rel="stylesheet" href="/css/index-style.css">';
include "$root/includes/head.php";
?>

<div role="main" id="main" class="clearfix">

  <?php include "$root/includes/header.php" ?>

  <div id="main-content">
    <article>

      <section>
        <img src="/img/squarelogo.gif" alt="AP Haven Logo" id="squarelogo">

        <h3>What is AP Haven?</h3>

        <p>AP Haven is the most accurate, up to date source of AP exam score calculators. AP Haven makes it easy for AP
          students to predict their AP scores from 1-5 given how they think they will do on each section, based on
          curves from past years.</p>
      </section>

      <section>
        <h3>Why should you use an AP score calculator?</h3>

        <p>An AP score calculator is the best way to find out how an AP exam is scored, what score is realistic for you,
          and the things you should focus on to earn that score. Often times students are surprised by how easy it is to
          pass an AP exam, or delighted to find out that a score of 4 or 5 is easily within their reach. Whether you are
          a prospective student deciding on whether or not to sign up for an AP class, or a nervous student figuring out
          what to expect when May comes around, AP score calculators are definitely a useful resource. </p>
      </section>

      <nav class="clearfix" id="index-nav">
        <ul class="nav-column-list">
          <li>
            <ul class="nav-column"><?php getCategory("Science"); ?>

            </ul>
          </li>
          <li>
            <ul class="nav-column"><?php getCategory("Math"); ?>
              <?php getCategory("History"); ?>

            </ul>
          </li>
          <li>
            <ul class="nav-column"><?php getCategory("Social Studies"); ?>

            </ul>
          </li>
          <li>
            <ul class="nav-column"><?php getCategory("Language"); ?>
              <?php getCategory("Other"); ?>

            </ul>
          </li>
        </ul>
      </nav>
    </article>
  </div>

  <?php include "$root/includes/footer.php"; ?>

</div>

<?php include "$root/includes/scripts.php"; ?>

</body>
</html>

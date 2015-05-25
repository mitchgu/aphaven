<?php
function getCategory($category)
{
  echo '
            <li class="nav-header">' . $category . '</li>';
  $havenlist = getDB("SELECT * FROM pages WHERE SUBSTRING(PageID,1,3)='ap-' AND Category='" . $category . "' ORDER BY PageName");
  while ($row = $havenlist->fetch()) {
    echo '
            <li><a href="/haven/' . $row["PageID"] . '/calculator">' . $row["PageName"] . '</a></li>';
  }
}

?>
<header id="main-header">

  <div id="site-heading" class="clearfix">
    <a href="/"><h1 class="ir">AP Haven</h1></a>

    <p id="hovertext">Hover Here for AP Score Calculators</p>
  </div>


  <div id="slidedown">
    <nav class="clearfix">
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
  </div>

</header>
 
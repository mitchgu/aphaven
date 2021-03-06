<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php
    if (is_null($pageData["Title"])) {
      echo $pageData["PageName"] . " Score Calculator | AP Haven";
    } else {
      echo $pageData["Title"];
    }
    ?></title>
  <meta name="description" content="<?php
  if (is_null($pageData["Description"])) {
    echo "AP Haven is the ultimate source for calculating your " . $pageData["PageName"] . " exam score, learning about the exam, and finding helpful resources.";
  } else {
    echo $pageData["Description"];
  }
  ?>">
  <meta name="viewport" content="width=device-width">
  <meta name="google-site-verification" content="qq9N97ucYRvgjhZc0ry5jToclV6LPxt8coDCbUvFc4s"/>

  <link rel="stylesheet" href="/css/normalize.css">
  <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/themes/ui-lightness/jquery-ui.css"/>
  <link rel="stylesheet" href="/css/main.css">
  <script src="/js/vendor/modernizr-2.6.1.min.js"></script>
  <?php
  echo $headInfo;
  ?>
</head>
<body>
<!--[if lt IE 7]>
<p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser
  today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better
  experience this site.</p>
<![endif]-->
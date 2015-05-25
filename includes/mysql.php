<?php
include "$root/config.php";
try {
  $host = "localhost";
  # MySQL with PDO_MYSQL
  $db = new PDO('mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8', $user, $pass);
  $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
  $errorMessage = $e;
  trigger_error('PDO error: ' . $errorMessage, E_USER_ERROR);
  global $root;
  include "$root/includes/phperr.php"; // load php error page instead // log the error in the database
}

set_error_handler("errorHandler");
register_shutdown_function("shutdownHandler");

function errorHandler($error_level, $error_message, $error_file, $error_line, $error_context)
{
  switch ($error_level) {
    case E_ERROR:
    case E_CORE_ERROR:
    case E_COMPILE_ERROR:
    case E_PARSE:
      db_log("PARSE", $error_message, $error_file, $error_line);
      break;
    case E_USER_ERROR:
      db_log("USER ERROR", $error_message, $error_file, $error_line);
      break;
    case E_RECOVERABLE_ERROR:
      db_log("RECOVERABLE_ERROR", $error_message, $error_file, $error_line);
      break;
    case E_WARNING:
      db_log("WARNING", $error_message, $error_file, $error_line);
      break;
    case E_CORE_WARNING:
    case E_COMPILE_WARNING:
    case E_USER_WARNING:
      db_log("USER WARNING", $error_message, $error_file, $error_line);
      break;
    case E_NOTICE:
      db_log("USER NOTICE", $error_message, $error_file, $error_line);
      break;
    case E_USER_NOTICE:
      db_log("USER NOTICE", $error_message, $error_file, $error_line);
      break;
    case E_STRICT:
      db_log("E_STRICT", $error_message, $error_file, $error_line);
      break;
    default:
      db_log("WARNING", $error_message, $error_file, $error_line);
  }
}

function shutdownHandler()
{
  $error = error_get_last();
  switch ($error['type']) {
    case E_ERROR:
      db_log("SHUTDOWN - ERROR", $error['message'], $error['file'], $error['line']);
      break;
    case E_CORE_ERROR:
      db_log("SHUTDOWN - CORE ERROR", $error['message'], $error['file'], $error['line']);
      break;
    case E_COMPILE_ERROR:
      db_log("SHUTDOWN - COMPILE ERROR", $error['message'], $error['file'], $error['line']);
      break;
    case E_USER_ERROR:
      db_log("SHUTDOWN - USER_ERROR", $error['message'], $error['file'], $error['line']);
      break;
    case E_RECOVERABLE_ERROR:
    case E_CORE_WARNING:
      db_log("SHUTDOWN - CORE WARNING", $error['message'], $error['file'], $error['line']);
      break;
    case E_COMPILE_WARNING:
      db_log("SHUTDOWN - COMPILE_WARNING", $error['message'], $error['file'], $error['line']);
      break;
    case E_PARSE:
      db_log("SHUTDOWN - PARSE", $error['message'], $error['file'], $error['line']);
      break;
  }
  if ($error !== NULL) {
    $errorMessage = $error['message'] . " in file " . $error['file'] . " at line " . $error['line'];
    include "phperr.php"; // load php error page instead
    die();
  }
}

function db_log($error, $errlvl, $errfile, $errline)
{
  global $db;
  $query = "INSERT INTO errorlog (severity, message, filename, lineno, time) VALUES (?, ?, ?, ?, NOW())";
  $stmt = $db->prepare($query);
  $stmt->execute(array($error, $errlvl, $errfile, $errline));
}

function getDB($query)
{
  try {
    global $db;
    $stmt = $db->query($query);
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    return $stmt;
  } catch (PDOException $e) {
    global $root;
    $errorMessage = $e;
    trigger_error('PDO error: ' . $errorMessage, E_USER_ERROR);
    include "$root/includes/phperr.php"; // load php error page instead // log the error in the database
  }
  return null;
}

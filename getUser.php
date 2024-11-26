<?php
//echo (json_encode(['success' => true, 'message' => 'Username saved!']));
// Start the session
session_start();
echo(json_encode(['username' => $_SESSION["username"]]));
?>

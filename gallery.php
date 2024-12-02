<?php

 require ("connection.php");

//put into try catch clause
try {

    // 1: get 
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["action"])) {

       $resultObject = $collection->find([]);
        $outArr = [];
        foreach($resultObject as $item)
        {
           $outArr[]=$item;

        }
        echo(json_encode($outArr));
        exit();
    }

    

    
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>gallery</title>
  </head>
  <body>
    <div id="gallery"></div>

    <img id="imagegallery" src="images/gallery.jpg" alt="gallery" />

    <script src="js/voting.js"></script>
  </body>
</html>
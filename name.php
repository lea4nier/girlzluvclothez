<?php
session_start();
?>
<?php
require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();



try {
    // Get the raw POST data
   // $input = json_decode(file_get_contents('php://input'), true);

   if ($_SERVER["REQUEST_METHOD"] == 'POST'){

   
    // if (isset($input['username'])) {
        $username = $_POST['username'];

        // Connect to MongoDB
        $uri = $_ENV['MONGO_URI'];
        $client = new MongoDB\Client($uri);
        $collection = $client->CART351->usernames;


        // Insert the username into the collection
        $insertResult = $collection->insertOne(['username' => $username]);
        $_SESSION["username"] = $username;
        echo($_SESSION["username"]);

       // echo json_encode(['success' => true, 'message' => 'Username saved!', 'id' => $insertResult->getInsertedId()]);
    // } else {
        // echo json_encode(['success' => false, 'message' => 'No username provided']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}


?>

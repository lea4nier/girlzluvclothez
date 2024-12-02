<?php
// Include the composer library
require_once __DIR__ . '/vendor/autoload.php';

// Use environment variables
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

try {
    // Handle GET requests
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["action"])) {
        $uri = $_ENV['MONGO_URI'];
        $client = new MongoDB\Client($uri);
        $collection = $client->CART351->messages;

        // Fetch all messages
        $resultObject = $collection->find([]);
        $outArr = [];
        foreach ($resultObject as $item) {
            $outArr[] = $item;
        }
        echo(json_encode($outArr));
        exit();
    }

    // Handle POST requests
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $input = $_POST["textMessage"];
        $uri = $_ENV['MONGO_URI'];
        $client = new MongoDB\Client($uri);
        $collection = $client->CART351->messages;

        // Insert the new message into MongoDB
        $insertOneResult = $collection->insertOne(['message' => $input]);
        echo ("success");
        exit();
    }
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}

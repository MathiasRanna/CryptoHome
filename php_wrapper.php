<?php
require 'vendor/autoload.php';
use GuzzleHttp\Client;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

if (isset($_POST["url"])) {
    $url = $_POST['url'];
    $client = new GuzzleHttp\Client();
    try {
        $res = $client->request('GET', $url, [
            'headers' => ['X-CoinAPI-Key' => $_ENV['XCoinAPIKey']]
        ]);

        echo $res->getBody();
    } catch (\GuzzleHttp\Exception\GuzzleException $e) {
        echo json_encode($e);
    }
}








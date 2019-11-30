<?php

if (isset($_GET['id'])) {


	$headers = get_headers('http://www.caruso.in.ua/vehicle-list/');




  	$id = $_GET['id'];

  	$singleURL = "https://api.manheim.com/descriptions/capture/id/".$id;


	// $body = array(
	//     'pageSize' => $_REQUEST["pageSize"],
	//     'pageNumber' => $_REQUEST["pageNumber"]
	// );
	 
	// $args = array(
	//     'body' => $body,
	//     'headers' => array()
	// );

	$response = wp_remote_get( $singleURL );

	$api_response = wp_remote_retrieve_body( $response );

	echo $api_response;

	die();







} else {

  	echo "not result";

}


echo $id;
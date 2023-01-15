<?php

$product = $_GET["product"];
$donation = $_GET["donation"];
$total_value = $product + $donation;

echo "The value of you product is: <strong>$product$</strong>.<br />";
echo "The value of your donation is: <strong>$donation$</strong>.<br />";
echo "The total value of your order is: <strong>$total_value$</strong>.<br />";

?>


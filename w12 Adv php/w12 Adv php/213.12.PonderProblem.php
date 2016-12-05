<?php

echo "<h2>Purchase Review</h2><br/>";

if ($_POST && isset($_POST['firstName'], $_POST['lastName'], $_POST['address'], $_POST['state'],
                    $_POST['zipcode'], $_POST['phone']))
{
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $zipcode = $_POST['zipcode'];
    $phone = $_POST['phone'];

    echo "<div id=\"persoanlInfo\"> <strong>Name:</strong>$lastName, $firstName <br/>";
    echo "<strong>Address:</strong>$address<br/>";
    echo "$state, $zipcode<br/>";
    echo "<strong>Phone:</strong>$phone<br/>";

}



echo "<h2>Purchased Items</h2><br/>";
//var_dump($_COOKIE);

$total = 0;
$totalAmount = 0;

echo "<table><tr><th>Item</th><th>Quantity</th><th>Unit Price</th><th>Total<th></tr>";

$jsonIterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator(json_decode($_POST['items'], TRUE)),
    RecursiveIteratorIterator::SELF_FIRST);

foreach ($jsonIterator as $key => $val) {
    if(is_array($val))
    {
        echo "<tr><td>$key</td>";
    }
    else if ($key == 'qty')
    {
        $qty = $val;
        echo "<td>$qty</td>";
    }
    else if ($key == 'price')
    {
        $price = $val;
        echo "<td>$price</td>";
    }

    if (isset($qty) && isset($price))
    {
        $total = number_format($qty * $price,2);
        echo "<td>$total</td>";
        $totalAmount += $total;
        unset($qty, $price);
    }
}

echo "</table><br/><br/>";

//var_dump($_POST);

echo "<table><tr><th>SubTotal</th><td>$totalAmount</td></tr>";
echo "<tr><th>Tax</th><td>".number_format($totalAmount * 0.06,2)."</td></tr>";
echo "<tr><th>Total</th><td>".number_format($totalAmount * 1.06,2)."</td></tr></table><br/>";

if ($_POST && isset($_POST['creditCardType'], $_POST['creditCardNumber'],
                    $_POST['expirationDate']))
{

    $creditCardType = $_POST['creditCardType'];
    $creditCardNumber = $_POST['creditCardNumber'];
    $expirationDate = split('/', $_POST['expirationDate']);
    $expirationMonth = $expirationDate[0];
    $expirationYear = $expirationDate[1];
    $d = mktime(0,0,0,$expirationMonth,28,$expirationYear);
    echo "<strong>Payment Method: </strong>".$creditCardType.", " .date(" F Y", $d) ."<br/>";

}

echo "<form action=\"submitPurchase.php\" method=\"post\">";
echo "<input type=\"submit\" name=\"submitted\" value=\"Confirm Purchase\">";
echo "<input type=\"submit\" name=\"submitted\" value=\"Cancel Purchase\">";
echo "</form>";

?>
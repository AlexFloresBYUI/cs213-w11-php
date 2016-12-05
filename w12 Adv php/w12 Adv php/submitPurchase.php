<?php

if ($_POST['submitted'] == "Confirm Purchase")
{
echo "<h1>Purchase Completed!!</h1>";
}

if ($_POST['submitted'] == "Cancel Purchase")
{
    echo "<h1>Purchase Canceled!! You can return to our page to buy something</h1>";
}

?>

<?php

$input = $_POST['input6'];
$text = explode(",", $input);

echo "<h2>Unsorted values</h2>";
echo "<table id=listUnsorted>";
foreach($text as $key => $tableValue) {
    echo "<tr><td>".$tableValue."</td></tr>";
}
echo "</table>";


natcasesort($text);

echo "<br/><h2>Sorted values</h2>";
echo "<table id=listValues>";
foreach($text as $key => $tableValue) {
    echo "<tr><td>".$tableValue."</td></tr>";
}
echo "</table>";
?>

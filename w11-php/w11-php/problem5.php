<?php

$x = $_POST['x'];
$n = $_POST['n'];

echo "The variables are x=$x and n=$n <br/><br/>";
if($x && $n)
{
    echo "<table><tr><th>N</th><th>X<sup>n</sup></th>";
    for ($i = 1; $i <= $n; $i++)
    {
        echo "<tr><td>$i</td><td>".pow($x,$i)."</td>";    
    }
    echo "</table>";
}

?>

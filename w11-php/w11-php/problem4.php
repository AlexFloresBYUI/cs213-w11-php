<?php

$numbers[1] = uno;
$numbers[2] = dos;
$numbers[3] = tres;
$numbers[4] = cuatro;
$numbers[5] = cinco;
$numbers[6] = seis;
$numbers[7] = siete;
$numbers[8] = ocho;
$numbers[9] = nueve;
$numbers[10] = diez;
$numbers[11] = once;
$numbers[12] = doce;
$numbers[13] = trece;
$numbers[14] = catorce;
$numbers[15] = quince;
$numbers[16] = dieciseis;
$numbers[17] = diecisiete;
$numbers[18] = dieciocho;
$numbers[19] = diecinueve;
$numbers[20] = veinte;

switch ($_POST["input4"])
{
    case 'one':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[1] ."\"";
        break;
    case 'two':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[2] ."\"";
        break;
    case 'three':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[3] ."\"";
        break;
    case 'four':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[4] ."\"";
        break;
    case 'five':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[5] ."\"";
        break;
    case 'six':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[6] ."\"";
        break;
    case 'seven':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[7] ."\"";
        break;
    case 'eight':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[8] ."\"";
        break;
    case 'nine':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[9] ."\"";
        break;
    case 'ten':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[10] ."\"";
        break;
    case 'eleven':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[11] ."\"";
        break;
    case 'twelve':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[12] ."\"";
        break;
    case 'thirteen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[13] ."\"";
        break;
    case 'fourteen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[14] ."\"";
        break;
    case 'fifteen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[15] ."\"";
        break;
    case 'sixteen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[16] ."\"";
        break;
    case 'seventeen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[17] ."\"";
        break;
    case 'eighteen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[18] ."\"";
        break;
    case 'nineteen':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[19] ."\"";
        break;
    case 'twenty':
        echo "The word \"" .$_POST['input4'] ."\" in Spanish is \"" .$numbers[20] ."\"";
        break;
    default:
        echo  "The English cardinal \"" .$_POST['input4'] ."\" is not between \"one\" and \"twenty\"";  
}

?>

<?php 
/**
* @param Int $x
* @return Boolean
*/
function isPalindrome($x) {
    if($x < 0) { 
        return false; 
    } 
    
    $numList=[]; 
    while ($x > 0) {
        array_unshift($numList, $x % 10);
        $x = ($x / 10) | 0;
    }

    $mid = floor(count($numList) / 2);
    $right = null;

    if (count($numList) % 2 === 0) {
        $right = array_splice($numList, $mid);
    } else {
        $right = array_splice($numList, $mid + 1);
    }

    $left = array_splice($numList, 0, $mid);
    $right = array_reverse($right);

    if (implode("", $right) === implode("", $left)) {
        return true;
    }

    return false;
}
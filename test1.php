<?php

function remove_accents($input){
		
    // Replace la A y a
    $str = str_replace(
        ['Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'],
        ['A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'],
        $input
    );

    // Replace la E y e
    $str = str_replace(
        ['É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'],
        ['E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'],
    $str );

    // Replace la I y i
    $str = str_replace(
        ['Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'],
        ['I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'],
    $str );

    // Replace la O y o
    $str = str_replace(
        ['Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'],
        ['O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'],
    $str );

    // Replace la U y u
    $str = str_replace(
        ['Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'],
        ['U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'],
    $str );

    // Replace la N, n, C y c
    $str = str_replace(
        ['Ñ', 'ñ', 'Ç', 'ç'],
        ['N', 'n', 'C', 'c'],
    $str
    );
    
    return $str;
}

function remove_special_characters($input) {
    // Removing Special Characters
    $str = str_replace([' ', '-', '"', ':', '.', ',', ';'], '', $input); 
    return $str; 
}

function is_palindrome($input) {
    // Remove special characters
    $special_chtr_removed = remove_special_characters($input);
    // Remove accents
    $accents_removed = remove_accents($special_chtr_removed);
    // Validate palindromes
    $palindrome_validation = strtolower($accents_removed) == strtolower(strrev($accents_removed));

    return $palindrome_validation;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
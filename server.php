<?php

header("Content-type: text/xml");
echo '<?xml version="1.0" encoding="utf-8" standalone="yes"?>';
echo '<response>';

	$banda = $_GET['banda'];
	$knowBandas = ['MANA', 'MOTEL', 'GREEN DAY', 'NICKELBACK', 'MOBY', 'JAGUARES', 'SODA ESTEREO', 'CAIFANES', 'PORTER'];
	
	if(in_array(strtoupper($banda), $knowBandas))
	{
		echo 'Parece que tienes buen gusto por la música';	
	}
	else if(trim($banda) == '') 
	{
		echo 'Eres un perro, pon de una vez tu banda favorita!!!';
	}
	else
	{
		echo 'Que nombre de banda es esa!!!';	
	}

echo '</response>';


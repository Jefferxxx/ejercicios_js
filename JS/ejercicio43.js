const regexComillasDobles = /"(?:[^"\\]|\\.)*"/;

alert(regexComillasDobles.test('"Esta es una cadena"')); 
alert(regexComillasDobles.test('"Cadena con \"comillas\" escapadas"')); 
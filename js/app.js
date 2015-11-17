$(document).ready(function(){
	
	var doc='';

//for loop for the numbers 1 through 100
	for(var i=1; i<=100; i++) {
		
//if the number is divisible by 3 AND 5	(no remainder)
	if (0 === i%3 && 0 === i%5) {
    	doc=doc + 'fizzBuzz' + '<br>';
	} 	

//if the number is divisible by 3 (no remainder)
	else if(0 === i%3) {
    	doc=doc + 'fizz' + '<br>';
    } 	

//if the number is divisible by 5 (no remainder)
	else if(0 === i%5) {
    	doc=doc + 'buzz' + '<br>';
	} 	

//or else, just write the number
	else {
		doc=doc + i + '<br>';
	}

}

$('#content').html(doc);

});
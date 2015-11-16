$(document).ready(function(){

//for loop for the numbers 1 through 100
	for(var i=1; i<=100; i++) {
		//document.write(i + "<br/>");

//if the number is divisible by 3 AND 5	(no remainder)
	if (0 === i%3 && 0 === i%5) {
    	document.write('fizzBuzz' + '<br>');
	} 	

//if the number is divisible by 3 (no remainder)
	else if(0 === i%3) {
    	document.write('fizz' + '<br>');
    } 	

//if the number is divisible by 5 (no remainder)
	else if(0 === i%5) {
    	document.write('buzz' + '<br>');
	} 	

//or else, just write the number
	else {
		document.write(i + '<br>');
	}
}
});

//issue: the numbers replace my <h1> in the body.. haven't figured out how to have both. 

/*Alternate path: 
function isDivisibleByY(i,y){
	if(i%y==0)
    	return true;
	else 
    	return false
}
$('document').ready(function(){
    var t_s1='<span style="color:green">';
    var s2='</span><br>';
    var f_s1='<span style="color:red">';
    var doc='';
    for (var i=1; i<=100; i++){
        var res=isDivisibleByY(i,3);
        console.log ("DEBUG result for i=%o is %o",i,res); 
        var s='';
        if(res){
            s=t_s1;
        }
        else 
            s=f_s1;
        s=s+i+s2;
        console.log(s);
        doc=doc+s;
    }
    console.log("DEBUG "+doc)
	$('#content').html(doc);
});
*/
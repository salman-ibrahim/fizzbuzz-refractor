$(document).ready(function(){

	var inputByUser = userInput();
	for (var i = 1; i <= inputByUser; i++)
	{
		checkForFizzBuzz(i);
	}
});

function checkForFizzBuzz(i){
	if (!(i%3) && !(i%5))
			$('ul').append('<li>FizzBuzz</li>');
		else if (!(i%3))
			$('ul').append('<li>Fizz</li>');
		else if (!(i%5))
			$('ul').append('<li>Buzz</li>');
		else
			$('ul').append('<li>'+i+'</li>');
}

function userInput () {
	var inputByUser = 0;
	do {
		inputByUser = prompt("Enter a number")
		inputByUser = +inputByUser;
	}
	while(isNaN(inputByUser))
	return inputByUser;
}
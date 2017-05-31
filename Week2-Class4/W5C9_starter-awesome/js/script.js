$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}
    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string
	document.getElementById('returnLast_submit').onclick = function(){
			var text = document.getElementById('returnLast_input').value;
			document.getElementById('returnLast_display').innerHTML = text.charAt(text.length - 2);
	}

	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
	
 		document.getElementById('checkWork_submit').onclick = function(){
        var searchWord = document.getElementById('checkWork_input').value;
        var searchResult = (document.getElementById('ps3Text').innerHTML.indexOf(searchWord) >= 0) ? 'Yes' : 'No';
        document.getElementById('checkWork_display').innerHTML = searchResult
    }



	/****** QUESTION 4 ************/
	// Reverse string inputted by user
	document.getElementById('reverseString_submit').onclick = function (){
		var string = document.getElementById('reverseString_input').value; 
		var reverse = string.split('').reverse().join(''); 
		document.getElementById('reverseString_display').innerHTML = reverse;

	}


	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable
	document.getElementById('helloworld_submit').onclick = function () {
		var display = '<div>' + 'Hello World' + '</div>';
		document.getElementById('helloworld_display').innerHTML = display;

}


	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display
	document.getElementById('greet1_submit').onclick = function(){
            var text = document.getElementById('greet1_input').value;
            var greeting = "Hello " + text + ", welcome to the website";
            document.getElementById('greet1_display').innerHTML = greeting;
    }


	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME

 	document.getElementById('greet2_submit').onclick = function(){
            var text = document.getElementById('greet2_input').value;
            if (text == "Alice" || 
                text == "Bob" || 
                text == "Tristan") {
                var greeting = "Hello " + text + ", welcome to the website";
            	document.getElementById('greet2_display').innerHTML = greeting;
            } else {
            document.getElementById('greet2_display').innerHTML = 'I dont know you!';
        }
    }

	/****** QUESTION 8 ************/
	//Accept two integers from the user and display the larger


	document.getElementById('integerMax_submit').onclick = function () {
		var integer1 = document.getElementById('integerMax_input1').value; 
		var integer2 = document.getElementById('integerMax_input2').value; 
		if (integer1 > integer2) {
			document.getElementById('integerMax_display').innerHTML = integer1;
		} else {
			document.getElementById('integerMax_display').innerHTML = integer2;
		}
	}


	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)
	document.getElementById('integerSign_submit').onclick = function(){
		var input1 = document.getElementById('integerSign_input1').value; 
		var input2 = document.getElementById('integerSign_input2').value; 
		var input3 = document.getElementById('integerSign_input3').value;
		if ((input1 * input2 * input3) === 0) {
			document.getElementById('integerSign_display').innerHTML = 'No Sign to Display';
		} else if (((input1 * input2 * input3) > 0)) {
			document.getElementById('integerSign_display').innerHTML = "+"
		} else {
			document.getElementById('integerSign_display').innerHTML = "-"

		}

	}
		/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest
	document.getElementById('integerSort_submit').onclick = function () {
		var input1 = document.getElementById('integerSort_input1').value;
		var input2 = document.getElementById('integerSort_input2').value;
		var input3 = document.getElementById('integerSort_input3').value;
		var sortArray = [input1, input2, input3];
		document.getElementById('integerSort_display').innerHTML = sortArray.sort(function(a,b){return a - b}).reverse();
		console.log(sortArray);

		}


	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function
document.getElementById('rps_submit').onclick = function () {
	var player1 = document.getElementById('rps_player1').value;
	var player2 = document.getElementById('rps_player2').value;
	if ((player1 === 'rock' & player2 === 'scissors') || (player1 === 'paper' & player2 === 'rock') || (player1 === 'scissors' & player2 === 'paper')) {
		document.getElementById('rps_winner_display').innerHTML = 'Player 1 Wins';
	} else {
		document.getElementById('rps_winner_display').innerHTML = 'Player 2 Wins';
	}
}


	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user
	document.getElementById('factoral_submit').onclick = function () {
		var input = document.getElementById('factoral_input').value; 
		for (i = 0; i < input; i++) {
			var factoral = input * (input - 1); 
		}
		document.getElementById('factoral_display').innerHTML = factoral;
	}


	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****		

	document.getElementById('star_submit').onclick = function () {
		var star = '*'; 
		for (i = 0; i < 10; i++) {
			document.getElementById('star_display').innerHTML += star + '<br>'; 
			star += '*'; 
		}
	}		


	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)
	document.getElementById('base_exp_submit').onclick = function () {
		var base = document.getElementById('base_input').value; 
		var exp = document.getElementById('exp_input').value; 
		var answer = Math.pow(base, exp); 
		document.getElementById('base_exp_display').innerHTML = answer; 
	}

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"

	document.getElementById('foobar_submit').onclick = function () {
		for (i = 1; i < 101; i += 1) {
			if ((i % 3 === 0) & (i % 5 === 0)) {
				document.getElementById('foobar_display').innerHTML += 'FooBar' + ', ';
				 } else if (i % 3 === 0) {
				document.getElementById('foobar_display').innerHTML += 'Foo' + ', ';
				 } else if (i % 5 === 0) {
				document.getElementById('foobar_display').innerHTML += 'Bar' + ', ';
			} else {
			document.getElementById('foobar_display').innerHTML += i + ', '; 
		}
	}
}



});	

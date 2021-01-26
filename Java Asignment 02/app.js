// Changing Case

// Question No 01

// var input = prompt("Enter Your Name");
// document.write(input.toUpperCase());

// Question No 02

// var input = prompt("Enter Your Name");
// document.write(input.toLowerCase());

// Strings: measuring length and extracting parts

// Question No 03

// var input = prompt("Enter Your Favorite Mobile Phoone Model");
// document.write(input.length);

// Question No 4

// var input = prompt("Enter any statement");
// var leng = input.length;
// document.write(input.charAt(leng-1))

// Strings: finding segments

// Question No 5

// var word = "Pakistani";
// document.write(word.indexOf("n"));

// Question No 6

// var input = prompt("Enter any Word");
// for (var i = 0; i < input.length; i++) {
//     if (input[i] === "@" || input[i] === "." || input[i] === "," || input[i] === "!") {
//         alert("Enter Valid word");
//         break;
//     }
   
    
// }



// Strings: finding a character at a location
// Question No 08

// var str = "pakistani";
// document.write("The letter on index 3 is " + str.charAt(3))


// Strings: replacing characters

// Question No 09

// var str = "hyderabad"
// document.write(str.replace("hyder","islam"))

// Question No 10

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replace(/and/g,"&"));

// Rounding numbers

// Question No 11

// var num = +prompt("Enter positive integer");
// document.write("The number is " + num + "<br>")
// document.write("The Round off value is " + Math.round(num) + "<br>")
// document.write("The Floor value is " + Math.floor(num) + "<br>")
// document.write("The Ceil value is " + Math.ceil(num) + "<br>")

// Question No 12

// var num = +prompt("Enter negitive integer");
// document.write("The number is " + num + "<br>")
// document.write("The Round off value is " + Math.round(num) + "<br>")
// document.write("The Floor value is " + Math.floor(num) + "<br>")
// document.write("The Ceil value is " + Math.ceil(num) + "<br>")


// Generating random numbers

// Question No 13

// var num = Math.random()*6;
// var round1 = Math.round(num)
// alert("The Value of dice is " + round1)

// Question No 13

// var num = Math.random()*2;
// var toss = Math.ceil(num);
// if(toss === 1) {
//     alert("It's Tails")
// }
// else if (toss === 2) {
//     alert("It's Heads")
// }

// Question No 14

// var num = Math.random()*10
// var secrate = Math.ceil(num);
// var userGuess = +prompt("Enter a number between 1 to 10")
// if (userGuess === secrate) {
//     alert("You Won")
// }
// else {
//     alert("Try Again")
// }

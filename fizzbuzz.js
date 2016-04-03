// Place your FizzBuzz code here. 

var outputText = "";            //outputText = nothing. That makes it a string. Everything will be stored/
                                //Everything will be stored/added/concantenated to outputText

function fizzy(x) {               //Make a function. Put everything up to line 20 in the function.
  for (var i = 1; i < 21; i++){  // Do the stuff below while i is between 1 & 20.

      if (i % 3 !== 0 && i % 5 !== 0) { //If value of i is NOT divisable by 3 AND NOT divisible by 5...
         outputText += i;            // Store the value of i in outputText.
     }
     if(i % 3 === 0) {             // If the value of i is divisable by 3...
       outputText += ("Fizz");     // Replace that value with the letters Fizz. Store Fizz in outputText.
     }
     if(i % 5 === 0) {          // If the value of i is divisable by 5...
        outputText += ("Buzz"); // Replace that value with the letters Buzz. Store Buzz in outputText.
     }

  }                             // Go back to the top, increment i by 1, then do the stuff between the curlies.(5-17)
}                              // Till i = 20.

fizzy (outputText);             // Call for the function from line 6-20.
document.write (outputText);  //Show me everything that's been stored in outputText.
function firstChar(text) {
  // your code here
   let TrimedText=text.trime();
	   return TrimedText.CharAt(0);
   }
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

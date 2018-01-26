// User input variables (subject to change depending on what values want to be tested)
var length = 4;
var choice = 1;
var total;

// Prompt user if they want to calculate area or perimeter
console.log('What would you like to compute -- area or perimeter?');
console.log('Enter a choice (1 for Area -or- 2 for Perimeter): ');

// Prompt user to enter a length in cm
console.log('\nEnter a length in cms: ');

// Calculate perimeter or area depending on user's choice and display it to the screen
if (choice === 1) {
	total = length * length;
	console.log('\nArea of a square of length of ' + length + ' cm is ' + total + ' cm.');
} else if (choice === 2) {
	total = length * 4;
	console.log('\nPerimeter of a square of length of ' + length + ' cm is ' + total + ' cm.');
}


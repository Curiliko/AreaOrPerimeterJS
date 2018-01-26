var length = 4;
var choice = 1;
var total;

console.log('What would you like to compute -- area or perimeter?');
console.log('Enter a choice (1 for Area -or- 2 for Perimeter): ');

console.log('\nEnter a length in cms: ');

if (choice === 1) {
	total = length * length;
} else if (choice === 2) {
	total = length * 4;
}

console.log('\nPerimeter of a square of length of ' + length + ' cm is ' + total + ' cm.');
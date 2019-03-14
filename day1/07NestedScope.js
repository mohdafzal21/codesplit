function foo(a) {
	console.log( a + b );
}

var b = 2;

foo( 2 ); 


// snippet
function foo(a) {
	console.log( a + b );
	b = a;
}

foo( 2 );
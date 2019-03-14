function foo() {
	return 42;
}

foo.bar = "hello world";

typeof foo;			
typeof foo();		
typeof foo.bar;	


// named function expression 
setTimeout( function timeoutHandler(){ 
	console.log( "I waited 1 second!" );
}, 1000 );

// anonymous functions 
setTimeout( function(){
	console.log("I waited 1 second!");
}, 1000 )
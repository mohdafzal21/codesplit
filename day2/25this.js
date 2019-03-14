//default bind
function a(){
    console.log(this.b);
}

var b = "b1";
var c = {b: "b2", a:a};
var d = {b :"b3", a:a};

a(); 
c.a();
d.a(); 

//this 
function foo(){
    console.log(this.bar);
}

var bar = "bar1";

var o2 = {
    bar : "bar2",
    foo : foo
};

var o3 = {
    bar : "bar3",
    foo : foo
}

foo(); 

o2.foo(); 

o3.foo(); 

//example 3 
function foo() {
    console.log( a ); 
}

function bar() {
    var a = 3;
    foo();
}

var a = 2;

bar();

///ex-4

function foo(){
    console.log(this.bar);
}

var bar = "bar1";

var obj = { bar : "bar2"};

foo(); 

foo.call(obj); 
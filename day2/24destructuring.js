let toyBox = {item1:'car', item2:'ball', item3: 'frisbee'};


let {item1, item2} = toyBox;
let {item3 : disc} = toyBox;


console.log(item1, item2);
console.log(disc); 

///exampl2
let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];
let [a,b,c, ...d] = widgets;

console.log(a); //widget1
console.log(b); //widget2
console.log(c);// widget3
console.log(d); //[widget4,widget5]




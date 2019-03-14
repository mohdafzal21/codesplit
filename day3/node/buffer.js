buf = new Buffer(256);
len = buf.write("buffer is used for handling raw data in node js");

console.log("Octets written : "+  len);


//buffer to json 
var buf = new Buffer('converting buffer to json');
var json = buf.toJSON(buf);

console.log(json);

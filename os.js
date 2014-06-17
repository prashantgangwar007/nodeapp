
var os = require('os');

console.log('loaded module os');

var newArray = new Array('Host name : '+ os.hostname(),
						 'Operating System Name : '+os.type(),
						 'Temp Directory : '+os.tmpdir(),
						 ' operating system platform : '+os.platform(),
						 'Total Memory : '+os.totalmem());
						
var len = newArray.length;
var i=0;


while(i<len){
	console.log(newArray[i]);
	i++;
}

var o = os.cpus();

for(var k=0;k<o.length ;k++) {
	console.log(o[k]);
}



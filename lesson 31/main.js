//Do while loop

var i=0;

do{
    i=1+1;
    console.log(i);
}while(i < 5);

console.log("----------");

//while loop

var j=0;
while(j <5){
    j=j+1;
    console.log(j);
}

console.log("----------");

let n = 0;
let x = 0;
while(n < 3){
    n++
    x += n;
    console.log(n);
    console.log(x);
}

console.log("----------");

//for loop

for(var i=0; i < 5; i++){
    console.log("Value of i is:" + i);
}

console.log("----------");

//for / in

var person= {firstName: "Anid", lastName: "Kabashi", age: 15};

var text= '';

var z;

for (z in person){
    text += person[z];
}

console.log(text);

console.log("----------")

// for / of

var names= ['Festa', 'Ardit'. 'Erand'];

var y;

for(y of names){
    console.log(y);
}

console.log("----------");

var txt = "Javascript";

var 1;

for(1 of txt){
    console.log(1);
}

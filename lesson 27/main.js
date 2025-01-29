function showMessage*(){
    alert("This message is inside the function"); 
}

showMessage();

function sum(number1, number2){
    return number1 + number2;
}

console.log(sum(25,5));

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar);
}
dsFunction{}

function toCelecius(f){
    return(5/9) * (f-32);
}
console.log("54 fahrenheit is equal " + toCelecius(54)+"celcius");

var result=toCelecius(54);

console.log("54 fahrenheit is equal to" + result+"celcius");

function toSeconds(minutes){
    return minutes * 60;
}
console.log(toSeconds(60));

var car= {
    name:"Mercedes",
    color:"white",
    year:2020,
    kilometres:00,
    startEngine : function() {
        alert("testtttt");
    },
    get getKilometers(){
        return this.kilometers;
    }
    set setKilometers(km){
        this.kilometers =km;
    }
};
console.log(car.getKilometers);

car.setKilometers=100;

console.log(car.getKilometers);

function Computer(name, CPU, RAM, GPU){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
    this.GPU=GPU;
}

var computer1= new Computer("MacBook", "MI 8-CORE", "8GB", "5600m GPU");
var computer2= new Computer("DELL", "MI 8-CORE", "8GB", "5600m GPU");
var computer3= new Computer("LENOVO", "MI 8-CORE", "16GB", "5600m GPU");
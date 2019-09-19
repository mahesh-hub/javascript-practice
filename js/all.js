var a = 3;
var b = "3";
console.log(a == b);
var a = 3;
var b = "3";
console.log(a === b);

var x = 5;
var y = 2;
var result = (x ** y);
console.log(result);

var a = 3 + 4 + "hai";
console.log(a);

var a = "hai" + 2 + 3 + 4;
console.log(a);

var test = 2 + 3 + 4 + "hello" + 2 + 4 + 6;
console.log(test);

var x = 10;
var y = 15;
var z = 2;
var result = (x + y);
var test = (result * z);
console.log(result * test);

var d = new Date();
console.log(d.getTime());

var d = new Date();
console.log(d.getUTCFullYear());

var d = new Date();
console.log(d.getUTCMonth() + 1);

var d = new Date();
var months = ["janvary", "febrvary", "march", "april", "may", "june", "july", "agaust", "septmber", "october", "november", "december"];
console.log(months[d.getMonth(months[2])]);

var d = new Date();
console.log(d.setMonth());

var d = new Date();
console.log(d.setDate(15));

// var x = 5;
// var y = 10;
// var z = 0;
// var a = 20;
// var result = (x * y * z);
// var position = (a + x);
// var submit = (x + y + z + a);
// console.log(result);
// console.log(submit);
// console.log(position);


// for (i = 10; i <= 40; i++) {
//     if ((i % 2) == 0) {
//         console.log("even numbers :" + i);

//     }
//     else {
//         console.log("odd numbers :" + i);
//     }
// }

for (i = 200; i <= 400; i++) {
    if ((i % 2) == 0) {
        console.log("even numbers", +i);

    }
    else {
        console.log("odd numbers :" + i);

    }

}

var animals = ["monkey", "dog", "cat", "mouse", "rabit", "fox", "cow", "lion", "tiger", 1, 3, 2, 4, 5, 6, 7];
console.log(animals);
console.log(animals[0]);
console.log(animals[0, 4]);


var name = ("       nagamahesh          ");
console.log(name.trim());


var employee ={
    name: "KeyboardEvent.naga mahesh",
    age: 25,
    mailid: "mahesh8978051591@gmail.com",
    gender: "male"

}

console.log(employee);
console.log(employee.mailid);


























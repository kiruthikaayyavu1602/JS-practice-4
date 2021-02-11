//2.
var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
console.log(color.pop())
console.log(color)
  //pop

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
console.log(color.push("yellow"))
console.log(color)  //push

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
console.log(color.shift())
console.log(color)  //shift

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
console.log(color.unshift("Orange"))
console.log(color)  //unshift

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
color [0] = "Pink"
console.log(color)  //changing element

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
delete color [0];
console.log(color)  //deleting element

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
color.splice (3 , 0 , "Pink");
console.log(color)  //splicing(add new elements)

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
color.splice (0 , 1);
console.log(color)  //splicing(to remove an element)

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
var x = color.slice (2);
console.log(x)  //slicing(to remove an element)

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
var x = color.slice (1 , 3);
console.log(x)  //slicing(to remove an element)

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
console.log(color.toString())  //slicing(to remove an element)

var color = ["Red", "Blue", "Green", "Black", "Violet", "Gray"];
var x = color.slice (1);
console.log(x.sort()) //remove red and sort an array

//4.
var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.length)  //string length

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.indexOf("branch"))  //indexOf

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.lastIndexOf("jump"))  //lastindexOf

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.search("hung"))  //Search()

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.slice(4 , 10))  //Slice()

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.substring(4 , 10))  //Substring()

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.substr(10 , 9))  //Substr()

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.replace("Fox" , "Dog"))  //Replace

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.toUpperCase())  //UpperCase

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.toLowerCase())  //LowerCase

var alphabets = "The bunch hung from a high branch,"; 
var y = "and the Fox had to jump for it.";
console.log(alphabets.concat(" " , y))   //concat

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.charAt(0))  //charAt

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets[0])  //property access

var alphabets = "The bunch hung from a high branch, and the Fox had to jump for it.";
console.log(alphabets.split(" , "))  //split

//5.

console.log( Math.PI)
console.log(Math.round(3.4))
console.log(Math.pow(5 , 2))
console.log(Math.sqrt(81))
console.log(Math.abs(-55.5))
console.log(Math.ceil(7.4))
console.log(Math.floor(3.7))
console.log(Math.sin(180 * Math.PI / 180))
console.log(Math.cos(90 * Math.PI / 90))
console.log(Math.min(0, 1500, 30, 20, -200, -1000))
console.log(Math.max(0, 1500, 30, 20, -200, -1000))
console.log(Math.random())

//6.
var d = new Date("Sat Oct 24 2020 21:40:09 GMT+0530 (India Standard Time)");
console.log(d.getDate())
console.log(d.getYear())
console.log(d.getMonth())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())


//10.
var x = 10
var y = new Number(10);
console.log(typeof y )
var x = 1 + "2"
console.log(typeof x)
var y = 333 + 4
console.log(typeof y)
var z = true
console.log(typeof z)
var car = {type:"Fiat", color:"white"};
console.log(typeof car)
var ope = undefined
console.log(typeof ope)

//9.

var x = [1,2,3,4,5,6,7,8,9,10]
var odd = []
var even = []
for(var i = 0;i < x.length; i++)
{
   if (x[i] % 2 === 0 ){
  even.push(x[i])
   }
   else{
    odd.push(x[i])
 }
   
}
console.log(even)
console.log(odd)


//8.
var age = 33; 
if(age > 18){
    alert("age value is greater than 18")
}
else {
    alert("age value is lower than 18")
}
switch(age){
    case 25: console.log("Not matched");
       break;
       case 30:console.log("Not matched");
       break;
       case 33:alert('age matches 33');
        
}

//7.
var x = { };
x ["fname"] = " "; 
x ["lname"] = " ";
x ["roll no"] = " ";
x ["department"] = " ";
console.log(x)

var person = { "name":"John", "age":30, "car":"Fiat" }
console.log(person.name)
console.log(person["name"])  //object usng diff methods

console.log(person.name + " is " + person.age + " years old" + " using " + person.car) //frame a sentence

console.log(person.name + " " + person.age + " " + delete  person.car) //Delete car property
       
myJson = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  },
  "pets": {
    "pet1":"dog",
    "pet2":"cat",
  },
  "flowers": {
    "flower1":"rose",
    "flower2":"lotus",
  }
 }                       // Nested JSON sample.


//3.
var x = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0;i < x.length; i++);
console.log(x)    //for loop
var y;
for (y in x) {
  console.log(x[y])  //for in loop
}
var text = " ";
x = 0;
while (x <= 10) {
  text +=  x;
  x++;
}
console.log(text)  //while loop
var text = " ";
x = 0;
do {
  text +=  x;
  x++;
}
while (x <= 10);  
console.log(text)  //do-while loop

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text +=  i ;
}
console.log(text)  //break the loop where x = 3

var text = "";
var i;
for (i = 0; i <= 10; i++) {
  if (i === 5) { continue; }
  text +=  i ;
}
console.log(text)  //continue the loop while x = 6


let a=10;
let b=20;


// Arithmetic Operators
console.log ("addition of a and b is :", a + b);
console.log("subtarction of a and b is :",a-b);
console.log("multiplication of a and b is :",a*b);
console.log("divison of a and b is :",a/b);
console.log("modulus of a and b is :",a%b);
console.log("exponentiation of a and b is :",a**b);

//compersion operators
console.log("equal to of a and b:",a==b);
console.log("not equal to of a and b:",a!=b);   
console.log("gretaer than of a :",a>b);
console.log("ledd than a  :",a<b);
console.log("greater than or equal to of a:",a>=b);
console.log("less than or equal to of a",a<=b);

let c = a; // assignment
//logical operators
console.log("logical and of a and b:",(a>b && a<c));
console.log("logical or of a and b:",(a>c || a<c));
console.log("logical not of a and b:",!(a>b));

//assignment operators

console.log("value of c is :",c);

c += a; // c = c + a
console.log("value of c after += is :",c);

c -= a; // c = c - a
console.log("value of c after -= is :",c);

c *= a; // c = c * a
console.log("value of c after *= is :",c);

c /= a; // c = c / a
console.log("value of c after /= is :",c);
c %= a; // c = c % a
console.log("value of c after %= is :",c);
c **= a;
console.log("value of c after **= is :",c);

//increment and decrement operators
console.log("value of a before increment is :",a);
a++;
console.log("value of a after increment is :",a);
a--;
console.log("value of a after decrement is :",a);
--a;
console.log("value of a after pre decrement is :",a);
++a;
console.log("value of a after pre increment is :",a);

//ternary operator
let age=21;
let resut=(age>20) ?"eligible":"not eligible";
console.log("The person is :",resut);   

let marks=90;
let result=(marks>=33)?"pass":"fail";
console.log("The student is :",result);
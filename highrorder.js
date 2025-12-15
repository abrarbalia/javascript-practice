let arr=[90,20,30,40,50];
let square=arr.map(l=>l*2);
console.log("squared array is:",square);

let arr=[10,15,22,33,46,55,60];
let even=arr.filter(l=>l%2==0);
console.log("even numbers are:",even);

let arr=[10,20,30];
let sum=arr.reduce((n,value)=>n+value,0);
console.log("sum is:",sum);

let arr=[10,15,22,33,46,55,60];
let big=arr.find(l=>l>50);
console.log("first number greater than 50 is:",big);

function square(n)
{
    console.log("square is :",n*n);
}
function double(n)
{
    console.log("double is :",n*2);
}

function opeatror(n,fn)
{
    return fn(n);
}
opeatror(5,double);
//loops statement 

// for loop

for (let i = 1; i <= 50; i++) {
    //break statement
    // if(i==25)
    // {
    //     continue;
    // }
    console.log(i);
}

// while loop

let j = 1;
while (j <= 50) {
    console.log(j);
    j++;
}

// do while loop

let k = 1;
do {
    console.log(k);
    k++;
}
while (k <= 50);

//sum of first 20 natutral no using for loop
let sum = 0;
for (let i = 1; i <= 20; i++) {
    sum = sum + i;

}
console.log(`sum of first 20 natural no is ${sum}`);

let n = 120;
for (let i = 1; i <= 10; i++) {
    console.log(n, "*", i, "=", n * i)
}

//sum of digits of a no using while loop

let n = 1234;
let sum = 0;
while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
}
console.log("sum of digits is ", sum);

//reverse a no using while loop

let no=122;
let rev=0;
while(no>0)
{
    let digit=no%10;
    rev=rev*10+digit;
    no=Math.floor(no/10);
}
console.log("reversed no is ",rev);

//coutn number of digits in a no using while loop
let no=12345;
let count=0;
while(no>0)
{
    let digit=no%10;
    count++;
    no=Math.floor(no/10);
}
console.log("number of digits is ",count);

//array traversal using for loop
let arr=[10,20,30,40,50];
for(let i=0;i<=arr.length-1;i++)
{
    console.log(arr[i]);
}

//for...of and for...in loop

let arr=[10,20,30,40,50];
for(let i of arr)
{
    console.log(i);
}

//for...in loop

let obj={name:"abrar",age:22};
for(let key in obj)
{
    console.log(key+":"+obj[key]);
}

//while array
let arr=[10,20,30,40,50];
let i=0;
while(i<=arr.length-1)
{
    console.log(arr[i]);
    i++;
}
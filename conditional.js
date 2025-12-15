let a=10;
let b=20;

// if statement

if(a<b){
    console.log("a is less than b");
}

// if-else statement

if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("a is less than b");
}

// if-else if-else statement

if(a>0)
{
    console.log("a is positive");
}
else if(a<0){
    console.log("a is negative");
}
else{
    console.log("a is zero");
}

//if else ladder

let marks=70;
if(marks>=80)
{
    console.log("grade A+");
}
else if(marks>=70)
{
    console.log("grade A");
}
else if(marks>=60)
{
    console.log("grade B");
}
else
{
    console.log("fail");
}

//nested if statement
let age=12;
let gender="female"
if(age>=18)
{
    if(gender=="male")
    {
        console.log("you are eligible for males");
    }
    else
    {
        console.log("you are not eligible");
    }
}
else if(age<18)
{
    if(gender=="female")
    {
        console.log("you are eligible for females");
    }
    else
    {
        console.log("you are not eligible");
    }
}
else
{
    
    console.log("you are not eligible for age");
}

//switch case statement
let day=3;
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
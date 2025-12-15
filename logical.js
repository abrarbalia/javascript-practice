let n;
n=19;
x=n;
//even or odd number 

// if(n/2==0)
// {
//     console.log("n is even number");
// }
// else{
//     console.log("n is odd number");
// }

while(x>0)
    x=x-2;
if(x==0)
{
    console.log(n," is even number");
}
else{
    console.log(n," is odd number");
}


//largest of three numbers

let a=10;
let b=20;
let c=15;

if(a>b && a>c)
{
    console.log(a," is the largest number");
}
else if(b>a && b>c)
{
    console.log(`${b} is the largest number`);
}
else{
    console.log(c,"is the largest number");
}

//elseif ladder using prompt
let marks=90;

if(marks>=90 && marks<=100)
{
    console.log("grade A+");
}
else if(marks>=80 && marks<90)
{
    console.log("grade A");
}
else if(marks>=70 && marks<80)
{
    console.log("grade B");
}
else if(marks>=60 && marks<70)
{
    console.log("grade C");
}
else if(marks>=50 && marks<60)
{
    console.log("grade D");
}
else if(marks>=0 && marks<50)
{
    console.log("fail");
}
else{
    console.log("invalid marks");
}

//leap year or not
let year=2025;
if(year%4==0 && year%100!=0 || year%400==0)
{
    console.log(year," is a leap year");
}
else{
    console.log(year," is not a leap year");
}

let a1=5;
let b1=10;
let c1=15;
let d1=90;
let e1=25;

//check no max from 5
if(a1>b1 && a1>c1 && a1>d1 && a1>e1)
{
    console.log(`${a1} is the largest number`);
}
else if(b1>a1 && b1>c1 && b1>d1 && b1>e1)
{
    console.log(`${b1} is the largest number`);
}
else if(d1>a1 && d1>b1 && d1>c1 && d1>e1)
{
    console.log(`${d1} is the largest number`);
}
else if(e1>a1 && e1>b1 && e1>c1 && e1>d1)
{
    console.log(`${e1} is the largest number`);
}
else if(c1>a1 && c1>b1 && c1>d1 && c1>e1)
{
    console.log(`${c1} is the largest number`);
}
else{
    console.log("invalid input");
}

//swtich case statement
let n1=20
let n2=90;
let ch=2;
switch(ch)
{
    case 1:
        let sum=n1+n2;
        console.log("addition is ",sum);
        break;
    case 2:
        let sub=n1-n2;
        console.log("subtraction is ",sub);
        break;
    case 3:
        let mul=n1*n2;
        console.log("multiplication is ",mul);
        break;
    case 4:
        let div=n1/n2;
        console.log("division is ",div);
        break;
    default:
        console.log("invalid choice");
}

let age=11;
if(age>0 && age<=12)
{
    console.log("child");
}
else if(age>=13 && age<=19)
    {
    console.log("teenager");
    }
else if(age>=20 && age<=35)
{
    console.log("young adult");
}
else if(age>=36 && age<=50)
{
    console.log("adult");
}
else if(age>=60)
{
    console.log("senior citizen");
}
else{
    console.log("invalid age");
}


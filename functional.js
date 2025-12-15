let odd_even=()=>{
    let n=11;
    if(n%2==0)
    {
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
}
odd_even();

let fractional=(no)=>
{
    let n=no;
    let s=1;
    for(let i=1;i<=n;i++)
    {
        s=s*i;
    }
    return s;
}
console.log("factorial is :",fractional(5));

let arr=()=>
{
    let a=[10,20,30,90,40,50];
    let max=a.sort();
    console.log("maximum number is:",max[a.length-1]);
}
arr();
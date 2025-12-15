// //array all type

// //how to declare an array

// let arr=[10,20,30];

// //display all elements of an array
// console.log("array is:",arr);
// //display from specific index
// console.log("array is:",arr[2]);

// arr[0]=100;
// console.log("array after modification:",arr);

// //array length

// console.log("length of array is:",arr.length);

// let a=[10,0,20,30];
// console.log("arr print before push:",a);
// a.push(40); //add element at last
// console.log("arr print after push:",a);

// a.pop();

// console.log("arr print after pop:",a);

// a.unshift(5); //add element at first
// console.log("arr print after unshift:",a);

// a.shift(); //remove element at first
// console.log("arr print after shift:",a);

// console.log(a.includes(200)); //true

// console.log(a.indexOf(20)); 

// console.log("slicing the array:",a.slice(1,3));

// console.log("splicing the array:",a.splice(1,1));//remove 1 element from index 1

// console.log("array after splice:",a);

// let b=[100,200,300];
// let c=a.concat(b);
// console.log("array after concat:",c);

// let rev=c.reverse();
// console.log("reversed array is:",rev);

// let sortarr=[50,20,10,40,30];
// sortarr.sort();
// console.log("sorted array is:",sortarr);


let arr=[10,20,30,40,50];
// for(let i in arr)
// {
//     console.log(arr[i]);
// }
// for(let j of arr)
// {
//     console.log(j);
// }

// arr.push(60);
// arr.push(70);
// arr.unshift(5);
// arr.unshift(1);

// console.log("final array:"+arr);

arr.pop();
arr.shift();

console.log("final array after pop and shift:"+arr);

let arr1=[20,10,50,30];
let arrsrt=arr1.sort();
console.log("smallest number:"+arrsrt[0]);
let revarr=arrsrt.reverse();
console.log("largest number:"+revarr[0]);

//reverse ordder
for(let i=arr1.length-1;i>=0;i--)
{
    console.log(arr1[i]);
}

let arr2=[100,200,300,400,500,600];
let s=arr2.splice(3,2);
console.log("after splice array:"+arr2);
arr2.splice(2,0,350,375);
console.log("after slice array:"+arr2);

let stud=[10,70,30,40,50];
let sum=0;
for(let i=0;i<=stud.length-1;i++)
{
    sum=sum+stud[i];
}
console.log("sum of array elements:"+sum);
let avg=sum/stud.length;
console.log("average of array elements:"+avg);
let min=stud.sort((a,b)=>a-b);
console.log("smallest element:"+min[0]);
console.log("largest element:"+min[min.length-1]);

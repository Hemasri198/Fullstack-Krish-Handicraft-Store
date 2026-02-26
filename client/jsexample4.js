/*let fruits = ["apple","bannana","cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[1]="orange";
console.log(fruits);*/

//PUSH//
/*let fruits = ["apple","bannana","cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits.push("orange");
console.log(fruits);*/

//POP//
/*let fruits = ["apple","bannana","cherry","cherry"];
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);*/

//SHIFT//
/*let fruits = ["apple","bannana","cherry"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);*/

//UNSHIFT//
/*let fruits = ["bannana","cherry"];
fruits.unshift("apple");
console.log(fruits);*/

//INDEXOF()//
/*let fruits=["apple","bannana","cherry"];
let index = fruits.indexOf("banana");
console.log(index);*/

//SPLICE//
/*let fruits=["apple","banana","cherry"];
fruits.splice(1,1);
Element at index 1
console.log(fruits);*/









//SLICE()//
/*let fruits=["apple","banana","cherry","date"];
let selectedFruits = fruits.slice(1,3);
console.log(selectedFruits);
output:["banana","cherry"]*/

//FOREACH()//
/*let fruits=["apple","banana","cherry"];
fruits.forEach(function(fruit,index)
{
    console.log(index + ": "+fruit);
});*/

//WRITE A FUCTION THAT FINDS THE SUM OF ELEMENTS IN AN ARRAY//
/*function sumArray(arr)
{
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
let numbers=[10,20,30,40,50];
console.log(sumArray(numbers));*/

//WRITE A FUNCTION THAT REVERSES THE ORDER OF ELEMENTS IN AN ARRAY WITHOUT USING THE BUILT-IN REVERSE()//
/*function reverseArray(arr)
{
    let reverseArr = [];
    for (let i = arr.length - 1;i >= 0;i--)
    {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
let numbers=[1,2,3,4,5];
console.log(reverseArray(numbers));*/

//WRITE A FUNCTION THAT FINDS THE MAXIMUM AMD MINIMUM IN AN AFRAY//
/*function findMaxMin(arr)
{
    let max = arr[0];
    let min = arr[0];
        for(let i =1 ; i < arr.length; i++)
        {
            if(arr[i]>max)max = arr[i];
            if(arr[i]<min)min = arr[i];
        }
        return{max,min};
}
let numbers=[3,4,5,6,7,9];
console.log(findMaxMin(numbers));*/

//MERGE 2 ARRAYS AND SORTS//
/*function mergeAndSortArrays(arr1,arr2)
{
    let mergeArray = arr1.concat(arr2);
    return mergedArrays.sort((a,b)=>a-b);
}
let array1=[3,5,1];
let array2=[9,2,8];
console.log(mergeAndSortArrays(array1,array2));*/

//common element in arrays//
/*function findCommonElements(arr1,arr2)
{
    return arr1.filter(element=>arr2.includes(element));
}
let array1=[1,2,3,4,5];
let array2=[4,5,6,7,8];
console.log(findCommonElements(array1,array2));*/


//OBJECT//
/*let person = {              //a collection key value pair.
    name:"Hema",
    age:18,
    isStudent:false
    address="1,Meena",
    isEmployed=true,
};
delete person.isStudent;
console.log(person);*/

let car ={
    make:"Toyota",
    model:"Camry",
    isRunning:false,
    start:function()
    {
        this.isRunning=true;
        console.log("Car is now running.");
    },
    stop:function()
    {
        

    }
}





//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30]
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

  //Code Here
var first = function(){
  var x = arr.slice(0, 1)
  alert('The first object in the array is = ' + x);
}
first();

//Next problem =========================================================================================


var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.

  //Code Here
var last = function() {
  x = arr.slice(-1)
  alert('Last element in the array is = ' + x)
}
last();


//Next problem =========================================================================================


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  //Code Here
var looper = function() {
  for (i = 0; i < family.length; i++) {
    alert(family[i]);    //alert([i]) = (using [i]) only will displays each index number
  }                     //putting an alert here displays the complete array rather than displaying each item -- again using [i] only displays all the index numbers in one display
}
looper();

//Next problem =========================================================================================

var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  //Code Here

var reversedLooper = function() {
  for (var i = letters.length -1; i >= 0; --i) {   //make sure to use i >= 0; will not show first item in the array if using i > 0
    alert(letters[i]);
  }
}
reversedLooper();

//Next problem =========================================================================================

var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  //Code Here

var evens = [];                    //create an array to store pushed even numbers in
  var evenFinder = function () {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {   //using the % 2 will divide any number by 2 if it comes up with a modulo of "0", it's an even number. 
        evens.push(nums[i]);
        }
    }
alert('var evens array = [' + evens + ']');
};
evenFinder();

//Next problem =========================================================================================

var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).


  //Code Here

var divider = function () {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {    //using the % 2 will divide any number by 2 if the modulo result is equal to "0", it's an even number.
      odds.push(nums[i]);      //If the value returned is 1 then it's an odd number, using % 2 !== 1 tests to verify what nums are not equal to 1 ther
      } 
    else {
      evens.push(nums[i]);  //else statement keeps the code dry
      }
  }
alert('var evens array = [' + evens + ']'); //displays the evens array
alert('var odds array = [' + odds + ']');  //displays the odds array
};
divider();

//Next problem =========================================================================================

var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function named finder that will get a random number, 
//then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false

  //Code Here

var num1 = Math.random();      //random generator
var num2 = (num1 * 30) + 1;   //converts the 16-place decimal to a number ranging from 0.000…. to 5.999…., then adds 1 to it so that the range is is now  1.000… to  30.999… 
var num3 = Math.floor(num2); //rounds the value represented by num2 down to the nearest integer that ranges from 1 through 30.

var finder = function() {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === num3) {
      alert('The random number ' + num3 + ' matches ' + numbers[i]);
      break;
       }
    else {
      alert('The random number ' + num3 + ' did not match ' + numbers[i]);
      break;
      }
  }
};
finder();

//Next problem =========================================================================================

var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

  //Code Here
var str = 'this is my sentence';
  var reverse = function() {
  var x = str.split('').reverse().join('');  //the split method is used to sperate each character into an an array (i.e. this = ['t','h','i','s']), 
                                            //the reverse method is used to reverse the characters and the join method puts them back together
  
  alert(x);                                //place alert here to see result, will not work outside of function 
}
reverse();

//Next problem =========================================================================================

var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. Once you do that,
  write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  //Code Here
var removeItem = function (item) {
  for (var i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] === item) {    //checking to see if item is on the list, if it is see next function
        myGroceryList.splice(i, 1);    //item is removed from list
      }
  }
};
removeItem('chips');//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
alert('My updated Grocery List = ' + myGroceryList); //displays updated grocery list

var addItem = function(item) {
  for (i = 0; i < myGroceryList.length; i++) {
    if (myGroceryList[i] !== item) {  //if not on grocrery list then see next line (test for true)
        myGroceryList.push(item);    //add new item to list
        break;                      //break used here to prevent adding Jerky to list several times
      }
  }
};
addItem('Jerky');                                      //addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
alert('My upated grocery list = ' + myGroceryList);   //display updated grocery list


//Next problem =========================================================================================

//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  //Code Here
var myArr = function() {
  var arrAdd = [];                          // create an array to hold the result
    for (i = 1; i < 216; i++) {
        var y = arrAdd.push(i);           //fill the array
    }
alert(' Result = [' + arrAdd + ']');    // verify the answer is correct
};
myArr();


//Next problem =========================================================================================


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  //Code Here
var addTen = function() {
  var arrAdd = [];                            // create a local array to hold the sum of numbers + 10
    for (i = 0; i < numbers.length; i++) {
      var num = Number(numbers[i]);         //convert any numbers that are string to an integer
      var sum = num + 10;                  //now add 10 to the converted number
      arrAdd.push(sum);                   //add to the arrAdd array
    } 
alert('Add 10 to the numbers array [' +  numbers + ']' + ' Result = [' + arrAdd + ']'); // verify the answer is correct, alert written to look pretty
};
addTen();


//Next problem =========================================================================================

var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

  //Code Here
var longestArr = function(x, y) {
  if (x > y) {
    alert('arr1: (' + x.length + ') has more numbers than arr2: (' + y.length + ')');
    alert('aar1 = [' + x + '] vs aar2 = [' + y + ']');
    }
  else {
    alert('arr2: (' + y.length + ') has more numbers than arr1: (' + x.length + ')');
    alert('aar2 = [' + y + '] vs aar1 = [' + x + ']');
  }
};
longestArr(arr1, arr2);

/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  //Code Here
var bothArr = function(){
  var num1 = Math.floor(Math.random() * (30 - 0) + 0);
  var num2 = Math.floor(Math.random() * (30 - 0) + 0);
  var arr1 = [];
  var arr2 = [];
  for(var i = 0; i < num1; i++){
    arr1.push(i);
  }
  for(var i = 0; i < num2; i++){
    arr2.push(i);
  }
  alert('aar1 = [' + arr1 + '] and arr2 = [' + arr2 + ']')
  }
bothArr();

  // My example above will return a new array each time it is called


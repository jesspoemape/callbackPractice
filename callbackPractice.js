/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the sayHi function that makes the code above work, 
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
*/


// 1. Write a function called first that returns the first item of the array using a callback function

  function first (arr, cb) { 
    cb(arr[0]);
  }

  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



// 2. Write a function called last which returns the last item of the array using a callback function.

  function last (arr, cb) {
    var lastIndex = arr.length - 1;
    cb(arr[lastIndex]);
  }

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});



// 3. Write a function called multiply that multiplies two numbers using a callback function.

  function multiply (num1, num2, cb) {
    cb(num1 * num2);
  }


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array. 
// If it does, return true using the callback, if not return false.

  function contains(arr, name, cb) {
    if (arr.includes(name)) {
      cb(true);
    }
    else {
      cb(false);
    };
  }

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns 
// the callback function with the array of unique names.

    function uniq (arr, cb) {
      var uniqArr = arr.reduce(function(a, b) { // a is the initial value of the array; b is the value current element
        if (a.indexOf(b) < 0) { // if the index of the tested element in the array is < 0, this means it exists elsewhere in the array 
                                // this is because negative valuies count backwards in an array
          a.push(b); // if the value is unique, the value will be pushed to a
        }
        return a; // the array is returned 
      }, []); // this is the inital value of "a" from before
      return cb(uniqArr); // this callback returns the reduced array
    }

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each item, use a callback 
// function to return the indices and item.

    function each(arr, cb) {
      for (var i = 0; i < arr.length; i++) { // this loops through the array
        cb(arr[i], i); // for each value, the callback will return the item at the current index and the current index
      }
    }

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID 
// and returns that user.

 function getUserById (users, ID, cb) {
   for (var i = 0; i < users.length; i++) { // this loops through the users array
     if (users[i].id === ID) { // if the users array with the key "id" matches the desired ID, 
       return cb(users[i]); // then return the user by the users array index through the callback function
   }
   }
   
 }

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
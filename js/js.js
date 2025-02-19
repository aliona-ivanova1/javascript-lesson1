// 1 დავალება

for(let  a = 5; a < 100; a++){
    console.log(a)
}


// 2დავალება
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
for (let  i = 0; i < 9;  i++){
    console.log(array1[i])
}









// ციკლი ვერ გავიგე


// 3 დავალება

let array2= [1, 2, 3, 4, 5]

// for ( item4 = 0; item4 + array2.length; item4++){
//     console.log(item4)
// } break.







// 4დავალება

// 5 დავალება

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  }
  console.log(user.studentstatus)
  console.log(user["studentstatus"])
  

// 6 დავალება
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}
if(user2 < 18 && statusbar == "active"){
    console.log("hello use")
} else if(user2.age == "levani"  ){
    console.log("hello levan")
} else if(user2.studentstatus == "active" || user2.age < 25){
    console.log(" hello anna")
}else{
    console.log("error")
}


let resalt =  user2 < 18 && statusbar == "active" ? "hello use": user2.age == "levani"  ? "hello levani": user2.studentstatus == "active" || user2.age < 25 ? "hello ana" : "error";
console.log(resalt)




// 7 დავალება

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//              0  1  2   3  4  5  6  7     8 9  10 
console.log (array6[0],[3],[5],[7],[8],[10])


// 8დავალება

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
console.log(users[2])

for (let item9 of  users){
    if (item9.status === true){
        console.log(item9)
    }
}  





// 9 დავალება
let array7 = [32, 14, null, 40, 50]

console.log(array7[4])

// 10 დავალება
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ]

console.log(array8[0][0])
console.log(array8[1][0])
console.log(array8[2][0])






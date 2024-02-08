//  const personArray = ["Abhi","Vivek","Isha"];
// const genderArray = ["male","male","female"];
// const numberofUsers = personArray.length;

// for(let i=0 ; i < numberofUsers ; i++){
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }

// }

// you can also combine values using objects(complex primitives)


//const user1={
    firstName: "Abhyudaya",
    gender:"male"
// }

// console.log(user1["firstName"]);

const allUsers =[{
    firstName :"Abhyudaya",
    gender :"male"
},{
    firstName:"Raman",
    gender:"male"
},{
    firstName:"Priya",
    gender:"female"
}
]
for(let i= 0 ; i<allUsers.length ; i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}
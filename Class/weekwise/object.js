const allUsers = [{
    firstName:"Abhyudaya",
    gender: "male"
},{
    firstName:"Harsh",
    gender: "male"
},{
    firstName:"Priya",
    gender: "female"
}]

for( let i=0; i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"])
    }
}
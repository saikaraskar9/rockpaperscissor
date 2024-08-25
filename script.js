const arr = ["rock","paper","scissors"]

function getcomputerchoice(){
    const value = Math.floor(Math.random()* arr.length)
    console.log(arr[value])
}

getcomputerchoice()

async function getData(){
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await result.json()
    console.log(data)
    
}


function userName(){
    console.log("What is your name?")
}

function newFeatureB(){
    console.log("feature b added")
}
// console.log(getData)
getData()
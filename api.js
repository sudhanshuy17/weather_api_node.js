async function getData(){
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await result.json()
    console.log(data)
    
}

function newFunc(){
    console.log("new feature added")
}

// console.log(getData)
getData()
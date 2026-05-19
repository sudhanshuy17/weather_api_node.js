async function getData(){
    let result = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await result.json()
    console.log(data)
    
}


// console.log(getData)
getData()
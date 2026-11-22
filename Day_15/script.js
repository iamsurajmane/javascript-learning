// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData(){
    let x =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await x.json()
    console.log(data)
}

async function main() {
    console.log("Loading Modules")
    console.log("Do Something Else")
    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("Process Data")
    console.log("Task 2")
}
main()
// data.then((v)=>{
// console.log(data)

// console.log("Process Data")
// console.log("Task 2")
// })

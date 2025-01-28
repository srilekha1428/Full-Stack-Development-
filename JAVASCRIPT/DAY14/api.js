// HERE WE CREATED AN OBJECT AND CONVERTED IT INTO JSON FORMAT AND THEN BACK TO OBJECT FORMAT
let obj={
    name : "sample",
    id:1,
    branch:"CSE"
}
console.log("THE OBJECT CREATED IS:");

console.log(obj);

let obj1 = JSON.stringify(obj);//STRINGIFY METHOD IS USED TO CONVERT OBJECT TO JSON FORMAT
console.log("BY STRINGIFY METHOD");

console.log(obj1);

let obj2 = JSON.parse(obj1);//PARSE METHOD IS USED TO CONVERT JSON FORMAT TO OBJECT FORMAT
console.log("BY PARSE METHOD");
console.log(obj2);


//3 ways to fetch json
//fetch(),ajax,axios

window.fetch("data.json")
.then((data)=>data.json())//convert to json
.then((res)=>{
    //console.log(res);
    
    res.map((x)=>{
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        console.log(x.branch);

        document.body.innerHTML += `<p>${x.name}</p>`
        document.body.innerHTML += `<p>${x.id}</p>`
        document.body.innerHTML += `<p>${x.branch}</p>` 
        
    })
})


// window.fetch('https://fakestoreapi.com/products')





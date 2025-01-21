function Main(m,n){
    // for(i=m;i<n;i++){
    //     console.log(i);  
    // }
    setTimeout(()=>{
        for(i=m;i<n;i++){
            console.log(i);  
        }
    },3000);
}
//Main(1,10);
Main(1,"10a");
function demo(){
    console.log("hello");
    
}
demo();
//above is synchronous to convert these into asynchronous use methods for above func


//SETTIMEOUT ASYNCHRONOUS METHOD
window.setTimeout(()=>{
    console.log("I am setTimeout");
    
},3000);

//SETINTERVAL ASYNCHRONOUS METHOD
window.setInterval(()=>{
    console.log("I am setInterval");
    
},3000);

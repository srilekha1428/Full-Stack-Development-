

function Arithmetic(a,b){
    let c=a+b
    console.log("Addition of two numbers");
    console.log(c);

    let d=a-b
    console.log("Subtraction of two numbers");
    console.log(d);

    let e=a*b
    console.log("Multiplication of two numbers");
    console.log(e);

    let f=a/b
    console.log("Division of two numbers");
    console.log(f);

    let g=a%b
    console.log("Modulus of two numbers");
    console.log(g);
    
    let h=a++
    console.log("Post Increment of 1st number");
    console.log(h);

    let i= ++b
    console.log("Pre Increment of 2nd number");
    console.log(i);
    console.log(a);
    console.log(b);
    
    let j= a--
    console.log("Post decrement of 1st number");
    console.log(j);

    let k= --b
    console.log("Pre decrement of 1st number");
    console.log(k);

    
}
let x = Number(prompt("Enter first number "));
let y =Number(prompt("Enter first number "));
Arithmetic(x,y)
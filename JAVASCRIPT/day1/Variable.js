console.log("Start");

//global scope
var a= 10;
console.log(a);
var a=1000;
console.log(a);

let b=20;
console.log(b);
b=2000;

const c=30;
console.log(c);

//block scope
{
    var m=200;
    console.log(m);

    let n="hello";
    console.log(n);

    const o="hello";
    console.log(o);
    
}
console.log("Stop");




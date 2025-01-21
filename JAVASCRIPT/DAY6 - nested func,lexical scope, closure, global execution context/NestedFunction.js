// function parent(){
//     function child(){
//         console.log("I AM CHILD FUNC");
        
//     }
//     console.log(child);
//     child();
// }
// parent()

// //the variable written outside can accessed inside
// var a=10;
// let b=20;
// function parent1(){
//     //console.log(a);
//     //console.log(b);
//     var a="hello"
//     let b="hi"
//     console.log(a);
//     console.log(b);
//     console.log(this.a);//this keyword to access global scope inside local scope
//     console.log(this.b);//undefined --> goes to global scope and check and identifier b has global scope

    
// }
// parent1()

// //SCOPE CHAIN
// function main(){
//     let a=10;
//     function child(){//child function is local scope to main function and main is global to child.
//         console.log(a);
//         //here lexical scope is acheived
//     }
//     child();
// }
// main();

//CLOSURE --> THE BINDING OF CHILD FUNC TO PARENT FUNC
// console.log("start");

// function parent2(){
//     let a=10;
//     function child(){
//         console.log(a);
        
//     }
//     return child;
// }
// parent2()();
// parent2()();
// parent2()();

// function parent4(){
//     function child1(){
//         console.log("i am child1");
//         child2();
        
//     }//here the task is to call child 1 and child 2 through parent function
//     function child2(){
//         console.log("i am child2");

//     }
//     return child1
// }
// parent4()()

function parent5(){
    function child1(){
        console.log("i am child1");
        function child1_1(){
            console.log("i am inside child1");
        }
        return child1_1
        
    }//here the task is to call child 1 and child 2 through parent function
    function child2(){
        console.log("i am child2");
        
    }
    return [child1,child2]
}
parent5()[0]()()
parent5()[1]()
function demo(){
    console.log("Hello World");
    
}
let a = document.getElementById('demo1')
//console.log(a);
a.onclick=function (c){
    console.log(c);//gives the type of event
    
    //let res = Math.random()//prints decimals
   // let res=Math.round(Math.random()*1000)//to print integers
    //round is to round up decimals to integers
    //
    // console.log(res);
    let res=Math.round(Math.random()*1000).toString(16)//to generate characters and numbers and only upto F as it is 16 here hexa decimal is created everytime
    console.log(res);
    document.body.style.backgroundColor=`#${res}`  //to generate different colors for background when butteon is pressed 
    //the hexa decimal is assigned to background color so it keeps changing when pressed
    //${} it is literal and is used to generate a string and when ${} is used the `` must be used and # is for hexa decimal or the background color string

}


// let demo2 = document.getElementById('demo2');
// console.log(demo2);

// let color = window.prompt("Enter any colorr name");
// console.log(color);

// demo2.innerHTML=color;//value from color is appended to button using innerHtml

// // it changes color when the mouse pointer is on the button
// demo2.onmouseover=()=>{
//     document.body.style.backgroundColor=`${color}`;
//     document.body.style.transition="3s"
// }

/*
//IT CHANGES COLOR WHEN THE POINTER LEAVES THE BUTTON
demo2.onmouseleave=()=>{
    document.body.style.backgroundColor=`${color}`;
    document.body.style.transition="ease all 3s"
}*/

/*
//CHANGES COLOR WHEN WE DOUBLE CLICK
demo2.ondblclick=()=>{
    document.body.style.backgroundColor=`${color}`;
    document.body.style.transition="ease all 3s"
}
    */


//CONVERTING TEXT TO SPEECH AND WE CAN CHANGE VOICE BY USING PITCH
let demo4 = document.getElementById('demo4');
console.log(demo4);
//  .value() is to get the test from the textarea
demo4.addEventListener("click",()=>{
    let demo3 = document.getElementById('demo3').value
    console.log(demo3);
    let speech = new SpeechSynthesisUtterance
    console.log(speech);
    speech.text=demo3;
    speechSynthesis.speak(speech)    
    
})

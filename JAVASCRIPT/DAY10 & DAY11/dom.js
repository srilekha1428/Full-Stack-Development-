console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);//prints the head tag
console.log(document.title);//gives the title of the page
document.title="flipkart";//changing title from js file dynamically
console.log(document.body);//all the html tags can be accessed through document (dom)

let link = document.links;
console.log(link);
// console.log(link[0]);
// console.log(link[1]);
// console.log(link[2]);

for(let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className="demo"//assigning class to the links
    link[i].href="http://www.youtube.com";//adding href
    link[i].target="_blank"//opens in new tab
    
}



//INDIRECT ACCESS (methods in dom)(6 methods)

//GETELEMENTBYID("VALUE")
console.log("GET ELEMENT BY ID");
let a = document.getElementById("demo1");
console.log(a);//prints whole tag
console.log(a.textContent);//prints content in tag
a.textContent="Batch6"
console.log(a.textContent);
a.style.backgroundColor = "blue";
a.style.textAlign="center";


//targeting h2 and h3 tags with className 
console.log("GET ELEMENT BY CLASS NAME");
let b = document.getElementsByClassName("demo2");
console.log(b);//returns array named html collection and each element have index value 
console.log(b[0]);
console.log(b[1]);
console.log(b[0].textContent);
b[0].style.backgroundColor="yellow"

//<---------------------------  DAY 11 ------------------------------------>

//targeting p tags.  and getElementById("value") with id name
console.log("GET ELEMENT BY TAG NAME");
let ptag = document.getElementsByTagName("p");//returns html collection array and each element have index value and it store only html tags
console.log(ptag);
console.log(ptag[0]);
ptag[0].style.color="red";
ptag[0].textContent="hello";

//targeting by name --> span tag and ol li tags
console.log("GET ELEMENT BY NAME");

let d = document.getElementsByName("demo3");//returns array that comes under nodelist and each element have index value nodelist stores plaintext and html tags
console.log(d);
console.log(document.body.childNodes);
console.log(d[1]);
d[1].style.backgroundColor="crimson";
d[0].style.backgroundColor="black";
d[0].style.color="white";

//document.querySelector("value")
//targetting h1
console.log("QUERY SELECTOR");

let e = document.querySelector("#demo1");
console.log(e);

let g = document.querySelector(".demo2");
console.log(g);

console.log("QUERY SELECTOR ALL");

// document.querySelectorAll("value")
let f = document.querySelectorAll("#demo1");
console.log(f);
console.log(f[0]);

let h = document.querySelectorAll(".demo2");
console.log(h);
console.log(h[0]);
console.log(h[1]);

//EVENTS IN DOM
//-----------
/*  1 KEY BOARD EVENT -->key up, key down, key press
 2 MOUSE EVENT -->onmouseover , onmouseleave, dbclick
 3 FORM EVENT --> input, blur, focus
 4 POINTER EVENT --> click
 */
















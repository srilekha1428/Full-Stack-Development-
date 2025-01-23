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
let a = document.getElementById("demo1");
console.log(a);//prints whole tag
console.log(a.textContent);//prints content in tag
a.textContent="Batch6"
console.log(a.textContent);
a.style.backgroundColor = "blue";
a.style.textAlign="center";


//targeting h2 and h3 tags with className
let b = document.getElementsByClassName("demo2");
console.log(b);//returns array named html collection and each element have index value 
console.log(b[0]);
console.log(b[1]);
console.log(b[0].textContent);
b[0].style.backgroundColor="yellow"












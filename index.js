/*console.log("hai hello");
console.log("this is love");
alert("how are you");
let al=9;
console.log(al);
let name="nikhita";
let age=18;
let student=false;
console.log("hai",name);
console.log("you are",age,"years old");
console.log("enrolled",student);
document.getElementById("p1").innerHTML= "hello "+name;
document.getElementById("p2").innerHTML= "you are "+age+" years old";
document.getElementById("p3").innerHTML="enrolled: "+student;
let username= window.prompt("what's your name?");
console.log(username);
let username1;  
document.getElementById("mybutton").onclick=function(){
  
username1=document.getElementById("in").value;
console.log(username1);
document.getElementById("mm").innerHTML="hello "+username1;
}
let age= window.prompt("how old are you");
console.log(typeof age);
age=Number(age);
console.log(typeof age);
age =age+1;
console.log("happy birthday you are "+age+" years old");
//constant
const  PI=3.14;
let r;
let cirum;
r= window.prompt("enter the radius");
r=Number(r);
cirum=2*PI*r;
console.log(cirum);
//math
let x=3.14;
let y=7;
let i=2;
a=Math.round(x);
s=Math.floor(x);
d=Math.ceil(x);
f=Math.exp(x,2);
g=Math.sqrt(x);
k=Math.abs(x);
console.log(a);
console.log(s);
console.log(d);
console.log(f);
console.log(g);
console.log(k);
console.log(Math.min(x,y,i));
console.log(Math.max(x,y,i));
console.log(Math.PI);
let a;
let b;
let c;
a=window.prompt("enter side a");
a=Number(a);
b=window.prompt("enter side b");
b=Number(b);
c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log(c);
document.getElementById("b1").onclick=function()
{
    a=document.getElementById("i1").value;
    a=Number(a);
    b=document.getElementById("i2").value;
    b=Number(b);
    
    //c=Math.sqrt(Math.pow(document.getElementById("a").value,2)+Math.pow(document.getElementById("b").value,2));
    //console.log(c);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("c").innerHTML= c;
}*/


let count=0;
document.getElementById("dec").onclick=function(){
count-=1;
document.getElementById("lab").innerHTML=count;
}

document.getElementById("res").onclick=function(){
    count=0;
    document.getElementById("lab").innerHTML=count;    
}
document.getElementById("inc").onclick=function(){
    count+=1;
    document.getElementById("lab").innerHTML=count;   
}
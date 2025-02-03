var button1=document.getElementById('btn1');
var button1=document.getElementById('btn2');
var button1=document.getElementById('btn3');
var button1=document.getElementById('btn4');

button1.onclick=function()
{
    alert('Hello');
}
button2.onmouseover=function()
{
    alert('Hello');
}
button3.onmouseleave=function()
{
    alert('Hello');
}
button4.onmousewheel=function()
{
    alert('Hello');
}

var firstButton=document.querySelector('button');

firstButton.onclick=function(){
    alert('Hello world!')
}

button3.addEventListener('clicl' ,function(){
    alert('Hello from Digital School')
});
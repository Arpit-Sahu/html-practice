var p1d1 = document.querySelector(".P1D1");
var p1d2 = document.querySelector(".P1D2");
var p1d3 = document.querySelector(".P1D3");
var p1d4 = document.querySelector(".P1D4");
var p1d5 = document.querySelector(".P1D5");
var p1d6 = document.querySelector(".P1D6");
var p1c = document.querySelector(".P1C");

var p2d1 = document.querySelector(".P2D1");
var p2d2 = document.querySelector(".P2D2");
var p2d3 = document.querySelector(".P2D3");
var p2d4 = document.querySelector(".P2D4");
var p2d5 = document.querySelector(".P2D5");
var p2d6 = document.querySelector(".P2D6");
var p2c = document.querySelector(".P2C");

var spin = document.querySelector(".SPIN");
var title = document.querySelector(".TITLE");

var p1;
var p2;

spin.addEventListener("click",change);

function change()
{
    
            p1d1.classList.remove("DISSAPPEAR");
            p1d2.classList.remove("DISSAPPEAR");
            p1d3.classList.remove("DISSAPPEAR");
            p1d4.classList.remove("DISSAPPEAR");
            p1d5.classList.remove("DISSAPPEAR");
            p1d6.classList.remove("DISSAPPEAR");
            p1c.classList.remove("DISSAPPEAR");
    
            p2d1.classList.remove("DISSAPPEAR");
            p2d2.classList.remove("DISSAPPEAR");
            p2d3.classList.remove("DISSAPPEAR");
            p2d4.classList.remove("DISSAPPEAR");
            p2d5.classList.remove("DISSAPPEAR");
            p2d6.classList.remove("DISSAPPEAR");
            p2c.classList.remove("DISSAPPEAR");
    
    p1 = Math.random()*10;
    p1 = Math.round(p1);
    while(p1>6||p1<1)
        {
            p1 = Math.random()*10;
            p1 = Math.round(p1);
        }
    p2 = Math.random()*10;
    p2 = Math.round(p2);
    while(p2>6||p2<1)
        {
            p2 = Math.random()*10;
            p2 = Math.round(p2);
        }
    if(p1==1)
        {
            p1d1.classList.add("DISSAPPEAR");
            p1d2.classList.add("DISSAPPEAR");
            p1d3.classList.add("DISSAPPEAR");
            p1d4.classList.add("DISSAPPEAR");
            p1d5.classList.add("DISSAPPEAR");
            p1d6.classList.add("DISSAPPEAR");
        }
    if(p1==2)
        {
            p1c.classList.add("DISSAPPEAR");
            p1d2.classList.add("DISSAPPEAR");
            p1d3.classList.add("DISSAPPEAR");
            p1d4.classList.add("DISSAPPEAR");
            p1d5.classList.add("DISSAPPEAR");
        }
    if(p1==3)
        {
            p1d2.classList.add("DISSAPPEAR");
            p1d3.classList.add("DISSAPPEAR");
            p1d4.classList.add("DISSAPPEAR");
            p1d5.classList.add("DISSAPPEAR");
        }
    if(p1==4)
        {
            p1c.classList.add("DISSAPPEAR");
            p1d3.classList.add("DISSAPPEAR");
            p1d4.classList.add("DISSAPPEAR");
        }
    if(p1==5)
        {
            p1d3.classList.add("DISSAPPEAR");
            p1d4.classList.add("DISSAPPEAR");
        }
    if(p1==6)
        {
            p1c.classList.add("DISSAPPEAR");
        }
    
    
    if(p2==1)
        {
            p2d1.classList.add("DISSAPPEAR");
            p2d2.classList.add("DISSAPPEAR");
            p2d3.classList.add("DISSAPPEAR");
            p2d4.classList.add("DISSAPPEAR");
            p2d5.classList.add("DISSAPPEAR");
            p2d6.classList.add("DISSAPPEAR");
        }
    if(p2==2)
        {
            p2c.classList.add("DISSAPPEAR");
            p2d2.classList.add("DISSAPPEAR");
            p2d3.classList.add("DISSAPPEAR");
            p2d4.classList.add("DISSAPPEAR");
            p2d5.classList.add("DISSAPPEAR");
        }
    if(p2==3)
        {
            p2d2.classList.add("DISSAPPEAR");
            p2d3.classList.add("DISSAPPEAR");
            p2d4.classList.add("DISSAPPEAR");
            p2d5.classList.add("DISSAPPEAR");
        }
    if(p2==4)
        {
            p2c.classList.add("DISSAPPEAR");
            p2d3.classList.add("DISSAPPEAR");
            p2d4.classList.add("DISSAPPEAR");
        }
    if(p2==5)
        {
            p2d3.classList.add("DISSAPPEAR");
            p2d4.classList.add("DISSAPPEAR");
        }
    if(p2==6)
        {
            p2c.classList.add("DISSAPPEAR");
        }
    
    if(p1>p2)
        {
            title.textContent = "PLAYER 1 WINS .."
        }
    else if(p1==p2)
        {
            title.textContent = "DRAW .."
        }
    else{
        title.textContent = "PLAYER 2 WINS .."
    }
}
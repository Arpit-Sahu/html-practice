
var EASY = document.querySelector(".EASY");
var HARD = document.querySelector(".HARD");
var NEW = document.querySelector(".NEW");
var TRY = document.querySelector(".TRY");
var correct;
var flag = 0;


    var c = [];

     c[0] = document.querySelector(".c1");
     c[1] = document.querySelector(".c2");
     c[2] = document.querySelector(".c3");
     c[3] = document.querySelector(".c4");
     c[4] = document.querySelector(".c5");
     c[5] = document.querySelector(".c6");

function again()
{
    for(var i=0; i<6; i++)
        {
            c[i].classList.remove("fade")
        }
}

function choose()
{
    if(r[correct]==r[0] && b[correct]==b[0] && g[correct]==g[0])
        {
            for(var i=0; i<6;i++)
                if(i!=0)
                    c[i].classList.add("fade");    
        }
    else{
        c[0].classList.add("fade");
    }
}
function choose1()
{
    if(r[correct]==r[1] && b[correct]==b[1] && g[correct]==g[1])
        {
            for(var i=0; i<6;i++)
                if(i!=1)
                    c[i].classList.add("fade");    
        }
    else{
        c[1].classList.add("fade");
    }
}
function choose2()
{
    if(r[correct]==r[2] && b[correct]==b[2] && g[correct]==g[2])
        {
            for(var i=0; i<6;i++)
                if(i!=2)
                    c[i].classList.add("fade");    
        }
    else{
        c[2].classList.add("fade");
    }
}
function choose3()
{
    if(r[correct]==r[3] && b[correct]==b[3] && g[correct]==g[3])
        {
            for(var i=0; i<6;i++)
                if(i!=3)
                    c[i].classList.add("fade");    
        }
    else{
        c[3].classList.add("fade");
    }
}
function choose4()
{
    if(r[correct]==r[4] && b[correct]==b[4] && g[correct]==g[4])
        {
            for(var i=0; i<6;i++)
                if(i!=4)
                    c[i].classList.add("fade");    
        }
    else{
        c[4].classList.add("fade");
    }
}
function choose5()
{
    if(r[correct]==r[5] && b[correct]==b[5] && g[correct]==g[5])
        {
            for(var i=0; i<6;i++)
                if(i!=5)
                    c[i].classList.add("fade");    
        }
    else{
        c[5].classList.add("fade");
    }
}

    
    c[0].addEventListener("click",choose);
    c[1].addEventListener("click",choose1);
    c[2].addEventListener("click",choose2);
    c[3].addEventListener("click",choose3);
    c[4].addEventListener("click",choose4);
    c[5].addEventListener("click",choose5);


    var r = [6];
    var g = [6];
    var b = [6];


EASY.addEventListener("click",easy);
HARD.addEventListener("click",hard);
NEW.addEventListener("click",check);
TRY.addEventListener("click",again);



function check()
{
    if(flag==0)
        {
            easy();
        }
    else
        {
            hard();
        }
}


function easy()
{
    flag = 0;
    EASY.classList.add("btn-primary");
    HARD.classList.remove("btn-primary");
    
    
    for(var i=0; i<6; i++)
        {
            c[i].classList.remove("fade")
        }

    var titlecolor = document.querySelector(".title");
    var x,y,z;
    x =  Math.random()*256;
    y =  Math.random()*256;
    z =  Math.random()*256;
    titlecolor.style.background = "rgb("+ x + "," + y + "," + z + ")";


    for(var i = 0; i<6 ; i++)
    {
        var temp = Math.random()*1000;
        temp = Math.round(temp);
        if(temp>256)
        {
            while(temp>256)
            {
                temp = Math.random()*1000;
                temp = Math.round(temp);
            }
            r[i] =temp;
        }
        else
        {
            r[i] = temp;
        }

        temp = Math.random()*1000;
        temp = Math.round(temp);
        if(temp>256)
        {
            while(temp>256)
            {
                temp = Math.random()*1000;
                temp = Math.round(temp);
            }
            b[i] = temp;
        }
        else
        {
            b[i] = temp;
        }

        temp = Math.random()*1000;
        temp = Math.round(temp);
        if(temp>256)
        {
            while(temp>256)
            {
                temp = Math.random()*1000;
                temp = Math.round(temp);
            }
            g[i] = temp;
        }
        else
        {
            g[i] = temp;
        }
    }

    c[0].style.background = "rgb("+ r[0] + "," + b[0] + "," + g[0] + ")";
    c[1].style.background = "rgb("+ r[1] + "," + b[1] + "," + g[1] + ")";
    c[2].style.background = "rgb("+ r[2] + "," + b[2] + "," + g[2] + ")";
    c[3].style.background = "rgb("+ r[3] + "," + b[3] + "," + g[3] + ")";
    c[4].style.background = "rgb("+ r[4] + "," + b[4] + "," + g[4] + ")";
    c[5].style.background = "rgb("+ r[5] + "," + b[5] + "," + g[5] + ")";
    
    correct = Math.random()*10;
    correct = Math.round(correct);
    while(correct>5)
    {
        correct = Math.random()*10;
        correct = Math.round(correct);
    }
    var colcode = document.querySelector(".COLCODE");
    colcode.textContent = "(" + r[correct] + ", " + b[correct] + ", " + g[correct] + ")";

}

//hard

function hard()
{
    flag = 1;
    HARD.classList.add("btn-primary");
    EASY.classList.remove("btn-primary");
    
    for(var i=0; i<6; i++)
        {
            c[i].classList.remove("fade")
        }

    var titlecolor = document.querySelector(".title");
    var x,y,z;
    x =  Math.random()*256;
    y =  Math.random()*256;
    z =  Math.random()*256;
    titlecolor.style.background = "rgb("+ x + "," + y + "," + z + ")";
    
    var selector;
    selector = Math.random()*100;
    
    for(var i = 0; i<6 ; i++)
    {
        var temp = (Math.random()*40)+selector;
        temp = Math.round(temp);
            r[i] = temp;

                temp = (Math.random()*40)+selector;
                temp = Math.round(temp);
            b[i] = temp;

                temp = (Math.random()*40)+selector;
                temp = Math.round(temp);
            g[i] = temp;
    }

    c[0].style.background = "rgb("+ r[0] + "," + b[0] + "," + g[0] + ")";
    c[1].style.background = "rgb("+ r[1] + "," + b[1] + "," + g[1] + ")";
    c[2].style.background = "rgb("+ r[2] + "," + b[2] + "," + g[2] + ")";
    c[3].style.background = "rgb("+ r[3] + "," + b[3] + "," + g[3] + ")";
    c[4].style.background = "rgb("+ r[4] + "," + b[4] + "," + g[4] + ")";
    c[5].style.background = "rgb("+ r[5] + "," + b[5] + "," + g[5] + ")";
    
    correct = Math.random()*10;
    correct = Math.round(correct);
    correct = Math.round(correct);
    correct = Math.round(correct);
    while(correct>5)
    {
        correct = Math.random()*10;
        correct = Math.round(correct);
    }
    var colcode = document.querySelector(".COLCODE");
    colcode.textContent = "(" + r[correct] + ", " + b[correct] + ", " + g[correct] + ")";

}



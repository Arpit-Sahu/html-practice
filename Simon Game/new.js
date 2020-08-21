console.log("hello");

var pattern = [];
var colors = ["green", "red", "yellow", "blue"];
var clickedPattern = [];
var level = 0;
var flag = 0;
var n = 0;

function increaseLevel()
{
    var temp = level+1;
    $(".TITLE").text("LEVEL " + temp);
    patt();
}

while(n === 0)
    {
        $("body").on("keypress", function(event){
            if(event.which === 13)
                {
                    $(".TITLE").text("LEVEL 1");
                    clickedPattern = [];
                    patt();
                }
        });
        n++;
    }

function patt()
{
    level++;
    var num = Math.floor((Math.random() * 3) + 1);
    pattern.push(colors[num]);
    playsound(colors[num]);
}

function playsound(col)
{
    setTimeout(function(){
        var sound = new Howl({
            src: ["sounds/" + col + ".mp3"]
        });
        sound.play();
        animate(col);
    }, 1000);
}

function animate(col)
{
    $("#" + col).fadeOut(100).fadeIn(100);
}

$(".C").on("click", function(){
    console.log("clicked");
    var clicked = $(this).attr("id");
    picked(clicked);
    clickedPattern.push(clicked);
    if(clickedPattern.length === level){
        checkAnswer();
    }
});


function picked(col)
{
    var sound = new Howl({
            src: ["sounds/" + col + ".mp3"]
        });
        sound.play();
    $("#" + col).fadeOut(100).fadeIn(100);
}

function checkAnswer()
{
    if(clickedPattern.length === pattern.length)
        {
            for(var i=0 ; i<pattern.length ; i++)
                {
                    if(clickedPattern[i] != pattern[i])
                        {
                            flag = 1;
                            break;
                        }                 
                }
            if(flag === 0)
                {
                    clickedPattern = [];
                    increaseLevel();
                }
            else{
                gameover();
            }
        }
    else{
        gameover();
    }
}

function gameover()
{
    $(".TITLE").text("  GAME OVER ");
    $(".IMAGE").fadeIn().removeClass("HIDE");
    var sound = new Howl({
            src: ["sounds/wrong.mp3"]
        });
        sound.play();
    $("body").on("keypress", function(e){
        if(e.which === 32)
           {
                pattern = [];
                clickedPattern = [];
                level = 0;
                flag = 0;
                n=0;
                $(".IMAGE").fadeOut().addClass("HIDE");
                increaseLevel();
           }
    });
}




var name_ = document.getElementsByName("title");

var description_ = document.getElementsByName("description");

function load_pages(param)
{
    window.open("https://jjokerboxx.github.io/"+param+".html");
};

function click_fx(){
    if(document.getElementById('bodycolor').className =="black")
    {
        document.getElementById('bodycolor').className ="white";
    }
    else
    {
        document.getElementById('bodycolor').className ="black";
    }
    
};

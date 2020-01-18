
var name_ = document.getElementsByName("title");

var description_ = document.getElementsByName("description");

/*    생코 자바스크립트와 html의 분리 설명 + 이벤트 리스너 활용
var wbtn = document.getElementById('color_btn');
wbtn.addEventListener('click',function(){
    document.getElementById('bodycolot').className = "white";
})
*/  

function when_load(){
    
    clock();
    console.log("loaded!")
}



function load_pages(param)
{
    window.open("https://jjokerboxx.github.io/"+param);
}

function click_fx(){
    if(document.getElementById('bodycolor').className =="black")
    {
        document.getElementById('bodycolor').className ="white";
    }
    else
    {
        document.getElementById('bodycolor').className ="black";
    }
    
}

function clock(){

    var posttime = new Date().toLocaleString();
    var dates = document.getElementsByClassName("post date");
    for (let i = 0; i < dates.length; i++){
        dates[i].innerHTML = posttime;
        console.log("date updated!")
    }
    // document.getElementsByClassName("post date")[0].innerHTML = posttime;
    // document.getElementsByClassName("post date")[1].innerHTML = posttime;
    // document.getElementsByClassName("post date")[2].innerHTML = posttime;
    // document.getElementsByClassName("post date")[3].innerHTML = posttime;
        
    
}

function metadesc(){
    //파싱해야하나?
}


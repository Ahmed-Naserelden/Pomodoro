let mom = document.querySelector(".mo");
let second = document.querySelector(".s");
let minit = document.querySelector(".m");
let hour = document.querySelector(".h");

function clock(){
    if(bool){
        mom.textContent = +mom.textContent + 1;
        if(+mom.textContent < 10)
            mom.textContent = '0' + mom.textContent;
        if(mom.textContent == '10'){
            second.textContent =  +second.textContent + 1;
            if(+second.textContent < 10)
                second.textContent = '0' + second.textContent;
            mom.textContent = '00';
        }
        if(second.textContent == '60'){
            minit.textContent = +minit.textContent + 1;
            if(+minit.textContent < 10)
                minit.textContent = '0' + minit.textContent
            second.textContent = '00';
        }
        if(minit.textContent == '60'){
            hour.textContent = +hour.textContent + 1;
            if(+hour.textContent < 10)
                hour.textContent = '0' + hour.textContent
            minit.textContent = '00'
        }
    }else{
        return;
    }
}
let hander, bool = false;
let btn = document.querySelector("button");
btn.onclick = function(){
    if(bool){
        bool = false;
        btn.textContent = "Resum";
        btn.style.color = "green"
        btn.style.fontSize = "70px";
    }else{
        bool = true;
        btn.textContent = "Stop";
        btn.style.color = "brown";
        btn.style.fontSize = "75px";
    }
}   

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(bool){
            bool = false;
            btn.textContent = "Resum";
            btn.style.color = "green"
            btn.style.fontSize = "70px";
        }else{
            bool = true;
            btn.textContent = "Stop";
            btn.style.color = "brown";
            btn.style.fontSize = "75px";
        }
    }
}  
hander = setInterval(clock, 100);
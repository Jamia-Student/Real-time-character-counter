let text = document.getElementById("text");
let live = document.getElementById("livechar");
let rem = document.getElementById("remchar");
let btn = document.getElementById("btn");
let warning = document.getElementById("warning");

text.addEventListener("input",function(event){  
    live.textContent = text.value.length;
    if(text.value.length > 40){
        rem.style.color = "red";
    }
    if(text.value.length > 45){
        warning.textContent = "Limit about to exceed";
    }
    if(text.value.length < 45){
        warning.textContent = "";
    }
    if(text.value.length === 50){
        text.classList.remove("opacity-100");
        text.classList.add("opacity-50","pointer-event-none");
    }
    if(text.value.length < 50){
        text.classList.remove("opacity-50","pointer-event-none");
        text.classList.add("opacity-100");
    }
    rem.textContent = 50-text.value.length;
});

btn.onclick = function(){
    text.value = "";
    live.textContent = "0";
    rem.textContent = "0";
    warning.textContent = "";
};
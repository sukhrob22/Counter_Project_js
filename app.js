let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(bnt){
    bnt.addEventListener("click", function(e){
        const stlys = e.currentTarget.classList;
        if(stlys.contains("decrease")){
            count--
        }else if(stlys.contains("increase")){
            count++
        }else{
            count = 0
        }
        if( count < 0){
           value.style.color = "red"
        }else if( count > 0){
           value.style.color = "green"
        }else{
           value.style.color = "black"
        }
        value.textContent = count;
});
});

var time = 60;
let score = 0;
let hitenumber = 0;
function timer() {
    setInterval(function () {
        time--;
       if(time > 0){
        document.querySelector(".timer").textContent = time;
       }else{
        document.querySelector(".timer").innerHTML = "0"; 
          document.querySelector(".bottom").innerHTML = `Your Score ${score}`;

       }
    }, 1000)
}


function bubling() {
    let cluter = "";
    for (let i = 1; i < 155; i++) {
        let rn = Math.floor(Math.random() * 100)
        cluter += `<div class="buble">${rn}</div>`
        document.querySelector(".bottom").innerHTML = cluter
    }
}


function hite(){
    hitenumber = Math.floor(Math.random()*100)
document.querySelector("#hite").textContent = hitenumber;
}


function inscore(){
   score += 10;
   document.querySelector("#score").textContent = score
}



function bottoom(){
    document.querySelector(".bottom").addEventListener("click",function(dets){
    let nb = Number(dets.target.textContent);
      if(nb === hitenumber){
        inscore();
        hite();
      }
    })
}



bottoom();

inscore();
timer();
hite();
bubling();
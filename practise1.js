const p1score= document.querySelector("#p1score");
const p2score= document.querySelector("#p2score");
const p1display= document.querySelector("#p1display");
const p2display= document.querySelector("#p2display");
const reset = document.getElementById("reset")
const selectPmax = document.getElementById("toselect");

let pmax=4;
let isGameOver = false;
let p1Points = 0;
let p2Points = 0;

p1display.addEventListener("click", function(){
    if(!isGameOver){
        p1Points+=1;
        if(p1Points===pmax){
            isGameOver=true;
            p1score.classList.add("winner");       //using class selector
            p2score.classList.add("loser");     //using class selector
            p1display.disabled = true;
            p2display.disabled=true;
        }
        p1score.textContent=p1Points;
    }
});

p2display.addEventListener("click", function(){
    if(!isGameOver){
        p2Points+=1;
        if(p2Points===pmax){
            isGameOver=true;
            p2score.classList.add("winner");       
            p1score.classList.add("loser");
            p1display.disabled = true;   //applicable when using bulma frameword for css
            p2display.disabled=true;
        }
        p2score.textContent=p2Points;
    }
});

selectPmax.addEventListener("change", function(){           //change - canbe used while altering the element value by the user
    pmax = parseInt(this.value);         //this.value gives the string
    resett();                             //calling reset function
})

reset.addEventListener("click",resett)           //resett - passing the reference
                                                // resett() - executing it
function resett(){
    isGameOver=false;
    p1Points=0;
    p2Points=0;
    p1score.textContent=0;
    p2score.textContent=0;
    p1score.classList.remove("winner", "loser");  //it removes winner and loser whichever is present
    p2score.classList.remove("winner", "loser");
    p1display.disabled = false;
    p2display.disabled=false;
}
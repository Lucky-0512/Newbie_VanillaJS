const a =["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]     /// array for hexcode generation.
const sim = ["black", "white", "red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "gray", "silver", "gold", "cyan", "magenta", "lime", "teal", "aqua", "maroon", "olive", "navy", "indigo", "turquoise", "violet", "coral", "tan", "slate", "lavender", "beige", "salmon", "peach", "skyblue", "mint", "orchid", "plum", "crimson", "tomato", "darkred", "darkgreen", "darkblue", "darkgray", "lightgray", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumturquoise", "mediumvioletred", "midnightblue", "palegreen", "royalblue"]
// to generate some random hex codes.

let Hex= document.getElementById("Hex");
let simple = document.getElementById("simple");
let Main = document.getElementById("Main");
let bod = document.getElementById("source");


Hex.addEventListener("click",() =>{
    Main.addEventListener("click",() =>{
        let hex="";
        for(let i=0;i<6;i++){
            const ran =Math.floor(Math.random()*(a.length-1));
            hex+=a[ran];
    
        }
        let result = `#${hex}`
        Main.textContent =`CODE: ${result}`;
        bod.style.background = `${result}`;
        //console.log(result);

    })
})

simple.addEventListener("click",() =>{
    Main.addEventListener("click",() =>{
        let simp="";
        for(let i=0;i<sim.length;i++){
            const ran =Math.floor(Math.random()*(sim.length-1));
            simp=sim[ran];
    
        }
        let result_sim = `${simp}`
        Main.textContent =`CODE: ${result_sim}`;
        bod.style.background = `${result_sim}`;
        //console.log(result);

    document.getElementById("R").onclick = function() {
        bod.style.backgroundColor = "white";
        Main.textContent = "F L I P"

    }


    })


})

//console.log(a.length)

/// --------------------------------------------END OF THE COLOR FLIPPER ---------------------------------------------------

// Let's create a Simple Calculator using JS.

let result = 0;

let display="";

let panel = document.getElementById("panel");



//console.log(2**3)

function show(e){
    display+=String(e);
    panel.textContent = display;
    
}

function ans(){
    console.log(display)
    panel.textContent = eval(String(display));
}


function abs(){
    //console.log("akhygfywl");
    display = "";
    panel.textContent = display;

}

function back(){
    if (display.length >0){
        let l =display.split("");
        l.pop();
        display = l.join("")
        panel.textContent = display
    }

    else{
        panel.textContent = ""
    }
}







// ---------------------------------------- END OF THE CALCULATOR PROGRAM ----------------------------------------------------

let count = 0;

let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

inc.onclick = function (){
    count = count+1;
    //console.log(count)
    number.textContent =count;
}

dec.onclick = function (){
    if (count === 0){
        number.textContent = count;

    }

    else{
        count--;
    number.textContent = count;


    }

    
}

reset.onclick = () =>{
    count = 0;
    number.textContent = count
}



/**************************************THE ROCK PAPER AND SCISSORS GAME ************************************************/


// the base choice buittons.
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissor");


// the display attempts
let attempt_user = document.getElementById("user");
let attempt_computer = document.getElementById("comp");
let emoji = document.getElementById("emo")

// scores count
let user_score = document.getElementById("score_user");
let score_PC = document.getElementById("score_PC");
let attempts_no = document.getElementById("attempts_no");


/*rock.addEventListener("click",() =>{
    attempt_user.textContent = "ROCK";
    console.log("done")
})*/



//let arr =[rock,paper,scissors]

let arr =["ROCK","PAPER","SCISSOR"]
let close = document.getElementById("close_box");
let open = document.getElementById("game_window");
let panel_scores = document.getElementById("scores");

let attempts = 2;
let userscore = 0;
let computerscore = 0;



rock.addEventListener("click",() =>{
    if (attempts===0){
        if (userscore > computerscore){
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            console.log("you win");
            close.textContent =`YOU WIN !`;
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            attempts =0;
            
        }
        else if(userscore < computerscore){
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            close.textContent =`YOU LOSE !`;
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("you lose");
            attempts =0;
        }
        else{
            console.log("draw!");
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            close.textContent =`IT WAS A DRAW !`;
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            attempts =0;
        }
    
    }
    attempt_user.classList.add("attempt_user");
    attempt_user.textContent = "ROCK";
    attempt_user.style.textAlign = "center";
    attempt_user.style.fontSize = "large"
    console.log("done")
    let ran = Math.floor(Math.random()*(arr.length))

    console.log(arr[ran])
    if(arr[ran] == "ROCK"){
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "ROCK";
        emoji.textContent = "---";
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts = attempts-1;
        
    }

    else if(arr[ran] === "PAPER"){
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "PAPER";
        computerscore+=1;
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts = attempts-1;
        emoji.textContent = "comp: +1";

    }

    else{
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "SCISSOR";
        userscore+=1;
        //computerscore-=1;
        user_score.textContent = userscore;
        score_PC.textContent = computerscore;
        emoji.textContent = "user: +1";
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts = attempts-1;
    }

    

    
    
})

paper.addEventListener("click", ()=>{
    if (attempts===0){
        if (userscore > computerscore){
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            console.log("you win");
            close.textContent ="YOU WIN !";
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("you win");
            attempts =0;
            
        }
        else if(userscore < computerscore){
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            close.textContent ="YOU LOSE !";
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("you lose");
            attempts =0;
        }
        else{
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            close.textContent ="IT WAS A DRAW !";
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("draw!");
            attempts =0;
        }
    
    }

    attempt_user.textContent = "PAPER";
    attempt_user.style.textAlign = "center";
    attempt_user.style.fontSize = "large";
    let ran = Math.floor(Math.random()*(arr.length))

    console.log(arr[ran])
    if(arr[ran] == "ROCK"){
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "ROCK";
        userscore+=1;
        //computerscore-=1;
        user_score.textContent = userscore;
        score_PC.textContent = computerscore;
        emoji.textContent = "user: +1";
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts = attempts-1;

    }

    else if(arr[ran] === "PAPER"){
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "PAPER";
        emoji.textContent = "---";
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts = attempts-1;

    }

    else{
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "SCISSOR";
        computerscore+=1;
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        emoji.textContent = "comp: +1";
        attempts = attempts-1;

    }

    

})

scissors.addEventListener("click", ()=>{
    if (attempts===0){
        if (userscore > computerscore){
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            console.log("you win");
            close.textContent ="YOU WIN !";
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("you win");
            attempts =0;
            
        }
        else if(userscore < computerscore){
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            close.textContent ="YOU LOSE !";
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("you lose");
            attempts =0;
        }
        else{
            open.style.visibility = "hidden";
            close.style.visibility = "visible";
            close.textContent ="IT WAS A DRAW !";
            panel_scores.textContent = `your score: ${userscore} and comp score: ${computerscore}`
            console.log("draw!");
            attempts =0;
        }
    
    }
    attempt_user.style.alignItems = "center"
    attempt_user.style.fontSize = "large"
    attempt_user.textContent = "SCISSOR";
    let ran = Math.floor(Math.random()*(arr.length))

    console.log(arr[ran])
    if(arr[ran] == "ROCK"){
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "ROCK";
        computerscore+=1;
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        emoji.textContent = "comp: +1";
        attempts = attempts-1;


    }

    else if(arr[ran] === "PAPER"){
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "PAPER";
        userscore+=1;
        //computerscore-=1;
        user_score.textContent = userscore;
        score_PC.textContent = computerscore;
        emoji.textContent = "user: +1";
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts = attempts-1;

    }

    else{
        attempt_computer.style.textAlign = "center";
        attempt_computer.style.fontSize = "large";
        attempt_computer.textContent = "SCISSOR";
        emoji.textContent = "---";
        score_PC.textContent = computerscore;
        user_score.textContent = userscore;
        attempts_no.textContent = attempts;
        attempts-=1;
    }

    

})

document.getElementById("again").onclick = function(){
    open.style.visibility = "visible";
    close.style.visibility = "hidden";
}




/**************************************END OF THE ROCK PAPER SCISSOR PROGRAM************************* */

let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let questions = document.querySelectorAll(".Q");

for (let i=0;i<questions.length;i++){
    questions[i].addEventListener("click",() =>{
        questions[i].classList.toggle("do");
        plus[i].classList.toggle("pos");
        minus[i].classList.toggle("neg")
    })
}







    

    

    

    

    














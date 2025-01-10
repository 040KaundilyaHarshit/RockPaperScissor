let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice"); //this to check kis choice par hamara mouse hover kar rha hai abhi
//choices me ab teen div choice store ho jayega jo choices div k ander hai yaad aaya n

//hur ek div k uper ek event listner ko add karenge jo hamare click event ko track karenge

//step1)sare choices kliye hur ek choice ko hm select karenge
//step2) hur ek choice kliye ham add karenge usspar ek event listner jo hamre click event ko track karega jiske basis par arrow wala function kaam karega

choices.forEach((choice) =>{
    console.log(choice); //print the choice div matlab kaun sa choice kis div se hai,jaise hi hover karoge waise hi class print hoga
    choice.addEventListener("click",() =>{
        const userChoiceId=choice.getAttribute("id");
        //eventListner add krne ka mtlb jaise hi ye event hoga uska id aa jayega hamare paas
        //console.log("choice was clicked",userChoiceId);  // jaise hi hover karoge id and ye  user ka choice print ho jayega
        playGame(userChoiceId);
    });
});
//yahan ka choices and choice html wala nhi hai
//uper k function me user ka choice le liye now playGame finction me computer ka random choice generate karwayenge and compare kark score batayenge
//that's why we are passing userChoiceId here in function playGame

const playGame=(userChoice) => {
   console.log("user choice= ",userChoice);

   //Generate the computer choice and for this create a function 
   //hur kaam kliye function banane ko modular way of programming kahte hai and these functions will be reusable function
   const compChoice=genCompChoice();
   console.log("comp choice= ",compChoice);

   if(userChoice===compChoice)
   {
    //Draw so create a function for it
    drawGame();
   }
   else {
    let userWin=true;
    if(userChoice==='rock'){
        //so compChoice will be scissors,paper
        userWin=compChoice=="paper" ? false:true;
    }
    else if(userChoice==="paper"){

        userWin=compChoice==="scissors" ? false:true;
    }
    else{
        userWin=compChoice==="rock" ? false:true;
    }
    showWinnner(userWin,userChoice,compChoice);
   }

};

const genCompChoice =()=>
{
    //userId rock paper scissor ke form me tha so comp ka id bhi usssi form mr store kar diye
    const options=["rock","paper","scissors"];
    //Math is class in js which take any random number between 0 to 1
    const randIndex=Math.floor(Math.random()*3); //jitna tak number chahiye ussey ek jyada number se multiply kar dijiye
    return options[randIndex];
}

const msg=document.querySelector("#msg"); //al use nhi kiye kyunki ek hi paragraph hai
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const drawGame=()=>{
    userScore++;compScore++;
    userScorePara.innerText=userScore;
    compScorePara.innerText=compScore;
    console.log("Game was Draw");
    msg.innerText="Match Draw,Play Again";
    msg.style.backgroundColor="cornflowerblue";
}


const showWinnner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!!");
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log(`You lose! Comp ${compChoice} beats ${userChoice}` );
        msg.innerText="You lose :(";
        msg.style.backgroundColor="Red";
    }
}

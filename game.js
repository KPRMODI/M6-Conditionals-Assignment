let randomNumber = Math.floor(Math.random() * 10) + 1;
let correctnumber = false
let userGuess;
let attempts = 0;
console.log(randomNumber)

userGuess = Number(prompt("Guess a number between 1 and 10, or type 999 to exit: ")); 

while (correctnumber != true){
    attempts += 1
    if (userGuess == 999){
        alert('You have exited the game'); 
        break;
    }
    else if (userGuess == randomNumber){
        alert(`Congratulations, you've guessed the number in ${attempts} tries!`); 
        correctnumber = true
        break
    }
    else if (userGuess < randomNumber){
        alert("Too Low! Try Again!")
        userGuess = Number(prompt("Guess a number between 1 and 10, or type 999 to exit: ")); 
    }
    else if (userGuess > randomNumber){
        alert("Too High! Try Again")
        userGuess = Number(prompt("Guess a number between 1 and 10, or type 999 to exit: ")); 
    }
    else{
        alert("Wrong input, please try again")
        userGuess = Number(prompt("Guess a number between 1 and 10, or type 999 to exit: ")); 
    }
}
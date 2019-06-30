//Create object with the info of the cities
var cities = [
    { name: "paris", image: "url('assets/images/paris.jpg')" },
    { name: "berlin", image: "url('assets/images/berlin.jpg')" },
    { name: "madrid", image: "url('assets/images/madrid.jpg')" },
    { name: "sydney", image: "url('assets/images/sydney.jpg')" },
    { name: "london", image: "url('assets/images/london.jpg')" },
    { name: "rome", image: "url('assets/images/rome.jpg')" },
    { name: "washington", image: "url('assets/images/washington.jpg')" },
    { name: "normandy", image: "url('assets/images/normandy.jpg')" },
    { name: "athens", image: "url('assets/images/athens.jpg')" },
    { name: "moscow", image: "url('assets/images/moscow.jpg')" },
    { name: "petra", image: "url('assets/images/petra.jpg')" },
    { name: "vatican", image: "url('assets/images/vatican.jpg')" },
    { name: "barcelona", image: "url('assets/images/barcelona.jpg')" },
    { name: "agra", image: "url('assets/images/agra.jpg')" },
    { name: "beijing", image: "url('assets/images/beijing.jpg')" },
    { name: "giza", image: "url('assets/images/giza.jpg')" }
]
//create array with the letters options
var Letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
//create an empty array to store the letters guessed
var lettersGuessed = [];
//create varible letter left
lettersLeft = 0;
//create control variable to determinate if the letter was pressed
var found = false;
//create variable to store the wins
var wins = 0;
//create variable to store the looses
var looses = 0;
//create variable to store the guesses left
var guessesLeft = 0;
//create empty array to store the guesses to print
var guessesToPrint = [];
//create variable to the city to guess and assign an random city in
var cityToGuess = cities[Math.floor(Math.random() * cities.length)];
//asign the city image to the background
document.getElementById('backImage').style.background = cityToGuess.image;
//assign le length of the city to lettersleft
lettersLeft = cityToGuess.name.length;
//function reset clean all the info to start a new game
function reset() {
    lettersGuessed = [];
    guessesToPrint = [];
    cityToGuess = cities[Math.floor(Math.random() * cities.length)];
    document.getElementById('backImage').style.background = cityToGuess.image;
    lettersLeft = cityToGuess.name.length;
    print();
    createSpaces();
    guessesLeft = Math.round(cityToGuess.name.length * 1.5);
}
//function print to show the info in the site
function print() {
    document.getElementById("cityToGuess").innerHTML = guessesToPrint;
    document.getElementById("lettersGuessed").innerHTML = "Letters Guessed " + lettersGuessed;
    document.getElementById("results").innerHTML = "Guesses Left " + guessesLeft + " | Wins " + wins + " | Looses " + looses;
}
//call the function create spaces
createSpaces();

//function create spaces to fill the guesses to print with the spaces of the city to guess
function createSpaces() {
    for (var i = 0; i < cityToGuess.name.length; i++) {
        guessesToPrint.push("_");
    }
    console.log(guessesToPrint);
    print();
}

console.log(cityToGuess.name);

//calculate the guesses left depending the long of the word
guessesLeft = Math.round(cityToGuess.name.length * 1.5);
//call print function
print();
document.onkeyup = function (event) {
    //assign to the var keypressed the event of the jey that was pressed
    var keyPressed = event.key;
    //change the keypressed to lower case
    keyPressed = keyPressed.toLocaleLowerCase();

    //Set variable found to false to reset if last time the letter was found in the guesses array 
    found = false;

    //Loop for letters array to only allow click letters
    for (var i = 0; i < Letters.length; i++) {

        //Check if the key pressed is on the computer letter array to only run 
        //the code when the key clicked is in the computerLetters array
        if (keyPressed === Letters[i]) {
            //log in console the key pressed if is in the array 
            console.log("check if the pressed is on the letter array " + keyPressed);

            //Loop for letters guesses array 
            for (var j = 0; j < lettersGuessed.length; j++) {
                //Check if the letter is in the letters already guesses to not allow repeat letters
                if (keyPressed === lettersGuessed[j]) {
                    //Message to alert that this letter was already clicked
                    alert("You already select the letter " + keyPressed + " Please select another letter");
                    //Set found to true to identify that this letter was already clicked
                    found = true;
                }
            }
            //Check if found is false this mean that the letter was not clicked before 
            if (found == false) {
                //substract one to guesses left
                guessesLeft--;
                //add the key pressed to the lettersguessed array
                lettersGuessed.push(keyPressed);
                //check letter for letter the word
                for (var k = 0; k < cityToGuess.name.length; k++) {
                    //check if the key pressed is equal to the letter in the position in the word
                    if (cityToGuess.name.charAt(k) === keyPressed) {
                        //log in console that the key pressed is in the word
                        console.log(keyPressed + " is in the word")
                        //change the key pressend in the array in the position find the letter
                        guessesToPrint[k] = keyPressed;
                        //substract one to letter left to find
                        lettersLeft--;
                    }
                    //check if letters left = 0 means the already find all the letters and win
                    if (lettersLeft === 0) {
                        //add 1 to looses
                        wins++;
                        //alert mensage that win
                        alert("You win");
                        //call function reset
                        reset();
                        //log in console that you lost
                        console.log("You Win");
                        
                    }
                    //check if guesses left = 0 mean that no more guesses and loose
                    if (guessesLeft === 0) {
                        //add 1 to looses
                        looses = looses + 1;
                        //log in console that you lost
                        console.log("You Lost");
                        //alert mensage that win
                        alert("You Lost");
                        //call function reset
                        reset();
                        


                    }


                }



            }


            console.log(lettersGuessed);
            console.log(guessesToPrint);
            console.log("Letters left " + lettersLeft);
            console.log("Guesses Left " + guessesLeft);
            print();


        }
    }
}
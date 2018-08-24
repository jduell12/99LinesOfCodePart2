//Array that holds 5 friends' names
let friends = ["Alex", "Jeremy", "Andrea", "Michelle", "Sam"];

//Puts button in the body of the HTML that says Sing!
let body = document.body;
let btn = document.createElement("button");
btn.innerText = "Sing!";
body.appendChild(btn);

//Goes through each name in the array friends and console.log a song inputting each name in the song once the button Sing! is clicked once

for (let i = 0; i < friends.length; i++){
    let name = friends[i];
    for (let x = 99; x > 0; x--){
        if (x > 1){
        console.log(x + " lines of code in the file, " + x  + " lines of code; " + name + " strikes one out, clears it all out, " + (x-1) + " lines of code in the file");
        } else {
            console.log(x + " lines of code in the file, " + x  + " lines of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }
};
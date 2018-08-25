//Array that holds 5 friends' names
let friends = ["Alex", "Jeremy", "Andrea", "Michelle", "Sam"];

//Puts button in the body of the HTML that says Sing!
let body = document.body;
let btn = document.createElement("button");
btn.innerText = "Sing!";
body.appendChild(btn);

//Creating a div with class name of friend for each friend
let alexDiv = document.createElement('div');
alexDiv.className = 'friend';
body.appendChild(alexDiv);

let jeremyDiv = document.createElement('div');
jeremyDiv.className = 'friend';
body.appendChild(jeremyDiv);

let andreaDiv = document.createElement('div');
andreaDiv.className = 'friend';
body.appendChild(andreaDiv);

let michelleDiv = document.createElement('div');
michelleDiv.className = 'friend';
body.appendChild(michelleDiv);

let samDiv = document.createElement('div');
samDiv.className = 'friend';
body.appendChild(samDiv);

//Creating a header that lists the friend in their respective div 
let h3 = document.createElement('h3');
let h3Txt = document.createTextNode("Alex is ready to sing. Just click the button.");
h3.appendChild(h3Txt);
alexDiv.appendChild(h3);

let jH3 = document.createElement('h3');
let jTxt = document.createTextNode("Jeremy will show you his amazing singing voice! Just click the button");
jH3.appendChild(jTxt);
jeremyDiv.appendChild(jH3);

let aH3 = document.createElement('h3');
let aTxt = document.createTextNode("Andrea is ready to sing. Just click the button.");
aH3.appendChild(aTxt);
andreaDiv.appendChild(aH3);

let mH3 = document.createElement('h3');
let mTxt = document.createTextNode("Michelle is ready. Just click the button.");
mH3.appendChild(mTxt);
michelleDiv.appendChild(mH3);

let sH3 = document.createElement('h3');
let sTxt = document.createTextNode("Sam can't sing very well. Just click the button.");
sH3.appendChild(sTxt);
samDiv.appendChild(sH3);

//Goes through each name in the array friends and console.log a song inputting each name in the song once the button Sing! is clicked once
btn.addEventListener("click", function () {
    for (let i = 0; i < friends.length; i++) {
        let name = friends[i];
        for (let x = 99; x > 0; x--) {
            if (x > 1) {
                console.log(x + " lines of code in the file, " + x + " lines of code; " + name + " strikes one out, clears it all out, " + (x - 1) + " lines of code in the file");
            } else {
                console.log(x + " lines of code in the file, " + x + " lines of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    }
});

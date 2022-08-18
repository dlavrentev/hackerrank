// Day 2: Conditional Statements: If-Else

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = "A";
    } else if (score > 20 && score <= 25) {
        grade = "B";
    } else if (score > 15 && score <= 20) {
        grade = "C";
    } else if (score > 10 && score <= 15) {
        grade = "D";
    }  else if (score > 5 && score <= 10) {
        grade = "E";
    } else {
        grade = "F";
    }
    return grade;
}


// Day 2: Condition Statements: Switch

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
  case ("a" || "e" || "i" || "o" || "u"):
    letter = "A";
    break;
  case ("b" || "c" || "d" || "f" || "g"):
    letter = "B";
    break;
  case ("h" || "j" || "k" || "l" || "m"):
    letter = "C";
    break;
  case ("z" || "p" || "q" || "r" || "s" || "t" || "v" || "w" || "x" || "y" || "n"):
    letter = "D";
    break;
}
    return letter;
}

// Day 2: Loops 

function vowelsAndConsonants(s) {
    
    // vowels
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i).match(/[aeiou]/)) {
            console.log(s.charAt(i));
        }
    }
    //consonant
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i).match(/[^aeiou]/)) {
            console.log(s.charAt(i));
        }
    }
    
    
    
}


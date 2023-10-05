function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }else if (input == "by") {
        return "Talk to you later!";
    } 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } 
    else if (input == "bye") {
        return "Talk to you later!";
    } 
    else if (input == "namaste") {
        return "namaste sir";
    } 
    else if (input == "hi") {
        return "hi sir please enter your name";
    } 
    else if (input == "hii") {
        return "hi sir please enter your name";
    } 
    else if (input == "good morning") {
        return "good morning sir";
    } 
    else if (input == "good afternoon") {
        return "good after noon sir";
    } 
    else if (input == "good night") {
        return "good night sir sweet dream";
    } 
    else if (input == "system") {
        return "SYSTEM.........SYSYTEM.........SYSTEM";
    } 
    else if (input == "jai shree ram") {
        return "jai mahakak";
    }
    else if (input == "radhe-radhe") {
        return "krisna-radhe"; 
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}

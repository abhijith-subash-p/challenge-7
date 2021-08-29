(function () {

    //random Number generator
    const random = Math.floor((Math.random() * 3));
    console.log(random);

    var option_1 = [1, 2, 3];
    var option_2 = ["2X10 6", "3X10 8", "5X10 6"];
    var option_3 = [6, 7, 8];
   
    //function constructor
    var questionData = function (question, option, answer) {
        this.question = question;
        this.option = option;
        this.answer = answer;
    }

    questionData.prototype.showQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.option.length; i++){
            console.log(`${i+1})  ${this.option[i]}`);
        }
    }

    questionData.prototype.checkAnswer = function(answer){
        if ( this.option[answer - 1] === this.answer) {

            console.log("Correct answer is  " + this.option[answer - 1]);
        } else {
            console.log("Wrong Answer ...!");
        }
    }

    
    var question_1 = new questionData("Select correct answer 1+2 ?", option_1, 3);
    var question_2 = new questionData("Speed of light ?", option_2, "3X10 8");
    var question_3 = new questionData("How many colours in rainbow ?", option_3, 7);

    var Questions = [question_1, question_2, question_3];

    Questions[random].showQuestion();

    var ans = prompt("Enter the number correspond to the correct Answer..");

    Questions[random].checkAnswer(ans);
    
})();
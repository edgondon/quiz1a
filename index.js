const STORE = [ 
    `<h3>Who was the first Roman Emperor?</h3>
    <fieldset>
    <legend> Question 1</legend>
    <label>
        <!--Answers container-->
        <input type="radio" name="option" >
        <span> a.) Julius Caesar </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> b.) Mark Antony </span>
    </label>
    <label>
        <input type="radio" name="option" class="yes" >
        <span class="yep"> c.) Augustus </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> d.) Cleopatra </span>
    </label>
    </fieldset>`,

    `<h3>Who was the longest serving Roman Emperor?</h3>
    <fieldset>
    <legend> Question 2</legend>
    <label>
        <!--Answers container-->
        <input type="radio" name="option" class="yes" >
        <span> a.) Augustus </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> b.) Trajan </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> c.) Ronaldo </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> d.) Constantine </span>
    </label>
    </fieldset>`





];


const feeder = [
    
    `<!--Feedback Section-->
    <section class="correct-feedback-page">
      <div style="width:100%; height:400px;">
        <h2> Correct Answer</h2>
        <a href="end.html" class="button" role="start-button"> Next Question</a>
      </div>
    </section>`,

    
    `<section class="incorrect-feedback-page">
      <div style="width:100%;height:400px;">
       <h2>Incorrect Answer. The answer is "nononon"</h2>
      <a href="end.html" class="button" role="start-button">   Proceed to Next Question..</a>
      </div>
    </section>`

  
];







function tally() {
let score = 0;
let query = 0;
};


function generateFeedback() {
    $("body.freed").replaceWith(feeder[0]);
    

};






// goes through the questions
function generateQuestion() {
    let i = 0;
    $("div.one").replaceWith(STORE[i]);
    console.log(`generateQuestion ran`);

};


function selectAnswer() {
    $("section.question-page").click(function (event) {
    console.log(`ANSWER IS SELECTED`);
    if ($('input[class=yes]').is(':checked')) {
        correct();
        
    }
    else {
        wrong();
    };
    });



};





function submitAnswer() {
    $("section.question-page").submit(function (event) {
    event.preventDefault();
    console.log(`SUBMIT ANSWER FUNCTION RAN`);
    

    });
};


function correct() {
    $("div.two").replaceWith(`
        <a href="feedbackYES.html" type="submit" class="button" role="start-button">          Submit</a>
        `);
        console.log('correct');

};

function wrong() {
    $("div.two").replaceWith(`
    <a href="feedbackNO.html" type="submit" class="button" role="start-button">          Submit</a>
    `);
        console.log('not correct');
};






function makeQuiz() {
selectAnswer();
generateQuestion();
tally();
submitAnswer();
}

$(makeQuiz);
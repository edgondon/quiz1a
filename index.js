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








function tally() {
let score = 0;
let query = 0;
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

function changeAnswer() {
    $("section.question-page").click(function (event) {
    
    if ($('input[class=reset-button]').is(':checked')) {
        location.reload();
        
    }
    else {
        console.log(`waiting for submit`);
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
        <input type="radio" type="submit" class="reset-button" role="unknown"><span> Reselect Answer </span>
        `);
        console.log('correct');

};

function wrong() {
    $("div.two").replaceWith(`
        <a href="feedbackNO.html" type="submit" class="button" role="start-button">          Submit</a>
        <input type="radio" type="submit" class="reset-button" role="unknown"><span> Reselect Answer </span>
        `);
        console.log('not correct');
};






function makeQuiz() {
selectAnswer();
changeAnswer();
generateQuestion();
tally();
submitAnswer();
}

$(makeQuiz);
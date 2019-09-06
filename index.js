const STORE = [ 
    `<h3>Who was the first Roman Emperor?</h3>
    <fieldset>
    <legend> Question 1</legend>
    <label>
        <!--Answers container-->
        <input type="radio" name="option" checked>
        <span> a.) Julius Caesar </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> b.) Mark Antony </span>
    </label>
    <label>
        <input type="radio" name="option" >
        <span> c.) Augustus </span>
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
        <input type="radio" name="option" checked>
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


// goes through the questions
function generateQuestion() {
    let i = 1;
    $("div.one").replaceWith(STORE[i]);
    console.log(`generateQuestion ran`);

};







generateQuestion();





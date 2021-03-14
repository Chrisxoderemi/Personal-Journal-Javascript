let pNode = document.createElement("p");
let addNote = document.querySelector(".addNote");
let articles = document.querySelectorAll('article');
let button = document.querySelector(".addNewNote");
let main = document.querySelector("main");
let counter=0;
let articleLength = articles.length;
let textNode = `you have ${counter + articleLength} note(s)`;
console.log(counter);
console.log(counter + articleLength);

window.addEventListener('load', () => {
    addNote.appendChild(pNode).innerText = textNode;
});

function prompter() {
    let title = prompt('Write your note');
    let bodyOfNote = prompt('Write body of note');
    return {title, bodyOfNote};
}

function noteCreator (titleOfNote, bodyOfNote) {
    let pNote = document.createElement("p");
    let h2Note = document.createElement('h2');
    let divNote = document.createElement('div');
    let articleNote = document.createElement('article');
    let title = titleOfNote;
    let body = bodyOfNote;

    h2Note.innerText = titleOfNote;
    pNote.innerText = bodyOfNote;

    divNote.appendChild(h2Note);
    divNote.appendChild(pNote);

    divNote.classList.add('left-align');
    h2Note.classList.add('left-align');

    articleNote.appendChild(divNote);

    main.insertBefore(articleNote, articles[0]);
}
button.addEventListener("click", () => {
    counter++;
    let {title, bodyOfNote} = prompter();

    // call function that creates and displays note using input
    noteCreator(title, bodyOfNote);
    pNode.textContent = `you have ${counter + articleLength} note(s)`
});

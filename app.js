//  Nicholas Osterfelt
//  Springboard Meme Generator Assessment 
//  3/15/2020

const form = document.querySelector('form');
const submitButton =form.querySelector('button');
const bottomArea = document.querySelector('.bottom')
let inputFields = form.querySelectorAll('input')

//form submission events.
submitButton.addEventListener('click', function(e){
    e.preventDefault();
    let inputFields = form.querySelectorAll('input')
    let src = inputFields.item(0).value;
    let top = inputFields.item(1).value;
    let bottom = inputFields.item(2).value;

    if(validImg(src))
    {
        const newMeme = makeNewMeme(src, top, bottom);

        bottomArea.append(newMeme);
    }
    
});

//removes parent container of delete button when clicked
function removeMeme(e){
    bottomArea.removeChild(e.target.parentElement);
}

//makes a meme container, and necessary children, based on img source, top text, and bottom text
function makeNewMeme(src, top, bottom){
    //container
    const newMeme = document.createElement('div');
    newMeme.className = 'memeBox';

    //img
    const memeImg = document.createElement('img');
    memeImg.src = src;

    //deleteButton
    const delButton = document.createElement('button');
    delButton.innerText = "X";
    delButton.className = "deleteButton"
    delButton.addEventListener('click', removeMeme);

    //topText
    const topText = document.createElement('p');
    topText.innerText = top;
    topText.className = "topMeme"

    //bottomText
    const bottomText = document.createElement('p');
    bottomText.innerText = bottom;
    bottomText.className = "bottomMeme";

    //attach children to container
    newMeme.append(memeImg);
    newMeme.append(bottomText);
    newMeme.append(topText);
    newMeme.append(delButton);

    return newMeme;
}
//checks if image is a valid url, and also does nothing if the source is left blank (to avoid adding empty useless divs).
function validImg(src){      
    if(src == ""){
        return false;
    }
    //thanks to StackOverflow for help on checking img input
    if(!(src.match(/\.(jpeg|jpg|gif|png)$/) != null))
    {
        alert("INVALID MEME IMG! \nREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!")
        return false;
    } 
    return true;
    
}

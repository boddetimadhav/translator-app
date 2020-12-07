var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input")
var txtOutput = document.querySelector("#txt-Output")
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){

return serverURL + "?" + "text=" + input;
}

// function errorHandler (error){
//     console.log("error occured", error);
//     alert("Something is wrong, Try Again after some time :( ")
// }
function clickHandler(){
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    })
    // .catch(errorHandler)
}
    
btnTranslate.addEventListener('click', clickHandler);

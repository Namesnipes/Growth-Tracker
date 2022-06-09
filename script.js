var homeButton = document.getElementById("homeButton")
var calendarButton = document.getElementById("calendarButton")
var journalButton = document.getElementById("journalButton")
var textboxSubmitButton = document.getElementById("textboxSubmitButton")

function goToHomePage(){
  title.textContent = "Home Page :D"
}

function goToCalendarPage(){
  title.textContent = "Calendar Page :D"
}

function goToJournalPage(){
  title.textContent = "Journal Page :D"
}

function saveTextBox(){
  var text = textbox.value
  console.log(text)
  setData(text)
}

function setData(data){
  browser.storage.local.set({
    text: data
  });
}

function getData(key,callback){
  var storageItem = browser.storage.local.get(key);
  storageItem.then((data) => {
    callback(data[key])
  })
  .catch((error) => {
    console.error(error)
  })
}

function updateTextBox(text){
  textbox.value = text
}

function pageLoaded(){
  getData("text",updateTextBox)
}



textboxSubmitButton.addEventListener("click", saveTextBox)
homeButton.addEventListener("click", goToHomePage)
calendarButton.addEventListener("click", goToCalendarPage)
journalButton.addEventListener("click", goToJournalPage)

document.addEventListener("DOMContentLoaded", pageLoaded);

window.addEventListener("unload", function(){
  console.log("bye")
})

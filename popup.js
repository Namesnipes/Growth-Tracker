const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var textboxSubmitButton = document.getElementById("journalSubmitButton")
var expandButton = document.getElementById("expandButton")

var title = document.getElementById("currentDayHeader")
var subtitle = document.getElementById("yearHeader")
var textbox = document.getElementById("notes")

var homePage = document.getElementById("HomeContent")

var dateString;
var yearNumber;

//SWITCH PAGES
function goToHomePage(){
  title.textContent = dateString + " - Home"
}

function goToCalendarPage(){
  title.textContent = dateString + " - Calendar"
  homePage.style.display = 'none'
}

function goToJournalPage(){
  title.textContent = dateString + " - Journal"
  homePage.style.display = 'none'

}


//DATA IO
function saveTextBox(){
  var text = textbox.value
  console.log("Saving: " + text)
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
    if(data[key] === undefined){
      console.log("No data is saved!!")
      callback("")
    } else {
      callback(data[key])
    }
  })
  .catch((error) => {
    console.error(error)
  })
}

//SETTERS
function updateTextBox(text){
  console.log("pu8tting in: " + text)
  textbox.value = text
}

function updateDate(){
  var now = new Date()
  var dateNumber = now.getDate()
  var monthString = month[now.getMonth()]
  yearNumber = now.getFullYear()

  dateString = monthString + " " + dateNumber + nth(dateNumber)

  title.textContent = dateString
  subtitle.textContent = yearNumber

}

function pageLoaded(){
  getData("text",updateTextBox)
  updateDate()
}

//HELPERS
function nth(i){
  if(i > 3 && i < 21) return "th"
  if(i % 10 == 3) return "rd"
  if(i % 10 == 2) return "nd"
  if(i % 10 == 1) return "st"
  return "th"
}


//EVENTS
textboxSubmitButton.addEventListener("click", saveTextBox)
expandButton.addEventListener("click", goToJournalPage)

document.addEventListener("DOMContentLoaded", pageLoaded);

window.addEventListener("unload", function(){
  console.log("bye")
})

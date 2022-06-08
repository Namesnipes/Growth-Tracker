var homeButton = document.getElementById("homeButton")
var calendarButton = document.getElementById("calendarButton")
var journalButton = document.getElementById("journalButton")
var title = document.getElementById("title")


function goToHomePage(){
  title.textContent = "Home Page :D"
}

function goToCalendarPage(){
  title.textContent = "Calendar Page :D"
}

function goToJournalPage(){
  title.textContent = "Journal Page :D"
}

homeButton.addEventListener("click", goToHomePage)
calendarButton.addEventListener("click", goToCalendarPage)
journalButton.addEventListener("click", goToJournalPage)

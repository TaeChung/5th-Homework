// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
    getHourCycles(h24)
    const arEG = new Intl.Locale("ar-EG");
  console.log(arEG.getHourCycles()); 
  
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
  
  //import dayjs from 'dayjs' // ES 2015
  dayjs().format()

  const textArea1 = document.querySelector("#textarea1")
const button1 = document.querySelector("#button1")

function clickAction1 () {
   // what was written on the textarea ?
   const textValue = textArea1.value

   console.log(textValue)

   // save the textValue to the local storage
   localStorage.setItem("9AM", textValue)
}

function loadData1 () {
    // grab the text value that was saved in the localstorage
    const textValue = localStorage.getItem("9AM")

    console.log(textValue)
    // change the value of the textarea to the saved text
    textArea1.value = textValue
}


button1.addEventListener("click", clickAction1)


loadData1()

// FOR 10AM

const textArea2 = document.querySelector("#textarea2")
const button2 = document.querySelector("#button2")

function clickAction2 () {
   // what was written on the textarea ?
   const textValue = textArea2.value

   console.log(textValue)

   // save the textValue to the local storage
   localStorage.setItem("10AM", textValue)
}

function loadData2 () {
    // grab the text value that was saved in the localstorage
    const textValue = localStorage.getItem("10AM")

    console.log(textValue)
    // change the value of the textarea to the saved text
    textArea2.value = textValue
}


button2.addEventListener("click", clickAction2)


loadData2()

for (i = 1; i <= 10; i++) {

    const textArea = document.querySelector("#textarea" + i)
    const button = document.querySelector("#button" + i)

    function clickAction(event) {
        const targetButton = event.currentTarget
        console.log(targetButton)
        // what was written on the textarea ?
        const textValue = textArea.value

        console.log(textValue)

        // save the textValue to the local storage
        localStorage.setItem(targetButton.id, textValue)
    }

    function loadData() {
        // grab the text value that was saved in the localstorage
        const textValue = localStorage.getItem("button" + i)

        console.log(textValue)
        // change the value of the textarea to the saved text
        textArea.value = textValue
    }


    button.addEventListener("click", clickAction)


    loadData()


}




let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let mydate =  document.getElementById('users');
let day = parseInt(mydate.value);
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar( currentYear,currentMonth,day);




function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentYear,currentMonth, day);
    console.log(currentYear);
}
jump();

function userDate(){
     mydate =  document.getElementById('users');
     day = parseInt(mydate.value);
    showCalendar(currentYear,currentMonth, day);
    
}


  function showCalendar( year,month,day) {

    let firstDay = (new Date(year, month,day))
    console.log(year);
    console.log(month);
    console.log(day);
  
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === day && year === year && month === month) {
                    cell.classList.add("cell_color");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }
        

        tbl.appendChild(row); // appending each row into calendar body.
    }

}
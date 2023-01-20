// Get current date
const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

// Select elements
const monthYear = document.querySelector("#month-year");
const prevMonth = document.querySelector("#prev-month");
const nextMonth = document.querySelector("#next-month");
const calendarDates = document.querySelector("#calendar-dates");

// Show current month and year
monthYear.innerHTML = getMonthName(month) + " " + year;

// Show calendar
showCalendar(month, year);

// Previous month button event
prevMonth.addEventListener("click", function() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  monthYear.innerHTML = getMonthName(month) + " " + year;
  showCalendar(month, year);
});

// Next month button event
nextMonth.addEventListener("click", function() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  monthYear.innerHTML = getMonthName(month) + " " + year;
  showCalendar(month, year);
});

// Show calendar
function showCalendar(month, year) {
  // Get first day of the month
  const firstDay = new Date(year, month).getUTCDay();

  // Get number of days in the month
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  // Clear previous dates
  calendarDates.innerHTML = "";

  // Create calendar rows
  let rows = "";
  for (let i = 0; i < 6; i++) {
    rows += "<tr>";
    for (let j = 0; j < 7; j++) {
      rows += "<td></td>";
    }
    rows += "</tr>";
  }
  calendarDates.innerHTML = rows;

  // Add dates to calendar
  let date = 1;
  let cells = document.querySelectorAll("#calendar-dates td");
  for (let i = firstDay; i < cells.length; i++) {
    if (date <= daysInMonth) {
      cells[i].innerHTML = date;
      // Check if today's date
      if (date === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        cells[i].classList.add("today");
      }
      date++;
    }
  }
}


// Get month name
function getMonthName(month) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  return monthNames[month];
}

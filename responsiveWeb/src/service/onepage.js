// nav bar
$(function () {
  $("nav a").click(function (e) {
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
  });
});

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.onload = () => {
  for (var i = 0; i <= 3; i++) {
    readTextFile("./osirase.txt");
  }
};
// text file read
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        add_row(allText);
      }
    }
  };
  rawFile.send(null);
}
// row add
function add_row(messageText) {
  let my_tbody = document.getElementById("my-tbody");
  var row = my_tbody.insertRow(my_tbody.rows.length);
  var cell = row.insertCell(0);
  cell.innerHTML = messageText;
}

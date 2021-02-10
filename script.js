// Generating JavaScript random number

function getRandomNumberBetween(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function getRandomNumber() {
  var start = document.getElementsByClassName("start")[0].value;
  var end = document.getElementsByClassName("end")[0].value;

  if (start == "" && end == "") {
    alert("Please enter Min and Max !");
  } else if (start == "") {
    alert("Please enter Min !");
  } else if (end == "") {
    alert("Please enter Max !");
  } else {
    document.getElementsByClassName(
      "number"
    )[0].innerHTML = getRandomNumberBetween(parseInt(start), parseInt(end));
  }
}

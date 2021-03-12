function decrement() {
  var n = parseInt(document.getElementById("number").innerHTML);
  if (n == 10) {
    $("#btn3").attr("disabled", false);
  }
  if (n == 0) {
    $("#btn1").attr("disabled", true);
  } else {
    n = n - 1;
    oddEven(n);
    document.getElementById("number").innerHTML = n;
    if (n == 0) {
      $("#btn1").attr("disabled", true);
    }
  }
}

function increment() {
  var n = parseInt(document.getElementById("number").innerHTML);
  if (n == 0) {
    $("#btn1").attr("disabled", false);
  }

  $("#btn3").attr("disabled", false);
  n = n + 1;
  oddEven(n);
  document.getElementById("number").innerHTML = n;
  if (n == 10) {
    $("#btn3").attr("disabled", true);
  }
}

function reset() {
  var n = parseInt(document.getElementById("number").innerHTML);
  n = 0;
  document.getElementById("number").innerHTML = n;
  $("#btn1").attr("disabled", false);
  $("#btn3").attr("disabled", false);
  $("body").css({ "background-color": "#82C4F9" });
  $("#number").css("color", "white");
}

function oddEven(n) {
  if (n % 2 == 0) {
    console.log("testing");
    $("body").css({ "background-color": "#82C4F9" });
    $("#number").css("color", "white");
  } else {
    $("body").css({ "background-color": "grey" });
    $("#number").css("color", "red");
  }
}

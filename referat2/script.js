let racun = "0";
let currentSystem = "dec"; //default

/*$(".stevilo").on("click", function () {
  if (racun === "0") {
    racun = "";
  }
  racun += $(this).text();
  update_screen();
});*/

$(".stevilo").on("click", function () {
  let unetiBroj = $(this).text();

  if (racun === "0") {
    racun = "";
  }

  racun += unetiBroj;
  if (isNumberInCurrentSystem(unetiBroj)) {
    //racun += unetiBroj;
    update_screen();
  } else {
    alert(
      `Uneti broj ${unetiBroj} nije u trenutnom sistemu (${currentSystem}).`
    );
    racun = ""; // Postavljanje celokupnog izraza na prazan string
  }
});

$(".operator").on("click", function () {
  if (racun === "0") {
    racun = $(this).text();
    update_screen();
  } else if (/[0-9()]/.test(racun.charAt(racun.length - 1))) {
    racun += $(this).text();
    update_screen();
  }
});

$(".reset").on("click", function () {
  racun = "0";
  update_screen();
});

$(".koren").on("click", function () {
  if (racun === "0") {
    racun = "Math.sqrt(";
    update_screen();
  } else {
    racun += "Math.sqrt(";
    update_screen();
  }
});

$(".racunaj").on("click", function () {
  let result = eval(racun);
  racun = result;
  update_screen();
});

function update_screen() {
  $("p").text(racun);
}

$(document).ready(function () {
  $(".dodatniMenu").hide();
});

$(".dodatno").click(function () {
  $(".dodatniMenu").toggle();
});

///////////////////////////////

// Dogodek za gumb "P"
$(".change").on("click", function () {
  $(".naravnaSt, .logOp").toggle();
});

//Sprememba stevislekga sistema
$(".bin").click(function () {
  currentSystem = "bin";
  updateScreen(currentSystem);
  console.log("binarni sistem");
});

$(".oct").click(function () {
  currentSystem = "oct";
  updateScreen(currentSystem);
  console.log("osmiski sistem");
});

$(".dec").click(function () {
  currentSystem = "dec";
  updateScreen(currentSystem);
  console.log("decimalni sistem");
});

$(".hex").click(function () {
  currentSystem = "hex";
  updateScreen(currentSystem);
  console.log("sesnajstiski sistem");
});

function updateScreen(system) {
  racun = system;
  update_screen();
}

//Funkcija ki doloci ali je stevilo v ustreznom st sistemu
function isValidNumber(number, system) {
  switch (system) {
    case "bin":
      return /^[01]+$/.test(number);
    case "oct":
      return /^[0-7]+$/.test(number);
    case "dec":
      return /^[\d()]+$/.test(number);
    case "hex":
      return /^[0-9A-Fa-f]+$/.test(number);
    default:
      return false;
  }
}

function isNumberInCurrentSystem(number) {
  return isValidNumber(number, currentSystem);
}

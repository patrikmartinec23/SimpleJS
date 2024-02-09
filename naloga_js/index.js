function checkUsername(text) {
  const taken_u = ["patrik", "timi", "jaka", "janez", "ivan"];
  // Get the <p> element by its ID (replace 'yourParagraphId' with the actual ID)
  var paragraph = document.getElementById("name");

  if (text.length <= 3 && text.length > 0) {
    paragraph.textContent = "Entered username is too short";
    return false;
  } else if (text.length >= 20) {
    paragraph.textContent = "Entered username is too long";
    return false;
  } else if (taken_u.includes(text)) {
    paragraph.textContent = "Username is already in use";
    return false;
  } else if (text.length < 1) {
    paragraph.textContent = "";

    return false;
  } else {
    paragraph.textContent = "";
    return true;
  }
}

function validateEmail(email) {
  var paragraph = document.getElementById("mail");
  var re = /\S+@\S+\.\S+/;
  if (!re.test(email) && email.length >= 1) {
    paragraph.textContent = "Invalid email address";
    return false;
  } else if (email.length < 1) {
    paragraph.textContent = "";
    return false;
  } else {
    paragraph.textContent = "";
    return true;
  }
}

function checkpsw(psw) {
  var paragraph = document.getElementById("password");

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  // Validate numbers
  var numbers = /[0-9]/g;

  if (psw.length < 6 && psw.length > 0) {
    paragraph.textContent = "Password is too short";
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    );
    return false;
  } else if (psw.length >= 6 && !psw.match(upperCaseLetters)) {
    paragraph.textContent =
      "Password must contain at least one upper case letter";
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    );
    return false;
  } else if (psw.length >= 6 && !psw.match(lowerCaseLetters)) {
    paragraph.textContent =
      "Password must contain at least one lower case letter";
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    );
    return false;
  } else if (psw.length >= 6 && !psw.match(numbers)) {
    paragraph.textContent = "Password must contain at least one number";
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    );
    return false;
  } else if (psw.length === 0) {
    paragraph.textContent = "";
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    );
    return false;
  } else {
    paragraph.textContent = "";
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    );
    return true;
  }
}

function checkp(psw2, psw1) {
  var paragraph = document.getElementById("psw_check");
  if (psw2.length === 0 || psw1.length === 0) {
    paragraph.textContent = "";
  } else if (psw1 != psw2) {
    paragraph.textContent = "Passwords do not match";
  } else {
    paragraph.textContent = "";
    return true;
  }
}

function clean() {
  document.getElementById("zadno").textContent = "";
}

function validate() {
  var usern = false;
  var smail = false;
  var passw1 = false;
  var passw2 = false;
  var gender = false;
  if (checkUsername(document.getElementById("username").value)) {
    usern = true;
  } else {
    if (document.getElementById("name").textContent.length < 1) {
      document.getElementById("name").textContent = "Please fill this field";
      usern = false; // Prevent form submission
    } else {
      usern = false; // Prevent form submission
    }
  }

  if (validateEmail(document.getElementById("email").value)) {
    smail = true;
  } else {
    if (document.getElementById("mail").textContent.length < 1) {
      document.getElementById("mail").textContent = "Please fill this field";
      smail = false; // Prevent form submission
    } else {
      smail = false; // Prevent form submission
    }
  }

  if (checkpsw(document.getElementById("password1").value)) {
    passw1 = true;
  } else {
    if (document.getElementById("password1").value.trim().length < 1) {
      document.getElementById("password").textContent =
        "Please fill this field";
      passw1 = false; // Prevent form submission
    } else {
      passw1 = false; // Prevent form submission
    }
  }

  if (
    checkp(
      document.getElementById("psw-repeat").value,
      document.getElementById("password1").value
    )
  ) {
    passw2 = true;
  } else {
    if (document.getElementById("psw-repeat").value.trim().length < 1) {
      document.getElementById("psw_check").textContent =
        "Please fill this field";
      passw2 = false; // Prevent form submission
    } else {
      passw2 = false; // Prevent form submission
    }
  }

  if (
    document.getElementById("male").checked ||
    document.getElementById("female").checked
  ) {
    gender = true;
  } else {
    document.getElementById("zadno").textContent = "Please fill this field";
  }

  if (usern && smail && passw1 && passw2 && gender) {
    return true;
  } else {
    return false;
  }
}

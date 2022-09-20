var input_fields = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");


input_fields.forEach(function(input_items) {
    input_items.addEventListener("input", function() {
        if (input_items.value.length > 3) {
            login_btn.disabled = false;
            login_btn.className = "btn_disabled";
        }
    })
})

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input_email.value)) {
        return (true)
    }
    alert("You have entered invalid email syntax");
    return (false)
}

function msg() {
    document.getElementById("message").style.display = "block";
}

function meso() {
    document.getElementById("message").style.display = "none";
}

function validation() {
    var input_email = document.querySelector("#input_email");
    var input_password = document.querySelector("#input_password");
    var error_msg = document.querySelector(".error_msg");

    if (input_email.value.length <= 3 || input_password.value.length <= 3) {
        error_msg.style.display = "inline-block";
        return false;
    } else {
        return true;
    }
}
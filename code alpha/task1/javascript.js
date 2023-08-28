let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let next1 = document.getElementById("Next1");
let next2 = document.getElementById("Next2");
let back1 = document.getElementById("Back1");
let back2 = document.getElementById("Back2");
var progress = document.getElementById("progress");
next1.onclick = function () {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
};
back1.onclick = function () {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
};
next2.onclick = function () {
  form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px";
};
back2.onclick = function () {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
};

// var from_name = document.getElementsById("name").value;
// var fname = document.getElementsById("fname").value;
// var mname = document.getElementsById("mname").value;
// var email = document.getElementsById("email").value;
// var age = document.getElementsById("age").value;
// var dep = document.getElementById("dep").value;
// var male = document.getElementById("male").value;
// var female = document.getElementById("female").value;
// var dob = document.getElementById("dob").value;
// var address = document.querySelector("#address").value;

// var pincode = document.getElementById("pin").value;
// var pn = document.getElementById("pn").value;
// var telugu = document.getElementById("telugu").value;
// var hindi = document.getElementById("hindi").value;
// var english = document.getElementById("english").value;
// var tamil = document.getElementById("tamil").value;
// var others = document.getElementById("others").value;
// function SendMail() {
//   alert(address);
//   console.log(address);

//   var templateParams = {
//     from_name: document.getElementsById("name").value,
//     fname: document.getElementsById("fname").value,
//     mname: document.getElementsById("mname").value,
//     email: document.getElementsById("email").value,
//     age: document.getElementsById("age").value,
//     dob: document.getElementById("dob").value,
//     dep: document.getElementById("dep").value,
//     male: document.getElementById("male").value,
//     female: document.getElementById("female").value,
//     address: document.getElementById("address").value,
//     pincode: document.getElementById("pin").value,
//     pn: document.getElementById("pn").value,
//     telugu: document.getElementById("telugu").value,
//     hindi: document.getElementById("hindi").value,
//     english: document.getElementById("english").value,
//     tamil: document.getElementById("tamil").value,
//     others: document.getElementById("others").value,
//   };
//   //   emailjs
//   //     .send("service_nl4losh", "template_e22fmjc0", params)
//   //     .then(function (res) {
//   //       alert("sucess!" + res.status);
//   //     });
//   emailjs.send("service_nl4losh", "template_e22fmjc", templateParams).then(
//     function (response) {
//       console.log("SUCCESS!", response.status, response.text);
//       alert("SUCCESS!", response.status, response.text);
//     },
//     function (error) {
//       console.log("FAILED...", error);
//       alert("FAILED...", error);
//     }
//   );
// }

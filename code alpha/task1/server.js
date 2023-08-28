function SendMail() {
  var from_name = document.querySelector("#name").value;
  var fname = document.querySelector("#fname").value;
  var mname = document.querySelector("#mname").value;
  var email = document.querySelector("#email").value;
  var age = document.querySelector("#age").value;
  var dep = document.querySelector("#dep").value;
  var male = document.querySelector("#male").value;
  var female = document.querySelector("#female").value;
  var dob = document.querySelector("#dob").value;
  var address = document.querySelector("#address").value;
  var pincode = document.querySelector("#pin").value;
  var pn = document.querySelector("#pn").value;
  var telugu = document.querySelector("#telugu").value;
  var hindi = document.querySelector("#hindi").value;
  var english = document.querySelector("#english").value;
  var tamil = document.querySelector("#tamil").value;
  var malayalam = document.querySelector("#malayalam").value;
  var others = document.querySelector("#others").value;

  var templateParams = {
    from_name: from_name,
    name: from_name,
    fname: fname,
    mname: mname,
    email: email,
    age: age,
    dob: dob,
    dep: dep,
    male: male,
    female: female,
    address: address,
    pincode: pincode,
    pn: pn,
    telugu: telugu,
    hindi: hindi,
    english: english,
    tamil: tamil,
    malayalam: malayalam,
    others: others,
  };
  emailjs.send("service_nl4losh", "template_e22fmjc", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
}

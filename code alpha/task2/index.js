const gen = document.getElementById("generate");
// const captcha = () => {
function captcha() {
  const show = document.getElementById("show");
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let captcha = "";
  for (let i = 0; i <= 5; i++) {
    // const element=arraay[index];
    captcha += chars.charAt(Math.random() * chars.length);
    console.log(captcha);
  }
  show.innerText = captcha;
  a = captcha;
}
function pradeep() {
  console.log(a);
  const enter = document.getElementById("enter").value;
  console.log(enter);
  if (enter == a) {
    alert("Succesfully login");
  } else {
    alert("Enter correct captcha");
  }
}
// generate.addEventListener("click", () => captcha());
// captcha();

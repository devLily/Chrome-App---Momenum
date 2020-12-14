const form = document.querySelector(".js-form");
input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();
}
// event의 기본 동작을 막는다
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    // 유저가 없는 경우
  } else {
    paintGreeting(currentUser);
    // 유저가 있는 경우
  }
}

function init() {}

init();

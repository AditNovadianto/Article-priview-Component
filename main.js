const share = document.querySelector(".share .arrows");

let appear = () => {
  const application = document.querySelector(".application .fixed");

  const arrow = document.querySelector(".share .circle");

  application.classList.toggle("show");

  arrow.classList.toggle("touch");
};

share.addEventListener("click", appear);

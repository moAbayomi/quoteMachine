const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
const audioSamples = [
  "Heater 1",
  "Heater 2",
  "Heater 3",
  "Heater 4",
  "Clap",
  "Open HH",
  "Kick-n'-Hat",
  "Kick",
  "Closed-HH",
];

document.addEventListener("DOMContentLoaded", () => {
  const buttonsDiv = document.querySelector("#pad-bank");
  const buttonPads = buttonsDiv.querySelectorAll(".drum-pad");
  const sound = document.querySelectorAll("audio");
  const display = document.querySelector("#display");

  document.addEventListener("keypress", (e) => {
    Array.from(sound).forEach((audio) => {
      if (audio.id == e.key.toUpperCase()) {
        audio.play();
      }
    });
  });

  Array.from(buttonPads).forEach((btn, i) => {
    btn.addEventListener("click", () => {
      console.log(btn.innerText);

      btn.querySelector("audio").play();

      display.innerText = btn.id;
      setTimeout(() => {
        display.innerText = "";
      }, 800);
    });
  });

  /*   const power = document.getElementById("power");
  const select = document.querySelector(".select");
  const powerSwitch = select.querySelector(".inner");
  select.addEventListener("click", (e) => {
    if (Array.from(select.classList).includes("justify-end")) {
      e.target.closest("#power").dataset.status = "off";
      console.log(power.dataset.status);
      select.classList.remove("justify-end");
    } else {
      e.target.closest("#power").dataset.status = "on";
      console.log(power.dataset.status);
      select.classList.add("justify-end");
    }
  }); */
});

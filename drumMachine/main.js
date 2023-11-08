import { DrumPad } from "./components/DrumPad";
const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
const audioSamples = [
  "Heater-1.mp3",
  "Heater-2.mp3",
  "Heater-3.mp3",
  "Heater-4_1.mp3",
  "Heater-6.mp3",
  "Dsc_Oh.mp3",
  "Kick_n_Hat.mp3",
  "RP4_KICK_1.mp3",
  "Cev_H2.mp3",
];
document.addEventListener("DOMContentLoaded", () => {
  const buttonsDiv = document.querySelector("#pad-bank");
  const buttonPads = buttonsDiv.querySelectorAll("drum-pad");
  const slider = document.querySelector("#input-slider");

  Array.from(buttonPads).forEach((btn, i) => {
    btn.querySelector("span").innerHTML = keys[i].toUpperCase();
    btn.querySelector("audio").src += audioSamples[i];

    btn.addEventListener("click", (e) => {
      console.log(btn.querySelector("audio").getAttribute("src"));
      btn.querySelector("audio").play();
    });
  });

  const power = document.getElementById("power");
  const select = document.querySelector(".select");
  const powerSwitch = select.querySelector(".inner");
  select.addEventListener("click", (e) => {
    console.log(select.classList);
    if (Array.from(select.classList).includes("justify-end")) {
      e.target.closest("#power").dataset.status = "off";
      console.log(power.dataset.status);
      select.classList.remove("justify-end");
    } else {
      e.target.closest("#power").dataset.status = "on";
      console.log(power.dataset.status);
      select.classList.add("justify-end");
    }
  });

  slider.addEventListener("change", (e) => {
    console.log(e.value);
  });
});

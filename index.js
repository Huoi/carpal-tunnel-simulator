let clicks = 0;
let clickIncrement = 1;
let upgradePrice = 10;
let cursorPrice = 15;
let mousePrice = 100;
let keyboardPrice = 1400;

let cps = 0;

// setup
let clicksLbl = document.getElementById("clicks-lbl");
let cpsLbl = document.getElementById("cps-lbl");
let upgradeBtn = document.getElementById("upgrade-btn");
let buyCursorBtn = document.getElementById("buy-cursor-btn");
let buyMouseBtn = document.getElementById("buy-mouse-btn");
let buyKeyboardBtn = document.getElementById("buy-keyboard-btn");

clicksLbl.innerHTML = `${clicks}`;
cpsLbl.innerHTML = `CPS: ${cps}`;
upgradeBtn.innerHTML = `Upgrade (${upgradePrice})`;
buyCursorBtn.innerHTML = `Buy 1 cursor (${cursorPrice})`;
buyMouseBtn.innerHTML = `Buy 1 mouse (${mousePrice})`;
buyKeyboardBtn.innerHTML = `Buy 1 keyboard (${keyboardPrice})`;

// code
let clicked = () => {
  clicks += clickIncrement;
  clicksLbl.innerHTML = `${clicks}`;
};

let upgrade = () => {
  if (clicks >= upgradePrice) {
    clicks -= upgradePrice;
    clickIncrement *= 2;
    upgradePrice *= 10;

    clicksLbl.innerHTML = `${clicks}`;
    upgradeBtn.innerHTML = `Upgrade (${upgradePrice})`;
  }
};

let buy = (id) => {
  switch (id) {
    case 0:
      if (clicks >= cursorPrice) {
        clicks -= cursorPrice;
        cps += 1;
        cursorPrice *= 2;
        buyCursorBtn.innerHTML = `Buy 1 cursor (${cursorPrice})`;
        cpsLbl.innerHTML = `CPS: ${cps}`;
      }
      break;
    case 1:
      if (clicks >= mousePrice) {
        clicks -= mousePrice;
        cps += 15;
        mousePrice *= 2;
        buyMouseBtn.innerHTML = `Buy 1 mouse (${mousePrice})`;
        cpsLbl.innerHTML = `CPS: ${cps}`;
      }
    case 2:
      if (clicks >= keyboardPrice) {
        clicks -= keyboardPrice;
        cps += 100;
        keyboardPrice *= 2;
        buyKeyboardBtn.innerHTML = `Buy 1 keyboard (${keyboardPrice})`;
        cpsLbl.innerHTML = `CPS: ${cps}`;
      }
    default:
      break;
  }
};

setInterval(() => {
  clicks += cps;
  clicksLbl.innerHTML = `${clicks}`;
}, 1000);

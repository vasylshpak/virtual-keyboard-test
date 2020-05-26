const keyCode = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ControlRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight"
];
const keyList = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "&#92; ",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "	&#9650;",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  " ",
  "Alt",
  "Control",
  "	&#9668;",
  "&#9660;",
  "&#9658;"
];
const keyShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  ' " ',
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "&#9650;",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  " ",
  "Alt",
  "Control",
  "&#9668;",
  "&#9660;",
  "&#9658;"
];

document.querySelector("body").innerHTML = '<div class="box"></div>';

function draw(keyList) {
  const keyCreate = keyList
    .map(item => {
      return `<div class="key-element" data="${item}"><p>${item}</p></div>`;
    })
    .join("");
  document.querySelector(".box").innerHTML = keyCreate;
  // for (val of KeyArr) {
  //     out += `<div class="element " data="${val}"><p>  ${val} </p></div>`
  // }
}
draw(keyList);

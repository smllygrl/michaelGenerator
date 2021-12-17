const michStrings = {
  1: "I sure do hate sluts who deserve it",
  2: "I wish whirlwind dolphin was here to see this",
  3: " * has a conscussion * ",
  4: " * sets entire arm on fire * ",
  5: "Steiner is so cool I am exci... it's a cult",
  6: "I am not a cult leader",
  7: "heck",
  8: "I won the limbo competition at Year 7 camp",
  9: "I smooched Kerryn",
  10: "I will survive, I will survive, I will survive",
};

let imageNum = 0;
let stringNum = 0;

// Decalre output area
const stringOutput = document.getElementById("genString").innerText;

const genNums = () => {
  return randomStringNum(1, 10), randomImageNum(1, 18);
};

// Random number generator
// String max = 10
const randomStringNum = (min, max) => {
  console.log("Random string number beginning");
  let stringNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`The new stringNum: ${stringNum}`);
  return stringNum;
};

const getString = (stringNum) => {
  let funString = michStrings[stringNum];
  return funString;
};

const setString = (funString, stringOutput) => {
  let stringOutput = funString;
  return stringOutput;
};

// Image max = 18
const randomImageNum = (min, max) => {
  console.log("Random image number beginning");
  let imageNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`The new imageNum: ${imageNum}`);
  return imageNum;
};

const getImage = (imageNum) => {
  let image = (document.getElementById("genImage").src =
    "michImages/" + imageNum + ".jpg");
  return image;
};

// Declare button
const genButt = document.getElementById("generator");

genButt.addEventListener("click", console.log("Button pressed"));

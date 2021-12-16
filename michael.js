const michStrings = {
  1: "I sure do hate sluts who deserve it",
  2: "I wish whirlwind dolphin was here to see this",
  3: " * has a conscussion * ",
  4: " * sets entire arm on fire * ",
  5: "Steiner is so cool I am exci... it's a cult",
  6: "I am not a cult leader but...",
  7: "oh heck",
  8: "It's a message ~ ~",
  9: "Yeah yeah I smooched Shelley's Mum...",
  10: "This is the 10th item in the object",
};

let imageNum = 0;
let stringNum = 0;

// Declare button
const genButt = document.getElementsByTagName("button");

// Decalre output area
const genString = document.getElementById("genString");
// const genImage = (document.getElementById("genImage").src =
//   "michImages/" + imageNum + ".jpg");

const genNums = () => {
  console.log("Button clicked");
  return randomStringNum(1, 10), randomImageNum(1, 18);
};

// // Event listener

// Random number generator
// String max = 10
const randomStringNum = (min, max) => {
  console.log("Random string number beginning");
  let stringNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`The new stringNum: ${stringNum}`);
  return stringNum;
};
// Image max = 18
const randomImageNum = (min, max) => {
  console.log("Random image number beginning");
  let imageNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`The new imageNum: ${imageNum}`);
  return imageNum;
};

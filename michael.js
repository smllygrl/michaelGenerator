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

const michImages = [
  "michImages/1.jpg",
  "michImages/2.jpg",
  "michImages/3.jpg",
  "michImages/4.jpg",
  "michImages/5.jpg",
  "michImages/6.jpg",
  "michImages/7.jpg",
  "michImages/8.jpg",
  "michImages/9.jpg",
  "michImages/10.jpg",
  "michImages/11.jpg",
  "michImages/12.jpg",
  "michImages/13.jpg",
  "michImages/14.jpg",
  "michImages/15.jpg",
  "michImages/16.jpg",
  "michImages/17.jpg",
  "michImages/18.jpg",
];

let randomNum = 0;

const genRandomNum = (min, max) => {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

const clickEvent = (c) => {
  // String
  let stringNum = genRandomNum(1, 10);
  console.log(`stringNum: ${stringNum}`);
  let funString = michStrings[stringNum];
  document.getElementById("genString").innerText = funString;
  // Image
  let imageNum = genRandomNum(1, 18) - 1;
  console.log(`imageNum: ${imageNum}`);
  document.getElementById("genImage").src = michImages[imageNum];
  return c;
};

const url = 'https://www.breakingbadapi.com/api/characters'
//const sliderContainer = document.querySelector('.sliderContainer')
let img = document.querySelector('img')
let bb = []
let h2 = document.querySelector('h2')
let arrNum = 0


async function breakingBad() {
  let response = await axios(url);
  bb = response.data
  show(bb);
}

breakingBad()
function show() {
  // console.log(bb)
  img.src = bb[arrNum].img
  h2.innerText = bb[arrNum].name
}

let prevButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");

nextButton.addEventListener("click", (event) => {
  console.log("clicked");
  arrNum++;
  if (arrNum === bb.length) {
    arrNum = 0;
  }
  show();
})

prevButton.addEventListener("click", (event) => {
  console.log("clicked");
  arrNum--;
  if (arrNum < 0) {
    arrNum = bb.length - 1
  }
  show()

});







// const slidesContainer = document.getElementsByClassName(".sliderContainer");
// const slides = document.querySelectorAll(".content");




// const setSlide = (sum) => {


// }


// const test = document.getElementById('test')

const arrowLeft = document.getElementById('arrow--left')
const arrowRight = document.getElementById('arrow--right')
const sleevesDOM = document.getElementById('sleeves')

let reviewsData
let slideIndex = 0
document.body.addEventListener('keydown', moveSlider)
arrowLeft.addEventListener('click', moveSlider)
arrowRight.addEventListener('click', moveSlider)

function moveSlider(e){
  if(e.currentTarget.id.includes("right"))
    { slideIndex === reviewsData.length - 1 ? (slideIndex = 0) : slideIndex++ }
  switch (e.key) {
    case "ArrowLeft":
   
    slideIndex === 0 ? (slideIndex = reviewsData.length - 1) : slideIndex--
    break;
    case "ArrowRight":
   
    slideIndex === reviewsData.length - 1 ? (slideIndex = 0) : slideIndex++
    break;
  }
  if(e.currentTarget.id.includes("left")) 
    { slideIndex === 0 ? (slideIndex = reviewsData.length - 1) : slideIndex-- }
  
  sleevesDOM.style.transform = `translate(${-100 * slideIndex}%)`
}


// 
// 
function parseData(x){
  return `<div class="sleeves">
  <a href="${x.spotifyUrl}">
    <div class="sleeve-inner">
      <img src="${x.artwork}" alt="${x.title}" />
      <div class="meta">
        <p class="title">${x.title}</p>
        <p class="year">${x.year}</p>
      </div>
    </div>
  </a>
  </div>`
}
// 
// 
const url = "https://mvmapi.olk1.com/albums"

getData()
async function getData(){
  await fetch(url)
  .then(res => {
    if(!res.ok){
      throw new Error("Network response failed")
    }
    return res.json()
  })
  .then(data => {
    reviewsData = data
    sleevesDOM.innerHTML = reviewsData.map(parseData).join("")
  })
  .catch(error => {
    console.error("There has been a problem with your fetch operation: ", error)
  })
}



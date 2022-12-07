const test = document.getElementById('test')

const arrowLeft = document.getElementById('arrow--left')
const arrowRight = document.getElementById('arrow--right')
const reviewsDOM = document.getElementById('reviews')

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
  
  reviewsDOM.style.transform = `translate(${-100 * slideIndex}%)`
}


// 
// 
function parseData(x){
  return `<div class="review">
    <div class="review-inner">
      <p>${x.id}</p>
      <p>${x.title}</p>
    </div>
  </div>`
}
// 
// 
// const url = "https://matthewviamusic.com/api/tracks"
const url = "./data.json"
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
    reviewsData = data.lemons
    reviewsDOM.innerHTML = data.lemons.map(parseData).join("")
  })
  .catch(error => {
    console.error("There has been a problem with your fetch operation: ", error)
  })
}




// 
// 
// 

function reviewStars(stars){
  const calculatedStars = []
  for (let i = 0; i < Math.floor(stars); i++){
    calculatedStars.push(`<img src="images/full-star-svg">`)
  }
  if(stars === 5){
    return calculatedStars.map(item => item).join("")
  } 
  if(Number.isInteger(stars)){
   for (let i = 0; i < 5 - stars; i++){
    calculatedStars.push(`<img src="images/empty-star-svg">`)
    } 
  } else{
    calculatedStars.push(`<img src="images/half-star-svg">`)
    for (let i = 0; i < 4 - Math.floor(stars); i++){
      calculatedStars.push(`<img src="images/empty-star-svg">`)
    } 
  }
  return calculatedStars.map(item => item).join("")
}




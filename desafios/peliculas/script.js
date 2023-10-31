const d = document

// Slider
const castList = d.querySelector('.cast-list')
const prevBtn = d.getElementById('prevBtn')
const nextBtn = d.getElementById('nextBtn')
const itemWidth = d.querySelector('.cast-list li').offsetWidth
let currentPosition = 0

nextBtn.addEventListener('click', () => {
  if (currentPosition > -itemWidth * (castList.childElementCount - 1)) {
    currentPosition -= itemWidth
    castList.style.transform = `translateX(${currentPosition}px)`
  }
})

prevBtn.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += itemWidth
    castList.style.transform = `translateX(${currentPosition}px)`
  }
})

// Modal de See all
const addDisplayBlock = () => {
  d.getElementById('myModal').style.display = 'block'
}

const getDisplayNone = () => {
  d.getElementById('myModal').style.display = 'none'
}

// Open the modal, once it click in the 'See All' button
d.getElementById('open-modal').addEventListener('click', addDisplayBlock)

// Close the modal once it click at hte 'X' in the open modal
d.getElementById('close-modal').addEventListener('click', getDisplayNone)

// Close the modal once it click outside the modal
window.addEventListener('click', function (event) {
  if (event.target == d.getElementById('myModal')) {
    d.getElementById('myModal').style.display = 'none'
  }
})

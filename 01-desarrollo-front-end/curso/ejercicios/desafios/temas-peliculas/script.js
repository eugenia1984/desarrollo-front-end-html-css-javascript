const d = document

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

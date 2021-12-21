const prevLocationDisplay = document.getElementById('prev-location')
const speedometer = document.getElementById('speedometer')
const select = document.getElementById('select')
const time = document.getElementById('time')

select.addEventListener('change', (e) => setPrevLocation(e.target.value))
time.addEventListener('change', calculateSpeed)

let prevLocation = {}
let timeTaken = 0

let destination = [
  {
    name: 'Munich',
    distanceFromPrevDestination: 2892,
  },
  {
    name: 'Kiev',
    distanceFromPrevDestination: 1111,
  },
  {
    name: 'Ulaanbaatar',
    distanceFromPrevDestination: 5324,
  },
  {
    name: 'Sydney',
    distanceFromPrevDestination: 5458,
  },
  {
    name: 'Tijuana',
    distanceFromPrevDestination: 6531,
  },
  {
    name: 'Chicago',
    distanceFromPrevDestination: 1729,
  },
]

function displayPreviousLocation() {
  prevLocationDisplay.textContent = `Previous location: ${prevLocation.name}`
}

function setPrevLocation(currentLocation) {
  const currentIndex = destination.findIndex(
    (location) => location.name === currentLocation
  )

  const previousIndex =
    currentIndex === 0 ? destination.length - 1 : currentIndex - 1
  prevLocation = destination[previousIndex]
  displayPreviousLocation()
}

setPrevLocation(select.value)

function calculateSpeed(e) {
  const time = e.target.value
  const distance = prevLocation.distanceFromPrevDestination

  const speed = Math.round(distance / time)

  console.log(speed)

  // Task:
  // - Retrieve distance from previous destination from array of objects.
  // - Calculate speed and round speed to an integer (whole number).
  // - Display speed in speedometer paragraph.
}

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.

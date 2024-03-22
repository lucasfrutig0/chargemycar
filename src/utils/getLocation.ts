import { TranslateCoords } from '../lib/opencage'

export function geoFindMe() {
  if (!navigator.geolocation) {
    // status!.textContent = 'Geolocation is not supported by your browser'
  } else {
    // status!.textContent = 'Locating…'
    // navigator.geolocation.getCurrentPosition(success, error)
    navigator.geolocation.getCurrentPosition(success, error)
  }
}

async function success(position: any) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  localStorage.setItem('coords', `${latitude},${longitude}`)
  return await TranslateCoords()
}

function error() {
  console.log('aqui')
  return 'Unable to retrieve your location'
}

import { currentLocation } from '../store/location'

export async function TranslateCoords() {
  const urlDomain = window.location.origin
  const coords = localStorage.getItem('coords')

  if (!coords || !urlDomain) return

  const [lat, lng] = coords.split(',')
  const response = await fetch(
    `${urlDomain}/api/location/?lat=${lat}&lng=${lng}`,
    {
      method: 'GET'
    }
  )
  const location = await response.json()
  if (location) {
    localStorage.setItem('location', JSON.stringify(location))
    currentLocation.set(
      { loc: location?.loc } || localStorage.getItem('location')
    )
  }
  return location
}

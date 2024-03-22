import { isLoading, stations } from '../store/stations'

export async function getStations() {
  const urlDomain = window.location.origin
  const coords = localStorage.getItem('coords')

  try {
    isLoading.set(true)
    if (!coords || !urlDomain) {
      isLoading.set(false)
      return
    }
    const [lat, lng] = coords.split(',')
    const response = await fetch(
      `${urlDomain}/api/stations/?lat=${lat}&lng=${lng}`,
      {
        method: 'GET'
      }
    )
    const stationsData = await response.json()
    // console.log('AHAHAA', stationsData.stations)
    stations.set(stationsData?.stations)
    isLoading.set(false)
    return stationsData
  } catch (error) {
    isLoading.set(false)
    console.log('error fetch', error)
  }
}

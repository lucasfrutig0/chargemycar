import { useStore } from '@nanostores/react'
import CurrentLocation from './CurrentLocation'
import { isLoading, stations } from '../store/stations'
import LocationListItem from './LocationListItem'

const LocationList = () => {
  const $stations = useStore(stations)
  const $isLoading = useStore(isLoading)

  return (
    <>
      <div className='flex items-center pb-2'>
        <h1 className='text-xl p-1 text-zinc-50/50'>Closer Stations</h1>
        <small className='flex-1'>
          <CurrentLocation />
        </small>
      </div>
      {$isLoading ? (
        <div className='p-8'>
          {/* <div className='border-gray-300/50 h-20 w-20 animate-spin rounded-full border-8 border-t-green-emerald/50 mx-auto' /> */}
          <p className='text-center font-semibold text-zinc-50/50 animate-pulse'>
            Locating...
          </p>
        </div>
      ) : (
        <ul role='list' className='space-y-2'>
          {$stations.map((station: any) => (
            <LocationListItem key={station.AddressInfo.ID} station={station} />
          ))}
        </ul>
      )}
    </>
  )
}

export default LocationList

import { useStore } from '@nanostores/react'
import { currentLocation } from '../store/location'
import { useEffect } from 'react'
import locIcon from '../assets/icons/location.svg'

const CurrentLocation = () => {
  const $currentLocation = useStore(currentLocation)
  useEffect(() => {
    const location = localStorage.getItem('location')
    currentLocation.setKey('loc', JSON.parse(location || '{}').loc)
  }, [$currentLocation])
  return (
    <div className='text-pretty text-[11px] md:text-sm font-black py-2 flex  items-center justify-center'>
      <span className='font-normal pr-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'
        >
          <path
            fill='#008000'
            d='M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12'
          ></path>
        </svg>
      </span>
      <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-emerald to-blue-electric'>
        {$currentLocation.loc}
      </span>
    </div>
  )
}

export default CurrentLocation

import { useCallback, useEffect } from 'react'
import { geoFindMe } from '../../utils/getLocation'
import { useStore } from '@nanostores/react'
import { currentLocation } from '../../store/location'
import { getStations } from '../../lib/openchargemap'

const SharedLocationButton = () => {
  const $currentLocation = useStore(currentLocation)

  const handleClickButton = useCallback(() => {
    geoFindMe()
  }, [])

  useEffect(() => {
    const location = localStorage.getItem('location')
    currentLocation.setKey('loc', JSON.parse(location || '{}').loc)
  }, [$currentLocation])

  return (
    <div className='px-8 py-12 text-xs md:text-base text-pretty'>
      <div className='grid gap-8 items-start justify-center'>
        <div className='relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-green-emerald to-blue-electric rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
          {$currentLocation.loc ? (
            <div
              // onClick={handleClickLocateButton}
              id='location-button'
              className='relative px-7 py-4 bg-background-dark rounded-lg leading-none flex items-center divide-x divide-gray-600'
            >
              <span className='flex items-center space-x-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#008000'
                    d='M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2h.5q.25 0 .5.05v2.025q-.25-.05-.488-.063T12 4Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35q3.05-2.8 4.525-5.087T18 10.2V10h2v.2q0 2.5-1.987 5.438T12 22m0-10q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m6-4h2V5h3V3h-3V0h-2v3h-3v2h3z'
                  ></path>
                </svg>
                <span className='pr-6 text-gray-100' id='status'>
                  {$currentLocation.loc ?? 'Find nearest stations'}
                </span>
              </span>
              <span className='pl-6 text-blue-electric group-hover:text-gray-100 transition duration-200'>
                <a href='/stations'>Locate</a>
              </span>
            </div>
          ) : (
            <button
              onClick={handleClickButton}
              id='location-button'
              className='relative px-7 py-4 bg-background-dark rounded-lg leading-none flex items-center divide-x divide-gray-600'
            >
              <span className='flex items-center space-x-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#008000'
                    d='M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2h.5q.25 0 .5.05v2.025q-.25-.05-.488-.063T12 4Q9.475 4 7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35q3.05-2.8 4.525-5.087T18 10.2V10h2v.2q0 2.5-1.987 5.438T12 22m0-10q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m6-4h2V5h3V3h-3V0h-2v3h-3v2h3z'
                  ></path>
                </svg>
                <span className='pr-6 text-gray-100' id='status'>
                  {$currentLocation.loc ?? 'Find nearest stations'}
                </span>
              </span>
              <span className='pl-6 text-blue-electric group-hover:text-gray-100 transition duration-200'>
                Share Location
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SharedLocationButton

import { useMemo } from 'react'
import { ConnectorIcon } from '../assets/icons/ConnectorIcon'
import { DistanceIcon } from '../assets/icons/Distance'
import { CostIcon } from '../assets/icons/CostIcon'

const LocationListItem = ({ station }: any) => {
  console.log('station', station)
  const totalQuantity = useMemo(() => {
    return station.Connections.reduce((accumulator: any, currentItem: any) => {
      return accumulator + currentItem.Quantity
    }, 0)
  }, [station])

  //TODO : add a button to go to the station
  //TODO : add types to station props
  return (
    <li
      key={station.AddressInfo.ID}
      className='text-soft-gray/60 hover:text-soft-gray group/item bg-black/60 hover:bg-black rounded-md p-2 transition-all duration-150 hover:cursor-pointer hover:translate-x-1'
    >
      <div className='flex justify-end items-center group/edit invisible group-hover/item:visible '>
        <a className='' href='tel:{person.phone}'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='#888888'
              d='m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z'
            ></path>
          </svg>
        </a>
      </div>
      <div className='flex justify-between gap-x-6 '>
        <div className='flex min-w-0 gap-x-4 pb-2'>
          <svg
            width={10}
            height={10}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-12 w-12 flex-none rounded-full bg-zinc-900/50 p-2'
          >
            <path
              fill='#888888'
              d='M6 10h6V5H6zM4 21V5q0-.825.588-1.412T6 3h6q.825 0 1.413.588T14 5v7h1.25q.725 0 1.238.513T17 13.75v4.625q0 .425.35.775t.775.35q.45 0 .788-.35t.337-.775V9H19q-.425 0-.712-.288T18 8V6h.5V4.5h1V6h1V4.5h1V6h.5v2q0 .425-.288.713T21 9h-.25v9.375q0 1.05-.763 1.838T18.126 21q-1.075 0-1.85-.788t-.775-1.837V13.75q0-.125-.062-.187t-.188-.063H14V21zm4.5-2l2.5-4H9.5v-3L7 16h1.5z'
            ></path>
          </svg>

          <div className='min-w-0 flex-auto'>
            <p className='text-sm font-semibold leading-6 '>
              {station.AddressInfo.Title}
            </p>
            <p className='mt-1 truncate text-xs leading-5'>
              {station.AddressInfo.AddressLine1} - {station.AddressInfo.Town} -{' '}
              {station.AddressInfo.StateOrProvince}
            </p>
          </div>
        </div>
        <div className='mt-1 flex items-center gap-x-1.5'>
          <div
            className={`flex-none rounded-full p-1 ${station.StatusType.IsOperational ? 'bg-green-500/20 animate-pulse' : 'bg-red-500/20'}`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${station.StatusType.IsOperational ? 'bg-green-500' : 'bg-red-500'}`}
            ></div>
          </div>
          <p className='text-xs leading-5 text-gray-500'>
            {station.StatusType.IsOperational ? ' Active' : ' Inactive'}
          </p>
        </div>
      </div>

      <div className='h-[1px] border-dashed border-gray-500/40 border'></div>
      <div className='flex justify-between items-center py-2'>
        <div className='flex items-center gap-x-2'>
          <span>
            <ConnectorIcon />
          </span>
          <span className='text-sm leading-6 text-zinc-200/60'>
            {totalQuantity} connectors
          </span>
        </div>

        <div className='flex items-center gap-x-2'>
          <span>
            <DistanceIcon />
          </span>
          <span className='text-sm leading-6 text-zinc-200/60'>
            {Math.round(station.AddressInfo.Distance)}km
          </span>
        </div>

        <div className='flex items-center gap-x-2'>
          <span>
            <CostIcon />
          </span>
          <span className='text-sm leading-6 text-zinc-200/60'>
            {station.UsageCost ?? 'not provided'}
          </span>
        </div>
      </div>
    </li>
  )
}

export default LocationListItem

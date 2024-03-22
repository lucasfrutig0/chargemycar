import type { SVGProps } from 'react'

export function ConnectorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 48 48'
      {...props}
    >
      <g fill='none'>
        <circle
          cx='24'
          cy='24'
          r='20'
          stroke='#888888'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
        ></circle>
        <path
          stroke='#888888'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
          d='M29 43a5 5 0 0 0-10 0'
        ></path>
        <path
          stroke='#888888'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='4'
          d='M15.5 42.11A19.923 19.923 0 0 0 24 44c3.04 0 5.92-.678 8.5-1.89'
        ></path>
        <circle cx='15' cy='15' r='3' fill='#888888'></circle>
        <circle cx='11' cy='23' r='3' fill='#888888'></circle>
        <circle cx='24' cy='11' r='3' fill='#888888'></circle>
        <circle cx='33' cy='15' r='3' fill='#888888'></circle>
        <circle cx='37' cy='23' r='3' fill='#888888'></circle>
      </g>
    </svg>
  )
}

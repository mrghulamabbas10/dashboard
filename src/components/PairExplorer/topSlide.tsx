import React from 'react'

import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import Marquee from 'react-fast-marquee'

const Data = [
  {
    hash: ' #2',
    name: 'trempboden',
  },
  {
    hash: ' #3',
    name: 'bunk',
  },
  {
    hash: ' #4',
    name: 'BOMEW',
  },
  {
    hash: ' #5',
    name: 'POM',
  },
  {
    hash: ' #6',
    name: 'THOP',
  },
  {
    hash: ' #7',
    name: 'EPIK',
  },
  {
    hash: ' #8',
    name: 'THOG',
  },
]

export default function TopSlide() {
  return (
    <div>
      <div className='md:px-[30px] px-5 md:py-3 py-2  bg-black flex items-center mt-5 rounded-full relative'>
        <span className='text-sm border-r border-white pr-5 whitespace-nowrap'>
          Hot Pairs
        </span>

        <Marquee>
          <span className='flex items-center pl-4 text-[#D12AFB] gap-1'>
            #1
            <MdKeyboardDoubleArrowLeft className='text-[#50E3C2] rotate-90' />
            MEW
            <svg
              width='14'
              height='11'
              viewBox='0 0 14 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.11865 8.5826C2.1984 8.50287 2.30658 8.45813 2.41934 8.45813H12.8236C13.0132 8.45813 13.108 8.68729 12.974 8.82127L10.9181 10.8755C10.8383 10.9552 10.7302 11 10.6174 11H0.213114C0.0235798 11 -0.0712853 10.7708 0.062785 10.6368L2.11865 8.5826Z'
                fill='url(#paint0_linear_0_571)'
              />
              <path
                d='M2.11865 0.908136C2.1984 0.828432 2.30658 0.783661 2.41934 0.783661H12.8236C13.0132 0.783661 13.108 1.01285 12.974 1.14682L10.9181 3.20105C10.8383 3.28074 10.7302 3.32552 10.6174 3.32552H0.213114C0.0235798 3.32552 -0.0712853 3.09635 0.062785 2.96238L2.11865 0.908136Z'
                fill='url(#paint1_linear_0_571)'
              />
              <path
                d='M10.9181 4.72093C10.8383 4.64124 10.7302 4.59647 10.6174 4.59647H0.213114C0.0235798 4.59647 -0.0712853 4.82566 0.062785 4.9596L2.11865 7.01386C2.1984 7.09355 2.30658 7.13833 2.41934 7.13833H12.8236C13.0132 7.13833 13.108 6.90913 12.974 6.77516L10.9181 4.72093Z'
                fill='url(#paint2_linear_0_571)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_0_571'
                  x1='8.81361'
                  y1='-2.01875'
                  x2='1.61295'
                  y2='11.7734'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#00FFA3' />
                  <stop
                    offset='1'
                    stop-color='#DC1FFF'
                  />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_0_571'
                  x1='8.81361'
                  y1='-2.01874'
                  x2='1.61296'
                  y2='11.7734'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#00FFA3' />
                  <stop
                    offset='1'
                    stop-color='#DC1FFF'
                  />
                </linearGradient>
                <linearGradient
                  id='paint2_linear_0_571'
                  x1='8.81361'
                  y1='-2.01874'
                  x2='1.61295'
                  y2='11.7734'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#00FFA3' />
                  <stop
                    offset='1'
                    stop-color='#DC1FFF'
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {Data.map((item, index) => (
            <span
              className='flex items-center pl-4 text-[#808080] gap-1'
              key={index}
            >
              {item.hash}
              <MdKeyboardDoubleArrowLeft className='text-[#C9A050] -rotate-90' />
              {item.name}
              <svg
                width='14'
                height='11'
                viewBox='0 0 14 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.11865 8.5826C2.1984 8.50287 2.30658 8.45813 2.41934 8.45813H12.8236C13.0132 8.45813 13.108 8.68729 12.974 8.82127L10.9181 10.8755C10.8383 10.9552 10.7302 11 10.6174 11H0.213114C0.0235798 11 -0.0712853 10.7708 0.062785 10.6368L2.11865 8.5826Z'
                  fill='url(#paint0_linear_0_571)'
                />
                <path
                  d='M2.11865 0.908136C2.1984 0.828432 2.30658 0.783661 2.41934 0.783661H12.8236C13.0132 0.783661 13.108 1.01285 12.974 1.14682L10.9181 3.20105C10.8383 3.28074 10.7302 3.32552 10.6174 3.32552H0.213114C0.0235798 3.32552 -0.0712853 3.09635 0.062785 2.96238L2.11865 0.908136Z'
                  fill='url(#paint1_linear_0_571)'
                />
                <path
                  d='M10.9181 4.72093C10.8383 4.64124 10.7302 4.59647 10.6174 4.59647H0.213114C0.0235798 4.59647 -0.0712853 4.82566 0.062785 4.9596L2.11865 7.01386C2.1984 7.09355 2.30658 7.13833 2.41934 7.13833H12.8236C13.0132 7.13833 13.108 6.90913 12.974 6.77516L10.9181 4.72093Z'
                  fill='url(#paint2_linear_0_571)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_0_571'
                    x1='8.81361'
                    y1='-2.01875'
                    x2='1.61295'
                    y2='11.7734'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#00FFA3' />
                    <stop
                      offset='1'
                      stop-color='#DC1FFF'
                    />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_0_571'
                    x1='8.81361'
                    y1='-2.01874'
                    x2='1.61296'
                    y2='11.7734'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#00FFA3' />
                    <stop
                      offset='1'
                      stop-color='#DC1FFF'
                    />
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_0_571'
                    x1='8.81361'
                    y1='-2.01874'
                    x2='1.61295'
                    y2='11.7734'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#00FFA3' />
                    <stop
                      offset='1'
                      stop-color='#DC1FFF'
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          ))}
        </Marquee>

        <span className='absolute z-50 md:gap-3 gap-1 right-0 text-[#9EFF70]  text-sm   bg-[#101010] py-[10px] md:py-[12px] flex md:justify-center justify-start pl-1 ml-5 md:w-32 w-24 rounded-full border border-[#181818]  '>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              opacity='0.8'
              filter='url(#filter0_d_0_427)'
            >
              <circle
                cx='8.5'
                cy='8.5'
                r='3.5'
                fill='#16E7AD'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_0_427'
                x='0'
                y='0'
                width='17'
                height='17'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood
                  flood-opacity='0'
                  result='BackgroundImageFix'
                />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='2.5' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.879001 0 0 0 0 0.0611469 0 0 0 0 0.399928 0 0 0 1 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_0_427'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_0_427'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
          Trading
        </span>
      </div>
    </div>
  )
}

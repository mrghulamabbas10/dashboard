import React from 'react'

import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import Marquee from 'react-fast-marquee'

const Data = [
  {
    hash: ' #2',
    name: 'GST',
  },
  {
    hash: ' #3',
    name: 'GQ',
  },
  {
    hash: ' #4',
    name: 'LUNA',
  },
  {
    hash: ' #5',
    name: 'FIT',
  },
  {
    hash: ' #6',
    name: 'DOME',
  },
  {
    hash: ' #7',
    name: 'GMT',
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
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z'
                  fill='url(#paint0_linear_0_335)'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M6.97924 11.6484C5.61691 11.6474 4.51953 11.3205 3.75278 10.7333C2.97683 10.1391 2.56519 9.29585 2.56519 8.34169C2.56519 7.4223 2.97593 6.75934 3.44067 6.31122C3.80489 5.96004 4.2068 5.73512 4.48666 5.60575C4.42338 5.41153 4.34441 5.15726 4.27377 4.89464C4.17925 4.54321 4.08652 4.1309 4.08652 3.82876C4.08652 3.47113 4.1645 3.11198 4.37473 2.83289C4.59685 2.53805 4.93123 2.3801 5.33351 2.3801C5.6479 2.3801 5.91483 2.4967 6.1238 2.6979C6.32354 2.89019 6.45649 3.14559 6.54827 3.41181C6.70957 3.8796 6.77238 4.46732 6.78999 5.05383H7.17531C7.19293 4.46732 7.25573 3.8796 7.41703 3.41181C7.50882 3.14559 7.64176 2.89019 7.84151 2.6979C8.05047 2.4967 8.31739 2.3801 8.63179 2.3801C9.03408 2.3801 9.36846 2.53805 9.59057 2.83289C9.80081 3.11198 9.87879 3.47113 9.87879 3.82876C9.87879 4.1309 9.78605 4.54321 9.69152 4.89464C9.62088 5.15726 9.54193 5.41153 9.47863 5.60575C9.7585 5.73512 10.1604 5.96004 10.5246 6.31122C10.9894 6.75934 11.4001 7.4223 11.4001 8.34169C11.4001 9.29585 10.9885 10.1391 10.2125 10.7333C9.44578 11.3205 8.3484 11.6474 6.98606 11.6484H6.97924Z'
                  fill='#633001'
                />
                <path
                  d='M5.33355 2.72018C4.74434 2.72018 4.47312 3.16423 4.47312 3.77835C4.47312 4.26647 4.78826 5.24406 4.91756 5.62463C4.94664 5.71022 4.90093 5.80401 4.8176 5.8372C4.34538 6.02529 2.9518 6.714 2.9518 8.29128C2.9518 9.95277 4.36799 11.2055 6.97957 11.2075C6.9806 11.2075 6.98164 11.2075 6.98269 11.2075C6.98372 11.2075 6.98476 11.2075 6.98581 11.2075C9.59738 11.2055 11.0136 9.95277 11.0136 8.29128C11.0136 6.714 9.62 6.02529 9.14777 5.8372C9.06443 5.80401 9.01874 5.71022 9.04782 5.62463C9.17712 5.24406 9.49225 4.26647 9.49225 3.77835C9.49225 3.16423 9.22103 2.72018 8.63183 2.72018C7.78369 2.72018 7.57228 3.93385 7.5572 5.23642C7.55619 5.32338 7.4866 5.39394 7.40052 5.39394H6.56486C6.47876 5.39394 6.40918 5.32338 6.40818 5.23642C6.3931 3.93385 6.18167 2.72018 5.33355 2.72018Z'
                  fill='#D1884F'
                />
                <path
                  d='M6.98581 10.6753C5.06695 10.6753 2.95511 9.63765 2.9518 8.29443C2.9518 8.29653 2.9518 8.29863 2.9518 8.30072C2.9518 9.96355 4.37025 11.217 6.98581 11.217C9.60136 11.217 11.0198 9.96355 11.0198 8.30072C11.0198 8.29863 11.0198 8.29653 11.0198 8.29443C11.0165 9.63765 8.90467 10.6753 6.98581 10.6753Z'
                  fill='#FEDC90'
                />
                <path
                  d='M5.91953 7.88189C5.91953 8.33539 5.70737 8.57158 5.44567 8.57158C5.18396 8.57158 4.97182 8.33539 4.97182 7.88189C4.97182 7.42839 5.18396 7.1922 5.44567 7.1922C5.70737 7.1922 5.91953 7.42839 5.91953 7.88189Z'
                  fill='#633001'
                />
                <path
                  d='M8.99968 7.88189C8.99968 8.33539 8.78754 8.57158 8.52583 8.57158C8.26413 8.57158 8.05197 8.33539 8.05197 7.88189C8.05197 7.42839 8.26413 7.1922 8.52583 7.1922C8.78754 7.1922 8.99968 7.42839 8.99968 7.88189Z'
                  fill='#633001'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_0_335'
                    x1='7'
                    y1='0'
                    x2='7'
                    y2='14'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#53DEE9' />
                    <stop
                      offset='1'
                      stop-color='#1FC7D4'
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

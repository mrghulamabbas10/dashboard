import Link from 'next/link'
import Image from 'next/image'

// iconns
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'

const Header = (props: {
  sidebarOpen: string | boolean | undefined
  setSidebarOpen: (arg0: boolean) => void
}) => {
  return (
    <header className=' relative top-0 z-[999] flex w-full drop-shadow-1 md:px-10 px-5 text-white md:mt-14 mt-0 md:bg-transparent bg-black py-5 '>
      <div className='flex flex-grow items-center justify-between  '>
        <div className='flex items-start justify-between flex-wrap w-full gap-5 md:flex-row flex-col-reverse'>
          <div>
            <div className='flex items-center gap-[18px]'>
              <h3 className='md:text-[31.01px] text-base font-medium'>
                Pair Explorer
              </h3>
              <div className='flex items-center gap-2 px-2 md:py-3 md:px-4 py-1.5 md:bg-black bg-primary rounded-full justify-center'>
                <svg
                  width='17'
                  height='13'
                  viewBox='0 0 17 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.69592 9.92394C2.79741 9.8225 2.93506 9.76556 3.07854 9.76556H16.3177C16.5589 9.76556 16.6796 10.0572 16.509 10.2276L13.893 12.8416C13.7915 12.943 13.6538 13 13.5103 13H0.271182C0.0300046 13 -0.0907086 12.7084 0.0798922 12.5379L2.69592 9.92394Z'
                    fill='url(#paint0_linear_65_2)'
                  />
                  <path
                    d='M2.69592 0.158392C2.79741 0.0569696 2.93506 0 3.07854 0H16.3177C16.5589 0 16.6796 0.291635 16.509 0.462115L13.893 3.07606C13.7915 3.17746 13.6538 3.23444 13.5103 3.23444H0.271182C0.0300046 3.23444 -0.0907086 2.94283 0.0798922 2.77236L2.69592 0.158392Z'
                    fill='url(#paint1_linear_65_2)'
                  />
                  <path
                    d='M13.893 5.01006C13.7915 4.90866 13.6538 4.85168 13.5103 4.85168H0.271182C0.0300046 4.85168 -0.0907086 5.14333 0.0798922 5.31377L2.69592 7.92775C2.79741 8.02915 2.93506 8.08613 3.07854 8.08613H16.3177C16.5589 8.08613 16.6796 7.79449 16.509 7.62401L13.893 5.01006Z'
                    fill='url(#paint2_linear_65_2)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_65_2'
                      x1='11.2151'
                      y1='-3.56598'
                      x2='2.05244'
                      y2='13.9842'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#00FFA3' />
                      <stop
                        offset='1'
                        stop-color='#DC1FFF'
                      />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear_65_2'
                      x1='11.2151'
                      y1='-3.56597'
                      x2='2.05244'
                      y2='13.9842'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#00FFA3' />
                      <stop
                        offset='1'
                        stop-color='#DC1FFF'
                      />
                    </linearGradient>
                    <linearGradient
                      id='paint2_linear_65_2'
                      x1='11.2151'
                      y1='-3.56598'
                      x2='2.05244'
                      y2='13.9842'
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

                <p className='md:text-[#808080] text-white md:text-sm text-[9px] whitespace-nowrap'>
                  Sol Chain
                </p>
                <MdKeyboardArrowDown className='md:text-[#808080] text-white ' />
              </div>
              <p className='text-[#808080] text-sm '>SOL: $175.13</p>
            </div>
          </div>
          <div className='flex items-center md:gap-10 md:justify-start justify-between md:w-auto w-full'>
            <div className='flex items-center gap-2.5 cursor-pointer'>
              <p className='text-[#808080] text-sm mt-1 md:block hidden'>
                Dark mood
              </p>
              <svg
                width='39'
                height='25'
                viewBox='0 0 39 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.4091 0H26.5909C29.882 4.94004e-08 33.0383 1.31696 35.3655 3.66116C37.6926 6.00537 39 9.18479 39 12.5C39 15.8152 37.6926 18.9946 35.3655 21.3388C33.0383 23.683 29.882 25 26.5909 25H12.4091C9.118 25 5.96169 23.683 3.63454 21.3388C1.30738 18.9946 0 15.8152 0 12.5C0 9.18479 1.30738 6.00537 3.63454 3.66116C5.96169 1.31696 9.118 4.94004e-08 12.4091 0ZM26.5909 17.8571C28.0014 17.8571 29.3541 17.2927 30.3514 16.2881C31.3488 15.2834 31.9091 13.9208 31.9091 12.5C31.9091 11.0792 31.3488 9.71659 30.3514 8.71193C29.3541 7.70727 28.0014 7.14286 26.5909 7.14286C25.1804 7.14286 23.8277 7.70727 22.8304 8.71193C21.833 9.71659 21.2727 11.0792 21.2727 12.5C21.2727 13.9208 21.833 15.2834 22.8304 16.2881C23.8277 17.2927 25.1804 17.8571 26.5909 17.8571Z'
                  fill='#F7F6EC'
                />
              </svg>
            </div>
            <div className='flex items-center gap-5'>
              <Link href=''>
                <FiSearch className='text-[#808080] text-[24px]' />
              </Link>
              <Link href=''>
                <svg
                  width='31'
                  height='31'
                  viewBox='0 0 31 31'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM6 16C6 14.8954 6.89543 14 8 14C9.10457 14 10 14.8954 10 16C10 17.1046 9.10457 18 8 18C6.89543 18 6 17.1046 6 16ZM16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6ZM14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16ZM24 6C22.8954 6 22 6.89543 22 8C22 9.10457 22.8954 10 24 10C25.1046 10 26 9.10457 26 8C26 6.89543 25.1046 6 24 6ZM22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16ZM8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22ZM14 24C14 22.8954 14.8954 22 16 22C17.1046 22 18 22.8954 18 24C18 25.1046 17.1046 26 16 26C14.8954 26 14 25.1046 14 24ZM24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22Z'
                    fill='url(#paint0_linear_0_37)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_0_37'
                      x1='-30'
                      y1='-35'
                      x2='27'
                      y2='40'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#7E7ED9' />
                      <stop
                        offset='1'
                        stop-color='#16E7AD'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <button className='bg_btn px-5 py-2 rounded-full transition-transform transform-gpu hover:scale-105'>
                Connect
              </button>
              <div className='lg:hidden'>
                <button
                  aria-controls='sidebar'
                  onClick={(e) => {
                    e.stopPropagation()
                    props.setSidebarOpen(!props.sidebarOpen)
                  }}
                  className='z-99999 block rounded-sm border border-stroke bg-transparent p-1.5 shadow-sm lg:hidden'
                >
                  <svg
                    stroke='currentColor'
                    fill='#fff'
                    stroke-width='0'
                    viewBox='0 0 16 16'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

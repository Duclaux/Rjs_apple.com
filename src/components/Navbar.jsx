import React, { useState } from 'react'
import { Container } from './Container'

import Apple from '../assets/apple.svg'
import Market from '../assets/market.svg'
import Search from '../assets/search.svg'

const Navbar = () => {

  const [ nav, setNav ] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <>
      {/* div principale */}
      <div className='bg-[#000000d2] backdrop-blur-md z-10 relative'>
        
        {/* conteneur de la navbar */}
        <Container>

          {/* div conteneur des groupe d'element */}
          <div className='flex items-center justify-between'>
            {/* group img */}
            <div className='z-10 xl:col-span-1 xl:w-fit xl:h-fit'>
              <img src={Apple} className='w-[25px] h-[30px]'/>
            </div>

            {/* groupe des lien */}
            <ul className={ nav ? 'text-white bg-[#00000065] xl:bg-transparent text-center absolute top-[100%] left-0 xl:relative xl:top-0 xl:text-start w-full xl:w-[80%] xl:flex xl:items-center justify-between duration-500' : 'text-white bg-[#00000065] xl:bg-transparent text-center absolute -top-[700px] left-0 xl:relative xl:top-0 xl:text-start w-full xl:w-[80%] xl:flex xl:items-center justify-between duration-500' }>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>Store</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>Mac</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>iPad</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>iPhone</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>Watch</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>Vision</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>AirPods</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>TV & Home</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>Entertainment</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 xl:mt-0'>Accessories</li>
              <li className='xl:cursor-pointer text-xl xl:text-[17px] mt-5 mb-5 xl:mb-0 xl:mt-0'>Support</li>
            </ul>

            {/* groupe des icone */}
            <div className='flex items-centerw-fit h-fit'>
              <img src={Search} alt="" className='w-[25px] h-[30px]'/>
              <img src={Market} alt="" className='w-[25px] h-[30px] ml-[30px]'/>

              <div className='ml-[30px] h-full my-auto xl:hidden' onClick={showNav}>
                <div className={nav ? 'w-[35px] h-1 bg-white rounded-sm rotate-45 duration-500' : 'w-[35px] h-1 bg-white rounded-sm duration-500'}></div>
                <div className={nav ? 'w-[35px] h-1 bg-white rounded-sm -rotate-45 -translate-y-1 duration-500' : 'w-[35px] h-1 bg-white rounded-sm mt-2 duration-500'}></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Navbar
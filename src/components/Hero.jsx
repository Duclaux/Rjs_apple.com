import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


import Figure1 from '../assets/Figure.png'
import Figure2 from '../assets/figure2.png'
import Figure2_1 from '../assets/figure1_2.png'
import Figure3 from '../assets/figure3.png'
import Apple from '../assets/apple.png'
import Arrow from '../assets/arrow.png'


const Hero = () => {

    //contenu du carousel
  const items = [
        // {/* carousel 1 */}
    <div className='relative'>
        <img src={Figure1} alt="" className='w-[100%] object-cover lg:object-contain h-[548px] lg:h-auto'/>

        {/* conteneur du text */}
        <div className='absolute bottom-[40px] lg:bottom-[130px] right-[50%] translate-x-[50%]'>
            <div className='flex items-center w-fit mx-auto'>
                <img src={Apple} alt="" className='w-[25px] h-[30px] lg:w-[50px] lg:h-[55px]'/>
                <h1 className='font-bold text-[30px] lg:text-6xl'>Vision Pro</h1>
            </div>

            <div className='text-center'>
                <h3 className='text-[19px] mt-[10px] lg:text[29px]'>Welcome to the era of <br className='lg:hidden'/>spatial computing.</h3>
                <p className='text-[17px] text-[#6E6E73] mt-[15px] lg:text[21px]'>Available starting 2.2</p>
                
                <div className='flex items-center justify-evenly w-auto mx-auto mt-[15px]'>
                    <div className='flex items-center cursor-pointer w-auto'>
                        <p className='text-[#0066CC] text-[17px] lg:text[21px]'>Learn more</p>
                        <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                    </div>

                    <div className='flex items-center justify-center ml-[5px] cursor-pointer w-auto'>
                        <p className='text-[#0066CC] text-[17px] lg:text[21px]'>Pre-order</p>
                        <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>,

            // {/* carousel 2 */}
    <div className='relative'>
        <img src={Figure2} alt="" className='hidden lg:flex w-[100%] object-cover lg:object-contain h-[548px] lg:h-auto'/>
        <img src={Figure2_1} alt="" className='w-[100%] object-cover h-[548px] lg:hidden'/>

        {/* conteneur du text */}
        <div className='absolute top-[90px] lg:top-[130px] right-[50%] translate-x-[50%]'>
            <div className='flex items-center w-fit mx-auto'>
                <h1 className='font-bold text-[27px] sm:text-[30px] lg:text-6xl text-white'>iPhone 15 Pro</h1>
            </div>

            <div className='text-center'>
                <h3 className='text-[19px] mt-[10px] lg:text[29px] text-white'>Titanium. So strong. <br className='sm:hidden'/>So light. So Pro.</h3>
                
                <div className='flex items-center justify-evenly w-auto  mx-auto mt-[15px]'>
                    <div className='flex items-center cursor-pointer w-[100px]'>
                        <p className='text-[#0066CC] text-[17px] lg:text[21px]'>Learn more</p>
                        <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                    </div>

                    <div className='flex items-center justify-center ml-[5px] cursor-pointer w-auto'>
                        <p className='text-[#0066CC] text-[17px] lg:text[21px]'>Buy</p>
                        <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>,


        // {/* carousel 3 */}
    <div className='relative'>
        <img src={Figure3} alt="" className='w-[100%] object-cover lg:object-contain h-[548px] lg:h-auto'/>

        {/* conteneur du text */}
        <div className='absolute top-[90px] lg:top-[130px] right-[50%] translate-x-[50%]'>
            <div className='flex items-center w-fit mx-auto'>
                <h1 className='font-bold text-[30px] lg:text-6xl'>iPhone 15</h1>
            </div>

            <div className='text-center'>
                <h3 className='text-[19px] mt-[10px] lg:text[29px]'>New camera. New design. Newphoria.</h3>
                
                <div className='flex items-center justify-evenly w-auto  mx-auto mt-[15px]'>
                    <div className='flex items-center cursor-pointer w-[100px]'>
                        <p className='text-[#0066CC] text-[17px] lg:text[21px]'>Learn more</p>
                        <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                    </div>

                    <div className='flex items-center justify-center ml-[5px] cursor-pointer w-auto'>
                        <p className='text-[#0066CC] text-[17px] lg:text[21px]'>Buy</p>
                        <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ]



  return (
    // block pour le carourel
    <div className=''>
        <div className='z-0 relative w-[100%]'>
            {/* composant gerant l'appel du carousel */}
            <AliceCarousel 
                items={items}
                autoPlay={true}
                infinite={true}
                autoPlayInterval={2000}
                mouseTracking={true}
            />
        </div>
    </div>
  )
}

export default Hero
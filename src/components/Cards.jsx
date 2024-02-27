import React from 'react'
import Arrow from '../assets/arrow.png'

function Cards(props) {

  return (
    <div className={`xl:col-span-1h-full w-full relative`}>
        <img 
            src={props.src_bg} 
            alt="" 
            className='object-cover h-[580px] lg:h-full w-full -z-10'
        />
        
        <div className={`absolute ${props.position} right-[50%] w-full text-center translate-x-[50%] ${props.txt_color}`}>
            <div className='flex items-center w-fit mx-auto'>
                <img src={props.src_app} alt="" className={`w-[20px] h-[25px] lg:w-[50px] lg:h-[55px] ${props.src_app}`}/>
                <h1 className='font-bold text-[23px] sm:text-[30px] lg:text-[38.28px]'>{props.txt1}</h1>
            </div>
            <p className={`text-red-500 uppercase font-bold text-[15px] w-fit mx-auto ${props.txt_red_style}`}>{props.text_red}</p>
            <h2 className='text-[20px] sm:text-[20px] font-light '>{props.txt2}</h2>

            <div className='flex items-center w-fit mx-auto mt-4'>
                <div className='flex items-center mr-[32px]'>
                    <p className='text-[#0066CC] text-[17px]'>{props.link1}</p>
                    <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                </div>

                <div className={`flex items-center ${props.link_style}`}>
                    <p className='text-[#0066CC] text-[17px]'>{props.link2}</p>
                    <img src={Arrow} alt="" className='w-[8px] lg:w-[10px] ml-[2px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
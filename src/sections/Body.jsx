import React from 'react'
import Cards from '../components/Cards'
import AppleBlack from '../assets/apple.png'
import AppleWhite from '../assets/apple2.png'
import Bg_app1 from '../assets/bg_app1.png'
import Bg_app2 from '../assets/watch.png'
import Bg_app3 from '../assets/watch2.png'
import Bg_app4 from '../assets/mac.png'
import Bg_app5 from '../assets/card.png'
import Bg_app6 from '../assets/phone.png'


const Body = () => {
  return (
    <>
      <div className='h-full w-full z-10 xl:grid xl:grid-cols-2 xl:gap-3 xl:px-5 mt-5'>
          <Cards
            src_bg={Bg_app1} 
            src_app='hidden' 
            txt_red='hidden' 
            txt1='Valentine’s Day' 
            txt2='Find the perfect gift.'
            link1='Shop'
            position='bottom-[30px]'
          />

          <Cards
            src_bg={Bg_app2} 
            src_app={AppleWhite}
            txt_color='text-white'
            txt_red='series 9'
            txt_red_style='flex'
            txt1='watch' 
            txt2='Smarter. Brighter. Mightier.'
            link1='Learn more'
            link2='Buy'
            position='top-[70px]'
          />

          <Cards
            src_bg={Bg_app3} 
            src_app={AppleBlack}
            txt_color='text-black'
            txt_red='ultra 2'
            txt_red_style='flex'
            txt1='watch' 
            txt2='Next level adventure.'
            link1='Learn more'
            link2='Buy'
            position='top-[70px]'
          />

          <Cards 
            src_bg={Bg_app4} 
            src_app='hidden'
            txt_color='text-black'
            txt_red='ultra 2'
            txt_red_style='hidden'
            link2_style='flex'
            txt1='MacBook Pro' 
            txt2='Mind-blowing. Head-turning.'
            link1='Learn more'
            link2='Buy'
            position='top-[70px]'
          />

          <Cards
            src_bg={Bg_app5} 
            src_app={AppleBlack}
            txt_color='text-black'
            txt_red='ultra 2'
            txt_red_style='hidden'
            link2_style='flex'
            txt1='Card' 
            txt2={["Get up to 3% Daily Cash back",<br/>," with every purchase."]}
            link1='Learn more'
            link2='Apply now'
            position='top-[70px]'
          />

          <Cards
            src_bg={Bg_app6} 
            src_app={AppleBlack}
            txt_color='text-black'
            txt_red='ultra 2'
            txt_red_style='hidden'
            link_style='hidden'
            txt1='Trad In' 
            txt2={["Get $180-$620 in credit when",<br/>," you trade in iPhone 11 or higher."]}
            link1='See what your device is worth'
            link2='Apply now'
            position='top-[70px]'
          />
      </div>
    </>
  )
}

export default Body
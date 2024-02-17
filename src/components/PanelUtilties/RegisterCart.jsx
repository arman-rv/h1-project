import React from 'react'
import { ButtonDarkGreen } from '../common/ButtonDarkGreen/ButtonDarkGreen'
import { SliderCart } from './SliderCart/SliderCart'


const RegisterCart = () => {
  return (
      <div className='w-[100%] h-[30%] py-2 bg-white flex flex-col justify-center items-center rounded-md shadow-cardShadow'>
          <SliderCart/>
     </div>            
  )
}

export  {RegisterCart}
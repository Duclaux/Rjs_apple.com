import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='w-auto xl:w-[1200px] p-[16px] xl:px-0 mx-auto'>
        {children}
    </div>
  )
}

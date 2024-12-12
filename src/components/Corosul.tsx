import React from 'react'
import banner from '../../public/image/Banner.jpg'
import Image from 'next/image'
const Corosul = () => {
  return (
    <>
     <Image
      src={banner}
      width={1200}
      height={500}
      alt="Picture of the author"
      className='mx-auto'
    />
    </>
  )
}

export default Corosul
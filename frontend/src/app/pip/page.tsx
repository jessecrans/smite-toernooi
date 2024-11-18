import React from 'react'
import Image from 'next/image'

const Pip = () => {
  return (
    <main className="flex justify-center items center w-full h-screen">
      <Image
        src="/pip.jpg"
        alt="Pip"
        width={300}
        height={300}
        className="object-contain max-w-full max-h-screen w-full"
      />
    </main>
  )
}

export default Pip
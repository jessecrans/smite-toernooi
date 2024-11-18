import React from 'react'
import Image from 'next/image'

const Pip = () => {
  return (
    <main className="flex justify-center items center">
      <Image
        src="/pip.jpg"
        alt="Pip"
        width={300}
        height={300}
        className="max-w-screen-sm w-full overflow-y-hidden aspect-auto"
      />
    </main>
  )
}

export default Pip
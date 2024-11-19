import React from 'react'
import { getPlayer } from '@/app/utils/utils'
import Image from 'next/image'

const PlayerRow = ({
  name
}: {
  name: string
}) => {
  const player = getPlayer(name)
  return (
    <div className='w-full grid grid-cols-2 items-center p-4 mt-2 text-smite-text-blue border-smite-light-blue border-2 bg-gradient-to-t from-smite-dark-blue to-smite-blue hover:border-smite-text-blue hover:text-smite-text-white hover:from-smite-accent-blue-1 hover:to-smite-accent-blue-2 duration-500'>
      <p className=''>{player.rank}</p>
      <p className=''>{player.name}</p>
    </div>
  )
}

export default PlayerRow
import React from 'react'
import { getPlayers } from '../utils/utils'
import Image from 'next/image'
import PlayerRow from './components/PlayerRow'

const Players = () => {
  const players = getPlayers().sort((a, b) => a.rank - b.rank)

  return (
    <main className="flex flex-col justify-start items-center p-2 pt-12 w-full">
      {players.map(player => (
        <PlayerRow key={player.name} name={player.name} />
      ))}
    </main>
  )
}

export default Players
import React from 'react'

const PlayerPage = async ({
  params
}: {
  params: Promise<{ player: string }>
}) => {
  const player = (await params).player
  return (
    <main className='flex justify-start items-center pt-12'>
      <h1 className='text-smite-text-white'>Player {player} page under construction.</h1>
    </main>
  )
}

export default PlayerPage
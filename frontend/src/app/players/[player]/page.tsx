'use client'
import React from 'react'

const PlayerPage = ({
  params
}: {
  params: {
    player: string
  }
}) => {
  return (
    <h1>PlayerPage {params.player}</h1>
  )
}

export default PlayerPage
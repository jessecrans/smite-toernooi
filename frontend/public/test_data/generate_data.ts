const players = [
  "YellowVarik",
  "DrVanox",
  "jspr03",
  "GSkillz",
  "Abstuz",
]

interface Player {
  name: string
  image: string
  rank: number
  wins: number
  losses: number
  kills: number
  deaths: number
  damage: number
  healing: number
  average_damage: number
  average_healing: number
  average_gpm: number
}

interface MatchStats {
  kills: number
  deaths: number
  damage: number
  healing: number
  gpm: number
}

enum Side { ORDER, CHAOS }

interface Match {
  match_id: number
  played: boolean
  duration: number
  winner: Side
  order_player: string
  chaos_player: string
  order_stats: MatchStats
  chaos_stats: MatchStats
}

// function get_player(name: string): Player {
//   return {

//   }
// }

// function get_players(): Player[] {
//   return players
// }

// function get_match_history(): Match[] {
//   return [

//   ]
// }

// function get_all_matches(): Match[] {
//   return [

//   ]
// }

// function get_match(match_id: number): Match {
//   return {

//   }
// }

// function get_next_match(): Match {
//   return {

//   }
// }
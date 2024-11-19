export function hasStarted(): boolean {
  return false;
}

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

export function getPlayers(): Player[] {
  return players.map((name, index) => {
    return {
      name,
      image: "/pip.jpg",
      rank: index + 1,
      wins: 0,
      losses: 0,
      kills: 0,
      deaths: 0,
      damage: 0,
      healing: 0,
      average_damage: 0,
      average_healing: 0,
      average_gpm: 0,
    }
  })
}

export function getPlayer(name: string): Player {
  return {
    name,
    image: "/pip.jpg",
    rank: 1,
    wins: 0,
    losses: 0,
    kills: 0,
    deaths: 0,
    damage: 0,
    healing: 0,
    average_damage: 0,
    average_healing: 0,
    average_gpm: 0,
  }
}
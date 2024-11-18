interface MatchScore {
  kills: number;
  deaths: number;
  damage: number;
  healing: number;
  gold_per_minute: number;
}

interface Match {
  winner: string | null;
  order_player: string;
  chaos_player: string;
  duration: number | null;
  order_score: MatchScore | null;
  chaos_score: MatchScore | null;
}

const player_names: string[] = [
  "DrVanox",
  "YellowVarik",
  "GSkillz",
  "Abstuz",
  "jspr03",
];

function generateRandomMatchScore(): MatchScore {
  return {
    kills: Math.floor(Math.random() * 10),
    deaths: Math.floor(Math.random() * 10),
    damage: Math.floor(Math.random() * 10000),
    healing: Math.floor(Math.random() * 10000),
    gold_per_minute: Math.floor(Math.random() * 1000),
  }
}

function generateRandomMatch(order_player: string, chaos_player: string): Match {
  let winner = ["order", "chaos", null][Math.floor(Math.random() * 3)];
  if (!winner) {
    return {
      winner: winner,
      order_player: order_player,
      chaos_player: chaos_player,
      duration: null,
      order_score: null,
      chaos_score: null,
    }
  } else {
    return {
      winner: winner,
      order_player: order_player,
      chaos_player: chaos_player,
      duration: Math.floor(Math.random() * 1800),
      order_score: generateRandomMatchScore(),
      chaos_score: generateRandomMatchScore(),
    }
  }
}
use axum::{
    extract::Path, http::StatusCode, routing::get, Json, Router
};
use serde::Serialize;

const YV: Player = Player {
    name: "Player1",
    image: "https://smite.hugovanschalm.nl/_next/image?url=%2Fpip.jpg&w=384&q=75",
    rank: 1,
    wins: 100,
    losses: 2,
    kills: 8000,
    deaths: 3,
    damage: 1_000_000,
    healing: 80,
    average_damage: 850.32,
    average_healing: 10.18,
    average_gpm: 428_000.45,
};

const  STUZ: Player = Player {
    name: "Player2",
    image: "https://smite.hugovanschalm.nl/_next/image?url=%2Fpip.jpg&w=384&q=75",
    rank: 2,
    wins: 2,
    losses: 100,
    kills: 3,
    deaths: 8000,
    damage: 4,
    healing: 2,
    average_damage: 0.00004,
    average_healing: 0.001003,
    average_gpm: 2.38,
};

#[tokio::main] 
async fn main() {
    let app = Router::new()
        .route("/", get(root))
        .route("/get_player/:name", get(get_player))
        .route("/get_players", get(get_players));

    let listener = tokio::net::TcpListener::bind("127.0.0.1:5000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> &'static str {
    "Welkom bij het Smite toernooi API"
}

#[axum::debug_handler]
async fn get_player(Path(player): Path<String>) -> (StatusCode, Json<PlayerResponse>) {
    match player.as_str() {
        "player1" => (StatusCode::OK, Json(PlayerResponse::Success(YV.clone()))),
        "player2" => (StatusCode::OK, Json(PlayerResponse::Success(STUZ.clone()))),
        _ => (StatusCode::NOT_FOUND, Json(PlayerResponse::Error(Error::new("player not found")))),
    }
}

async fn get_players() -> (StatusCode, Json<Vec<Player>>) {
    (
        StatusCode::OK,
        Json(vec![YV.clone(), STUZ.clone()])
    )
}

#[derive(Serialize)]
enum PlayerResponse {
    Error(Error),
    Success(Player),
}

#[derive(Serialize, Clone)]
struct Player {
    name: &'static str,
    image: &'static str,
    rank: u32,
    wins: u32,
    losses: u32,
    kills: u32,
    deaths: u32,
    damage: u32,
    healing: u32,
    average_damage: f32,
    average_healing: f32,
    average_gpm: f32,
}

#[derive(Serialize)]
struct Error {
    message: &'static str,
}

impl Error {
    pub fn new(msg: &'static str) -> Error {
        Error {
            message: msg,
        }
    }
}
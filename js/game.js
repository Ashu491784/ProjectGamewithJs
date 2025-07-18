//game constans
const GAME_WIDTH = 1000;
const GAME_HEIGHT = 650;
const PLAYER_SPEED = 7;
const BULLET_SPEED = 9;
const ENEMY_SPEED = 3;
const POWERUP_SPAWN_RATE = 0.03;
const LEVEL_SCORE_INCRESEMENT = 1500;
const PLAYER_INVULNERABILITY_TIME = 2000;

//game variables
let canvas, ctx; //two variables
let gameRunning = false;
let gamePause = false;
let score = 0;
let level = 1;
let playerHealth = 100;
let playerPower = 0;
let enamies = [];
let bullets = [];
let powerUps = [];

let key = {}
let lastTime = 0;
let enemySpawnRate = 60;
let frameCount = 0;

let lastHitTime = 0;
let isPlayerInvulnerable = false;
let invulnerabilityTime = 0;

const images =  {
    player: null,
    enemies: [],
    bullets: null,
    powerups:{
        rapid: null,
        shield: null,
        speed: null
    }
}

function loadImages(){
    return new Promise((resolve) => { //asincronize functions control karanna
        let imagesLoaded = 0;
        const totalImages = 7; //player + enermy 3 + powerup 3

        //load players
        images.player = new Image ();
        images.player.src = 'assets/images/magician.png';
        images.player.onload = () => {
            imagesLoaded++;
            if(imagesLoaded === totalImages) resolve(); //statement ekak thiyene  nisaa braket dla na
        }

    })
}

async function init () {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2D');

    await loadImages();
}

window.addEventListener('load', init);



let player

const WIDTH = 400
const HEIGHT = 500
const PLAYER_RADIUS = 20

let aX = 0
let aY = 0

let objects = []
let maxObjects = 5

function setup() {
	createCanvas(WIDTH, HEIGHT)
	i = 0

  	player = new Player(WIDTH / 2, HEIGHT - PLAYER_RADIUS, PLAYER_RADIUS)
	handler = []
}

function draw() {
	background(0)
	checkInputs()
	
	handleObjects()
	handlePlayer()
}

/**
 * OBJECTS
 */
function handleObjects() {
	genObjects()
	for(i = 0; i < objects.length; i++) {

	}
	objects.map(object => {
		object.show()
		object.move(0, 2)
	})

	objects = objects.filter(object => object.getY() < HEIGHT)
}

function genObjects() {
	if(objects.length < maxObjects) {
		const radius = random(20, 40)
		let o = new BasicObject(random(0 + radius, WIDTH), 0, radius)
		objects.push(o)
	}
}

/**
 * PLAYER
 */
function handlePlayer() {
	player.show()
	player.move(aX, aY)
	if(player.getX() < 0) player.setX(WIDTH)
	if(player.getX() > WIDTH) player.setX(0)
	if(player.getY() < 0) player.setY(HEIGHT)
	if(player.getY() > HEIGHT) player.setY(0)
}

function checkInputs() {
	if (keyIsDown(LEFT_ARROW)) aX = -5
	else {
		if (keyIsDown(RIGHT_ARROW)) aX = 5
		else aX = 0
	}
	if (keyIsDown(UP_ARROW)) aY = -5
	else {
		if (keyIsDown(DOWN_ARROW)) aY = 5
		else aY = 0
	}	
}


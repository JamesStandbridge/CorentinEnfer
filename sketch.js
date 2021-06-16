let player

const WIDTH = 400
const HEIGHT = 500
const PLAYABLE_AREA = HEIGHT
const PLAYER_RADIUS = 20

let aX = 0
let aY = 0

let gamespeed = 0.1
let objects = []
let maxObjects = 10
let collisions = 0

function setup() {
	createCanvas(WIDTH, HEIGHT)
	textSize(20);

  	player = new Player(WIDTH / 2, HEIGHT - PLAYER_RADIUS, PLAYER_RADIUS)
	genWall()
}

function draw() {
	console.log(collider.test())
	background(0)
	checkInputs()
	fill(255);
 	text(`collisions : ${collisions}`, 20, 20);
	handleObjects()
	handlePlayer()
}

/**
 * OBJECTS
 */
function handleObjects() {
	//genObjects()

	objects.map(object => {
		object.show()
		object.translate(gamespeed)
		if(object.isCollidingWithCircle(player)) {
			collisions++
			object.setColor(255,255,0)
		} else {
			object.setColor(255,255,255)
		}
	})

	objects = objects.filter(object => {
		return object.isInScreen(HEIGHT)
	})	
}

function genWall() {
	objects.push(new WallObject(0, WIDTH, 50, 200, 300, 0))
}

function genObjects() {
	if(objects.length < maxObjects) {
		const radius = random(20, 40)
		let o = new CircleObject(random(0 + radius, WIDTH), 0, radius)
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
	if(player.getY() < HEIGHT - PLAYABLE_AREA) player.setY(HEIGHT - PLAYABLE_AREA)
	if(player.getY() + (player.getRadius() / 2) > HEIGHT) player.setY(HEIGHT - (player.getRadius() / 2))
}

function checkInputs() {
	if (keyIsDown(LEFT_ARROW)) aX = -3
	else {
		if (keyIsDown(RIGHT_ARROW)) aX = 3
		else aX = 0
	}
	if (keyIsDown(UP_ARROW)) aY = -3
	else {
		if (keyIsDown(DOWN_ARROW)) aY = 3
		else aY = 0
	}	
}


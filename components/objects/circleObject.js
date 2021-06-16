import Collider 

class CircleObject {

    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius

        this.r = 255
        this.g = 255
        this.b = 255
    }
    
    move(aX = 0, aY = 0) {
        this.x += aX
        this.y += aY
    }

    translate(speed) {
        this.y += speed
        this.x += 0.5
    }
  
    show() {
        fill(this.r, this.g, this.b)
        circle(this.x, this.y, this.radius)
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getRadius() {
        return this.radius
    }

    setX(x) {
        this.x = x
    }

    setY(y) {
        this.y = y
    }

    setColor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }

    isInScreen(height) {
        return this.y - (this.radius / 2) < height
    }

    isCollidingWithPlayer(player) {
        const dx = player.getX() - this.x
        const dy = player.getY() - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        return distance < (player.getRadius() / 2) + (this.radius / 2)
    } 
}
class WallObject {

    constructor(start, end, height, x1, x2, y) {
        this.start = start
        this.end = end
        this.height = height

        this.x1 = x1
        this.x2 = x2

        this.y = y

        this.collider = new Collider()

        this.r = 255
        this.g = 255
        this.b = 255
    }

    translate(speed) {
        this.y += speed
    }
  
    show() {
        fill(this.r, this.g, this.b)
        rect(this.start, this.y, this.x1 - this.start, this.height)
        fill(this.r, this.g, this.b)
        rect(this.x2, this.y, this.end - this.x2, this.height)
        
    }

    setColor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }

    getY() {
        return this.y
    }

    getX() {
        return this.x
    }

    isInScreen() {
        return true
    }

    isCollidingWithCircle(circle) {
        const left = this.collider.rect_circle(
            player.getRadius() / 2
            player.getX(),
            player.getY(),
            this.start,
            this.y,
            this.x1 - this.start,
            this.height
        ) 
        const right = this.collider.rect_circle(
            player.getRadius() / 2
            player.getX(),
            player.getY(),
            this.x2,
            this.y,
            this.end - this.x2,
            this.height
        )
        return left || right
    }
}


/**
 *
 * start        x1      x2         end
 *
 * 
 */
class BasicObject {

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

    setX(x) {
        this.x = x
    }

    setY(y) {
        this.y = y
    }
}
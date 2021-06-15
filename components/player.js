class Player {
  
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius


        this.r = 0
        this.g = 255
        this.b = 0
    }
    
    move(aX, aY) {
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
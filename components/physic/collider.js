class Collider {
	constructor() {}

	rect_circle(cRadius, cX, cY, rectX, rectY, rectW, rectH) {
		const distX = Math.abs(cX - rectX - rectW / 2)
		const distY = Math.abs(cY - rectY - rectH / 2)

		if(distX > (rectW / 2 + cRadius)) return false
		if(distY > (rectH / 2 + cRadius)) return false

		if(distX <= (rectW / 2)) return true
		if(distY <= (rectH / 2)) return true

		const dx = distX - rectW / 2
		const dy = distY - rectH / 2

		return (dx*dx + dy*dy <= cRadius*cRadius)
	}
}
import { HEIGHT } from "./window"

/**
 * @param {HTMLCanvasElement} canvas
 * @param {Player} player
 */
export function startGame(canvas, player) {
    const context = canvas.getContext("2d")
    gameLoop(canvas, context, {})
}

/**
 * @param {HTMLCanvasElement} canvas 
 * @param {CanvasRenderingContext2D} context 
 * @param {{}} options 
 */
function gameLoop(canvas, context, options) {
    context.clearRect(0, 0, canvas.width, canvas.height)

    const height = canvas.height
    const heightPixels = Math.floor(height / HEIGHT)

    context.fillRect(0, 0, Math.floor(heightPixels / 2), heightPixels)

    requestAnimationFrame(() => 
        gameLoop(canvas, context, options)
    )
}

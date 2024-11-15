export const WIDTH = 32
export const HEIGHT = 24

/**
 * @param {HTMLCanvasElement} canvas
 * @param {CanvasProjectable} projectable
 * @returns [number, number]
 */
export function project(canvas, projectable) {
    const normWidth = canvas.width / WIDTH
    const normHeight = canvas.height / HEIGHT
    projectable.renderX = Math.floor(projectable.pos.x * normWidth);
    projectable.renderY = Math.floor(projectable.pos.y * normHeight);
    projectable.renderWidth = Math.floor(projectable.width * normWidth);
    projectable.renderHeight = Math.floor(projectable.height * normHeight);
}

/**
 * @param {HTMLCanvasElement} canvas
 */
export function resizeCanvas(canvas) {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const wRatio = width / WIDTH
    const hRatio = height / HEIGHT

    if (wRatio > hRatio) {
        width -= (wRatio - hRatio) * WIDTH
    } else {
        height -= (hRatio - wRatio) * HEIGHT
    }

    canvas.width = Math.floor(width)
    canvas.height = Math.floor(height)
}

/**
 * @param {HTMLCanvasElement} canvas
 */
export function listenToChanges(canvas) {
    window.addEventListener("resize", function() {
        resizeCanvas(canvas);
    });
}

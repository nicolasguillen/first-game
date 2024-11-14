import { startGame } from "./game";
import { resizeCanvas, listenToChanges } from "./window"

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("game_canvas"))
listenToChanges(canvas);
resizeCanvas(canvas);
startGame(canvas, {name: "foo", score: 69})

import { listenToInput } from "./input/input.js";
import * as Player from "./objects/player.js";

/**
 * @param {HTMLCanvasElement} canvas
 * @param {GameOptions} gameopts
 */
export function startGame(canvas, gameopts) {
    const context = canvas.getContext("2d");
    const state = /** @type {GameState} */ {
        opts: gameopts,
        player: Player.createPlayer(gameopts.player),
        loopStartTime: 0,
        context,
        input: [],
    };
    context.imageSmoothingEnabled = false;
    listenToInput(state.input)
    window.addEventListener("resize", function() {
    });
    gameLoop(state)
}

/**
 * @param {GameState} state 
 * @returns {Promise}
 */
async function gameLoop(state) {
    let lastTime = Date.now();
    while (true) {
        await (new Promise(res => setTimeout(res, 33)));
        const nextTime = Date.now();
        state.loopStartTime = nextTime;

        const delta = nextTime - lastTime;
        Player.update(state, delta);
        state.context.clearRect(0, 0, state.context.canvas.width, state.context.canvas.height);
        Player.render(state);
        lastTime = nextTime;
    }
}

import { Vector2D } from "../math/vector.js";
import * as Window from "../window.js";

const leftKey = "ArrowLeft";
const rightKey = "ArrowRight";

/** 
 * @param {PlayerOpts} opts
 * @returns {Player}
 */
export function createPlayer(opts) {
    return {
        opts: opts,
        pos: new Vector2D(0, 0),
        acc: new Vector2D(0, 0),
        vel: new Vector2D(0, 0),
        width: 1,
        height: 1,
        keyDown: [],
        renderWidth: 0,
        renderHeight: 0,
        renderX: 0,
        renderY: 0,
        renderColor: "#FF0000",
    };
}


/**
 * @param {Player} player
 * @param {GameState} gameState
 * @param {number} delta
 */
function handleInput(player, gameState, delta) {
    const pageLoadTime = performance.timeOrigin;
    const keyDownMap = { };
    for (const k of gameState.input) {
        const remaining = gameState.loopStartTime - (pageLoadTime + k.timeStamp)
        if (k.type === "keydown" && !player.keyDown.includes(k.key) && !keyDownMap[k.key]) {
            if (k.key === leftKey) {
                player.pos.x -= (remaining / 1000) * player.opts.normWidthsPerSecond;
            } else if (k.key === rightKey) {
                player.pos.x += (remaining / 1000) * player.opts.normWidthsPerSecond;
            }
            keyDownMap[k.key] = true;
        } else if (k.type === "keyup") {
            const idx = player.keyDown.indexOf(k.key)
            keyDownMap[k.key] = false;
            if (idx === -1) {
                continue
            }
            const remainingDown = delta - remaining;
            if (k.key === leftKey) {
                player.pos.x -= (remainingDown / 1000) * player.opts.normWidthsPerSecond;
            } else if (k.key === rightKey) {
                player.pos.x += (remainingDown / 1000) * player.opts.normWidthsPerSecond;
            }
            player.keyDown.splice(idx, 1);
        }
    }
    for (const k of player.keyDown) {
        if (k === leftKey) {
            player.pos.x -= (delta / 1000) * player.opts.normWidthsPerSecond;
        } else if (k === rightKey) {
            player.pos.x += (delta / 1000) * player.opts.normWidthsPerSecond;
        }
    }
    for (const [k, v] of Object.entries(keyDownMap)) {
        if (v && !player.keyDown.includes(k)) {
            player.keyDown.push(k)
        }
    }
    gameState.input.length = 0;
}

/**
 * @param {Player} player
 * @param {GameState} gameState
 * @param {number} delta
 */
function updatePosition(player, gameState, delta) {
    const deltaNorm = delta / 1000;
    player.vel.add(gameState.opts.gravity.multiplyCopy(deltaNorm));
    const scaledVel = player.vel.multiplyCopy(delta / 1000)
    const nextPos = player.pos.addCopy(scaledVel);
    player.pos.set(nextPos.x, nextPos.y)
}

/**
 * @param {GameState} gameState
 */
export function render(gameState) {
    const player = gameState.player
    const context = gameState.context;
    context.fillRect(player.renderX, player.renderY, player.renderWidth, player.renderHeight);
    context.fillStyle = player.renderColor;
}

/**
 * @param {GameState} gameState
 * @param {number} delta
 */
export function update(gameState, delta) {
    const player = gameState.player
    updatePosition(player, gameState, delta);
    handleInput(player, gameState, delta);
    Window.project(gameState.context.canvas, player);
}

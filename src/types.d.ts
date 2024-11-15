import { Vector2D } from "./math/vector.js";

export { };

declare global {
  type GameOptions = {
    player: PlayerOpts,
    gravity: Vector2D,
  }
  type PlayerOpts = {
    normWidthsPerSecond: number,
  }
  type Player = {
    opts: PlayerOpts,
    pos: Vector2D,
    vel: Vector2D,
    acc: Vector2D,
    width: number,
    height: number,
    keyDown: string[],
    renderWidth: number,
    renderHeight: number,
    renderX: number,
    renderY: number,
    renderColor: string,
  }
  type InputMessage = {
    time: number,
    type: "down" | "up",
    key: string,
  }
  type GameState = {
    opts: GameOptions
    player: Player
    context: CanvasRenderingContext2D
    input: KeyboardEvent[]
    loopStartTime: number,
  }
  type CanvasProjectable = {
    pos: Vector2D,
    width: number,
    height: number,
    renderX: number,
    renderY: number,
    renderWidth: number,
    renderHeight: number,
  }
}

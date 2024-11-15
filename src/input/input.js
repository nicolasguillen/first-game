/**
 * @param {KeyboardEvent[]} out
 */
export function listenToInput(out) {
    window.addEventListener("keydown", function(event) {
        out.push(event);
    })

    window.addEventListener("keyup", function(event) {
        out.push(event);
    })
}

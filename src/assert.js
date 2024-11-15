/** 
 * @param {string} msg
 */
function runAssert(msg) {
    throw new Error(msg)
}

/** 
 * @param {string} msg
 */
export function never(msg) {
    runAssert(msg);
}

/** 
 * @param {boolean} truthy 
 * @param {string} msg 
 */
export function assert(truthy, msg) {
    if (!truthy) {
        runAssert(msg);
    }
}

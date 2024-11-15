/**
 * A class representing a 2D vector with various methods for game development.
 * @class
 */
export class Vector2D {
    /**
     * @constructor
     * @param {number} x - The x component of the vector.
     * @param {number} y - The y component of the vector.
     */
    constructor(x = 0, y = 0) {
        /** @type {number} */
        this.x = x;
        /** @type {number} */
        this.y = y;
    }
    /**
     * @param {number} x - The new x component.
     * @param {number} y - The new y component.
     * @returns {Vector2D} The current instance for chaining.
     */
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * @param {Vector2D} v - The vector to add.
     * @returns {Vector2D} The current instance for chaining.
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    /**
     * @param {Vector2D} v - The vector to add.
     * @returns {Vector2D} The current instance for chaining.
     */
    addCopy(v) {
        return new Vector2D(this.x + v.x, this.y + v.y);
    }

    /**
     * @param {Vector2D} v - The vector to subtract.
     * @returns {Vector2D} The current instance for chaining.
     */
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    /**
     * @param {number} scalar - The scalar to multiply by.
     * @returns {Vector2D} The current instance for chaining.
     */
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    /**
     * @param {number} scalar - The scalar to multiply by.
     * @returns {Vector2D} The current instance for chaining.
     */
    multiplyCopy(scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    }

    /**
     * @param {number} scalar - The scalar to divide by.
     * @returns {Vector2D} The current instance for chaining.
     */
    divide(scalar) {
        if (scalar !== 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
        return this;
    }

    /**
     * @returns {number} The magnitude of the vector.
     */
    magnituteSquared() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * @returns {number} The magnitude of the vector.
     */
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * @returns {Vector2D} The current instance for chaining.
     */
    normalize() {
        const length = this.magnitude();
        if (length !== 0) {
            this.x /= length;
            this.y /= length;
        }
        return this;
    }

    /**
     * @param {Vector2D} v - The other vector.
     * @returns {number} The dot product.
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * @param {Vector2D} v - The other vector.
     * @returns {number} The distance.
     */
    distanceTo(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @returns {Vector2D} A new instance with the same x and y components.
     */
    clone() {
        return new Vector2D(this.x, this.y);
    }

    /**
     * @returns {string} The string representation.
     */
    toString() {
        return `V2(${this.x}, ${this.y})`;
    }

    /**
     * @param {Vector2D} v - The vector to compare.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    equals(v) {
        return this.x === v.x && this.y === v.y;
    }
}

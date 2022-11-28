export class GenerateHashCommand {
    /**
     * @returns {GenerateHashCommand}
     */
    static new() {
        return new this();
    }

    /**
     * @private
     */
    constructor() {

    }

    /**
     * @param {Blob | Buffer | string} value
     * @param {string} algorithm
     * @returns {Promise<string>}
     */
    async generateHash(value, algorithm) {
        return Array.from(new Uint8Array(await crypto.subtle.digest(algorithm, new TextEncoder().encode(value instanceof Blob ? await value.text() : value)))).map(x => x.toString(16).padStart(2, "0")).join("");
    }
}

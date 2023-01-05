export class HashService {
    /**
     * @returns {HashService}
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
     * @param {number | null} radix
     * @returns {Promise<string>}
     */
    async generateHash(value, algorithm, radix = null) {
        return (await import("../Command/GenerateHashCommand.mjs")).GenerateHashCommand.new()
            .generateHash(
                value,
                algorithm,
                radix
            );
    }
}

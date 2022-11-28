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
     * @returns {Promise<string>}
     */
    async generateHash(value, algorithm) {
        return (await import("../Command/GenerateHashCommand.mjs")).GenerateHashCommand.new()
            .generateHash(
                value,
                algorithm
            );
    }
}

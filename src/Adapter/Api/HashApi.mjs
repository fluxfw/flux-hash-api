/** @typedef {import("../../Service/Hash/Port/HashService.mjs").HashService} HashService */

export class HashApi {
    /**
     * @type {HashService | null}
     */
    #hash_service = null;

    /**
     * @returns {HashApi}
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
        return (await this.#getHashService()).generateHash(
            value,
            algorithm,
            radix
        );
    }

    /**
     * @returns {Promise<HashService>}
     */
    async #getHashService() {
        this.#hash_service ??= (await import("../../Service/Hash/Port/HashService.mjs")).HashService.new();

        return this.#hash_service;
    }
}

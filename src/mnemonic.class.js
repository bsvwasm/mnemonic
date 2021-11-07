"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mnemonic = void 0;
var bsv_wasm_1 = require("bsv-wasm");
var unorm_1 = __importDefault(require("unorm"));
var Mnemonic = /** @class */ (function () {
    function Mnemonic(phrase, words, spacer) {
        var _this = this;
        if (spacer === void 0) { spacer = ' '; }
        var _a, _b, _c;
        this.words = words;
        this.spacer = spacer;
        this._passphrase = '';
        this.entropy = '';
        this.checksum = '';
        this.bits = 0;
        this.mnemonic = phrase.split(this.spacer);
        if (((_a = this.mnemonic) === null || _a === void 0 ? void 0 : _a.length) === 13 || ((_b = this.mnemonic) === null || _b === void 0 ? void 0 : _b.length) === 25) {
            this._passphrase = ((_c = this.mnemonic) === null || _c === void 0 ? void 0 : _c.pop()) || '';
        }
        if (this.mnemonic.length < 12)
            throw new Error("Mnemonic must contain at least 128 bits of entropy");
        if (this.mnemonic.length % 3 !== 0)
            throw new Error("Mnemonic entropy must be a multiple of 32 bits");
        this.entropy = this.mnemonic.map(function (m) {
            var n = _this.words.indexOf(m);
            if (n < 0)
                throw new Error("Invalid word in mnemonic: " + m);
            return n.toString(2).padStart(11, '0');
        }).join('');
        this.checksum = this.entropy.slice(Math.floor(this.entropy.length / 33 * 32));
        this.bits = this.entropy.length - this.checksum.length;
    }
    Mnemonic.prototype.getPassphrase = function () {
        return this._passphrase;
    };
    Mnemonic.prototype.setPassphrase = function (passphrase) {
        this._passphrase = passphrase;
    };
    Mnemonic.fromBinary = function (binary, words, spacer) {
        var _a, _b;
        if (spacer === void 0) { spacer = ' '; }
        if (binary.length % 33 !== 0) {
            if (binary.length % 32 !== 0) {
                throw new Error("Entropy bits must be a multiple of 32 bits, or 33 bits with a checksum, and no smaller than 128 bits in length");
            }
            var bytes = new Uint8Array(((_a = binary.match(/[0-1]{8}/g)) === null || _a === void 0 ? void 0 : _a.map(function (n) { return parseInt(n, 2); })) || []);
            return this.fromBytes(bytes, words, spacer);
        }
        return new this(((_b = binary.match(/[0-1]{11}/g)) === null || _b === void 0 ? void 0 : _b.map(function (n) { return words[parseInt(n, 2)]; }).join(spacer)) || '', words, spacer);
    };
    Mnemonic.fromBytes = function (bytes, words, spacer) {
        if (spacer === void 0) { spacer = ' '; }
        if (bytes.length % 4 !== 0 || bytes.length < 16)
            throw new Error("Entropy bytes must be a multiple of 32 bits and no smaller than 128 bits");
        var h = bsv_wasm_1.Hash.sha256(bytes).toBytes();
        var b = '';
        bytes.forEach(function (byte) {
            b += byte.toString(2).padStart(8, '0');
        });
        h.forEach(function (byte) {
            b += byte.toString(2).padStart(8, '0');
        });
        return this.fromBinary(b.slice(0, bytes.length * 8 + Math.floor(bytes.length / 4)), words, spacer);
    };
    Mnemonic.fromHex = function (hex, words, spacer) {
        var _a;
        if (spacer === void 0) { spacer = ' '; }
        return this.fromBytes(new Uint8Array(((_a = hex.match(/([\da-f]){2}/gi)) === null || _a === void 0 ? void 0 : _a.map(function (n) { return parseInt(n, 16); })) || []), words, spacer);
    };
    Mnemonic.prototype.toString = function () {
        return this._passphrase ? __spreadArray(__spreadArray([], this.mnemonic), [this._passphrase]).join(this.spacer) : this.mnemonic.join(this.spacer);
    };
    Mnemonic.prototype.toHex = function () {
        var _a;
        return ((_a = this.entropy.slice(0, this.bits).match(/[0-1]{8}/g)) === null || _a === void 0 ? void 0 : _a.map(function (n) { return parseInt(n, 2).toString(16).padStart(2, '0'); }).join('')) || '';
    };
    Mnemonic.prototype.toBinary = function () {
        return this.entropy;
    };
    Mnemonic.prototype.toBytes = function () {
        var _a;
        return new Uint8Array(((_a = this.entropy.slice(0, this.bits).match(/[0-1]{8}/g)) === null || _a === void 0 ? void 0 : _a.map(function (n) { return parseInt(n, 2); })) || []);
    };
    Mnemonic.prototype.toBIP39Seed = function () {
        var key = new TextEncoder().encode(unorm_1.default.nfkd(this.mnemonic.join(this.spacer)));
        var salt = new TextEncoder().encode('mnemonic' + unorm_1.default.nfkd(this._passphrase));
        return { key: key, salt: salt };
    };
    return Mnemonic;
}());
exports.Mnemonic = Mnemonic;
